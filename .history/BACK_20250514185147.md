Pour démarrer un **projet LMS (Learning Management System)** avec **NestJS**, voici les **configurations cruciales**, **étapes claires** et **bonnes pratiques** à suivre :

---

### 🚀 **1. Initialisation du Projet**
#### **Créer le monorepo Nx (si ce n'est pas déjà fait)**
```bash
npx create-nx-workspace@latest lms-platform --preset=nest
cd lms-platform
```

#### **Ajouter NestJS au monorepo (si Nx est déjà configuré)**
```bash
nx g @nx/nest:app api --frontendProject=web  # Si vous avez un frontend React/Angular
```

---

### 📂 **2. Structure du Projet (Backend LMS)**
```markdown
apps/
└── api/
    ├── src/
    │   ├── app/
    │   │   ├── modules/          # Modules métier
    │   │   │   ├── courses/
    │   │   │   ├── users/
    │   │   │   ├── enrollments/
    │   │   │   └── payments/
    │   │   ├── shared/           # Utilitaires communs
    │   │   │   ├── decorators/
    │   │   │   ├── guards/
    │   │   │   └── pipes/
    │   │   └── app.module.ts     # Module racine
    │   ├── assets/               # Fichiers statiques (PDF, vidéos)
    │   └── main.ts               # Bootstrap
    └── project.json              # Config Nx
```

---

### 🔧 **3. Configurations Techniques Cruciales**
#### **A. Base de Données (TypeORM/Prisma)**
- **Fichier `ormconfig.ts`** (TypeORM) :
  ```typescript
  import { DataSource } from 'typeorm';

  export default new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    entities: ['**/*.entity.ts'],
    migrations: ['apps/api/src/migrations/*.ts'],
  });
  ```
- **Module `DatabaseModule`** :
  ```typescript
  @Module({
    imports: [
      TypeOrmModule.forRootAsync({
        useFactory: () => ({
          type: 'postgres',
          url: process.env.DB_URL,
          autoLoadEntities: true,
        }),
      }),
    ],
  })
  export class DatabaseModule {}
  ```

#### **B. Validation (DTOs + Class-Validator)**
- **Exemple pour un cours (`CreateCourseDto`)**:  
  ```typescript
  import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

  export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsUrl()
    thumbnailUrl: string;
  }
  ```

#### **C. Sécurité (JWT + Guards)**
- **Module `AuthModule`** :
  ```typescript
  @Module({
    imports: [
      JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1d' },
      }),
    ],
    providers: [AuthService, JwtStrategy], // Stratégie Passport
  })
  export class AuthModule {}
  ```
- **Guard personnalisé** :
  ```typescript
  @Injectable()
  export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
      const roles = this.reflector.get<string[]>('roles', context.getHandler());
      if (!roles) return true;
      const user = context.switchToHttp().getRequest().user;
      return roles.includes(user.role);
    }
  }
  ```

---

### 📦 **4. Modules Clés pour un LMS**
#### **A. `CoursesModule`**
- **Entité `Course`** :
  ```typescript
  @Entity()
  export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @OneToMany(() => Lesson, (lesson) => lesson.course)
    lessons: Lesson[];
  }
  ```

#### **B. `UsersModule`**
- **Roles Enum** :
  ```typescript
  export enum UserRole {
    ADMIN = 'admin',
    INSTRUCTOR = 'instructor',
    STUDENT = 'student',
  }
  ```

#### **C. `EnrollmentsModule`**
- **Relation Many-to-Many** :
  ```typescript
  @Entity()
  export class Enrollment {
    @ManyToOne(() => User, (user) => user.enrollments)
    user: User;

    @ManyToOne(() => Course, (course) => course.enrollments)
    course: Course;
  }
  ```

---

### ⚙️ **5. Configuration Environnement**
#### **Fichier `.env`**
```ini
# Database
DB_URL=postgres://user:pass@localhost:5432/lms_db

# Auth
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=1d

# Storage (ex: AWS S3)
AWS_BUCKET_NAME=lms-content
AWS_REGION=eu-west-1
```

#### **Validation avec `joi`** (`apps/api/src/config/env.validation.ts`)
```typescript
import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  DB_URL: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
});
```

---

### 🛠 **6. Intégrations Essentielles**
#### **A. Stockage de Fichiers (PDF, Vidéos)**
- **Module `StorageModule`** (avec `@nestjs/serve-static` ou AWS SDK) :
  ```typescript
  @Injectable()
  export class StorageService {
    async uploadFile(file: Express.Multer.File) {
      // Upload vers S3/MinIO
    }
  }
  ```

#### **B. WebSockets (Notifications en Temps Réel)**
- **Module `NotificationsGateway`** :
  ```typescript
  @WebSocketGateway()
  export class NotificationsGateway {
    @WebSocketServer()
    server: Server;

    notifyUser(userId: string, message: string) {
      this.server.to(`user-${userId}`).emit('notification', message);
    }
  }
  ```

---

### 🧪 **7. Tests Automatisés**
#### **Structure de Tests**
```markdown
apps/api/
├── src/
│   ├── app/
│   │   ├── modules/
│   │   │   └── courses/
│   │   │       ├── courses.service.spec.ts
│   │   │       └── courses.controller.spec.ts
│   └── test/
│       └── setup.ts  # Configuration globale des tests
```

#### **Exemple de Test (Service)**
```typescript
describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CoursesService,
        { provide: getRepositoryToken(Course), useClass: Repository },
      ],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  it('should create a course', async () => {
    const course = await service.create({ title: 'NestJS 101' });
    expect(course.title).toEqual('NestJS 101');
  });
});
```

---

### 🚀 **8. Déploiement**
#### **A. Dockeriser NestJS**
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY dist/apps/api ./dist
COPY package.json .
RUN npm install --production
CMD ["node", "dist/main.js"]
```

#### **B. Exemple de `docker-compose.yml`**
```yaml
version: '3'
services:
  api:
    build:
      context: .
      dockerfile: apps/api/Dockerfile
    ports:
      - "3000:3000"
    env_file: .env
    depends_on:
      - db
  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: yourpassword
    volumes:
      - pg_data:/var/lib/postgresql/data
volumes:
  pg_data:
```

---

### 📌 **Checklist de Démarrage**
1. [ ] Initialiser le monorepo Nx + NestJS
2. [ ] Configurer TypeORM/Prisma + PostgreSQL
3. [ ] Implémenter l'authentification (JWT)
4. [ ] Créer les modules métier (`Courses`, `Users`, `Enrollments`)
5. [ ] Configurer les variables d'environnement
6. [ ] Mettre en place le stockage de fichiers
7. [ ] Écrire les tests unitaires/e2e
8. [ ] Dockeriser l'application

---

### 🔥 **Conseils Pro**
- **Utilisez `nx affected`** pour builder/tester uniquement ce qui a changé.
- **Générez une documentation API** avec `@nestjs/swagger`.
- **Monitorer avec OpenTelemetry** pour tracer les performances.

Avec cette structure, votre LMS sera **scalable, bien organisé et maintenable**. Bon développement ! 🎓🚀
