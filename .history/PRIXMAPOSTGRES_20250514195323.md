Si vous débutez avec **Prisma** et **PostgreSQL** dans un projet NestJS (comme votre LMS), voici un guide étape par étape simplifié pour bien configurer votre base de données.

---

### 🚀 **Étapes pour Utiliser Prisma avec PostgreSQL**

### 1. **Installation de Prisma**
Dans votre projet NestJS (dans le monorepo Nx), installez Prisma :
```bash
cd apps/api  # Placez-vous dans le dossier de l'API
npm install prisma @prisma/client
```

### 2. **Initialiser Prisma**
Lancez la configuration initiale :
```bash
npx prisma init
```
Cela crée :
- Un dossier `prisma` avec un fichier `schema.prisma`.
- Un fichier `.env` pour les variables d’environnement.

---

### 3. **Configurer PostgreSQL dans `schema.prisma`**
Ouvrez `prisma/schema.prisma` et remplacez le contenu par :
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")  // À définir dans `.env`
}

generator client {
  provider = "prisma-client-js"
}
```

### 4. **Configurer la connexion à PostgreSQL dans `.env`**
Éditez le fichier `.env` :
```ini
DATABASE_URL="postgresql://VOTRE_UTILISATEUR:VOTRE_MDP@localhost:5432/NOM_DE_LA_BDD?schema=public"
```
- Remplacez `VOTRE_UTILISATEUR`, `VOTRE_MDP`, et `NOM_DE_LA_BDD` par vos identifiants PostgreSQL.

---

### 5. **Démarrer PostgreSQL (Docker recommandé pour les débutants)**
Si vous n’avez pas PostgreSQL installé localement, utilisez Docker :
```bash
docker run --name lms-postgres -e POSTGRES_PASSWORD=monmotdepasse -e POSTGRES_USER=monuser -e POSTGRES_DB=lmsdb -p 5432:5432 -d postgres:13
```
- Cela crée un conteneur PostgreSQL avec :
  - Utilisateur : `monuser`
  - Mot de passe : `monmotdepasse`
  - Base de données : `lmsdb`

---

### 6. **Créer un Modèle dans `schema.prisma`**
Ajoutez un exemple de modèle (ex : `Course` pour un LMS) :
```prisma
model Course {
  id          String   @id @default(uuid())
  title       String
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

### 7. **Générer les Migrations et le Client Prisma**
```bash
npx prisma migrate dev --name init
```
- Crée une migration initiale.
- Génère le client Prisma (`@prisma/client`).

---

### 8. **Intégrer Prisma dans NestJS**
#### **Créer un service Prisma**
Générez un module et un service pour Prisma :
```bash
nx g module prisma --project=api
nx g service prisma --project=api
```
Éditez `apps/api/src/prisma/prisma.service.ts` :
```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```

#### **Importer le module Prisma dans `AppModule`**
```typescript
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
})
export class AppModule {}
```

---

### 9. **Utiliser Prisma dans un Service NestJS**
Exemple avec un `CoursesService` :
```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCourseDto) {
    return this.prisma.course.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.course.findMany();
  }
}
```

---

### 10. **Vérifier que tout fonctionne**
- Lancez l’API :
  ```bash
  nx serve api
  ```
- Testez avec **Prisma Studio** (interface visuelle) :
  ```bash
  npx prisma studio
  ```
  Ouvrez http://localhost:5555 pour voir/modifier les données.

---

### 🔥 **Conseils pour Débutants**
1. **Utilisez Docker** pour PostgreSQL : évite les problèmes d’installation locale.
2. **Backup automatique** : Ajoutez un script dans `package.json` pour sauvegarder les données :
   ```json
   "scripts": {
     "db:backup": "docker exec lms-postgres pg_dump -U monuser -d lmsdb > backup.sql"
   }
   ```
3. **Envoyez le schéma Prisma en équipe** : Le fichier `schema.prisma` doit être versionné (Git).

---

### 📌 **Résumé des Commandes Clés**
| Commande | Description |
|----------|-------------|
| `npx prisma init` | Initialise Prisma. |
| `npx prisma migrate dev` | Crée et applique une migration. |
| `npx prisma studio` | Ouvre l’interface de gestion de la BDD. |
| `docker exec -it lms-postgres psql -U monuser -d lmsdb` | Connexion directe à PostgreSQL. |

Avec cette configuration, vous avez une base **solide, scalable et facile à déboguer** pour votre LMS. 🎓
