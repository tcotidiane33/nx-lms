Voici une **analyse ultra-détaillée** des configurations techniques pour un monorepo Nx avec NestJS (backend) et React (frontend), incluant tous les fichiers critiques et leurs paramètres clés :

---

### 🔧 **1. Configuration Nx Racine (`nx.json`)**
```json
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],  // Build les dépendances d'abord
      "inputs": ["{projectRoot}/**/*", "!{projectRoot}/**/*.spec.ts"],
      "cache": true
    },
    "serve": {
      "executor": "@nx/web:dev-server",
      "options": {
        "port": 4200,
        "hmr": true
      }
    }
  },
  "affected": {
    "defaultBase": "main"  // Branche Git de référence pour `nx affected`
  },
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build", "lint", "test", "e2e"]
      }
    }
  }
}
```

**Explications :**
- `targetDefaults` : Définit des comportements par défaut pour les cibles (build, serve, etc.).
- `affected` : Optimise l'exécution des tâches basée sur les changements Git.
- `cacheableOperations` : Active le cache pour accélérer les ré-exécutions.

---

### 📦 **2. `package.json` Global**
```json
{
  "scripts": {
    "start:api": "nx serve api",
    "start:web": "nx serve web",
    "build:all": "nx run-many --target=build --all",
    "test:affected": "nx affected:test"
  },
  "dependencies": {
    "@nestjs/common": "^9.0.0",
    "react": "^18.2.0",
    "shared": "file:libs/shared"  // Lien symbolique vers la lib partagée
  },
  "devDependencies": {
    "@nx/nest": "^16.0.0",
    "@nx/react": "^16.0.0",
    "@nx/webpack": "^16.0.0",
    "typescript": "~5.0.0"
  }
}
```

**Points Clés :**
- **Lien symbolique** : `"shared": "file:libs/shared"` permet d'importer la lib comme un package npm.
- **Versions alignées** : Tous les plugins Nx doivent avoir la même version majeure.

---

### 🛠 **3. Configuration NestJS (`apps/api/project.json`)**
```json
{
  "targets": {
    "build": {
      "executor": "@nx/webpack:webpack",
      "options": {
        "outputPath": "dist/apps/api",
        "main": "apps/api/src/main.ts",
        "tsConfig": "apps/api/tsconfig.app.json",
        "assets": ["apps/api/src/assets"],
        "webpackConfig": "apps/api/webpack.config.js"
      }
    },
    "serve": {
      "executor": "@nx/js:node",
      "options": {
        "buildTarget": "api:build",
        "port": 3000
      }
    }
  }
}
```

**Détails Techniques :**
- **Webpack** : Personnalisable via `webpack.config.js` pour ajouter des plugins.
- **Ports** : Le backend écoute sur `3000`, le frontend sur `4200`.

---

### ⚛️ **4. Configuration React (`apps/web/project.json`)**
```json
{
  "targets": {
    "build": {
      "executor": "@nx/webpack:webpack",
      "options": {
        "outputPath": "dist/apps/web",
        "index": "apps/web/src/index.html",
        "main": "apps/web/src/main.tsx",
        "tsConfig": "apps/web/tsconfig.app.json",
        "styles": ["apps/web/src/styles.css"],
        "webpackConfig": "apps/web/webpack.config.js"
      }
    },
    "serve": {
      "executor": "@nx/web:dev-server",
      "options": {
        "proxyConfig": "apps/web/proxy.conf.json"
      }
    }
  }
}
```

**Fichier `proxy.conf.json` :**
```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "pathRewrite": { "^/api": "" }
  }
}
```

**Pourquoi ?**  
Évite les erreurs CORS en développement en proxifiant les requêtes `/api` vers NestJS.

---

### 🔗 **5. Partage de Code (`libs/shared/tsconfig.json`)**
```json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "composite": true,  // Nécessaire pour les références de projet
    "outDir": "../../../dist/libs/shared"
  },
  "references": [
    { "path": "../database/tsconfig.json" }  // Dépendances entre libs
  ]
}
```

**Implications :**
- `composite: true` : Permet à TypeScript de suivre les dépendances entre libs.
- `references` : Lie les libs entre elles pour une vérification de type précise.

---

### 🧩 **6. Configuration TypeScript Globale (`tsconfig.base.json`)**
```json
{
  "compilerOptions": {
    "paths": {
      "@monorepo/shared": ["libs/shared/src/index.ts"],
      "@monorepo/api-client": ["libs/api-client/src/index.ts"]
    },
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

**Alias Import :**  
Permet d'importer du code partagé directement :
```typescript
import { User } from '@monorepo/shared';
```

---

### 🔐 **7. Variables d'Environnement**
#### Fichier `.env` (Racine)
```ini
# Backend
DB_URL=postgres://user:pass@localhost:5432/db
JWT_SECRET=super_secret

# Frontend
VITE_API_URL=http://localhost:3000
```

**Chargeur pour NestJS (`apps/api/src/main.ts`) :**
```typescript
import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });
```

**Configuration React (`apps/web/vite.config.ts`) :**
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
  }
});
```

---

### 🧪 **8. Tests E2E**
#### Fichier `apps/api-e2e/project.json`
```json
{
  "targets": {
    "e2e": {
      "executor": "@nx/jest:jest",
      "options": {
        "jestConfig": "apps/api-e2e/jest.config.ts",
        "passWithNoTests": true
      }
    }
  }
}
```

**Exemple de test (`apps/api-e2e/src/app.e2e-spec.ts`) :**
```typescript
describe('API (e2e)', () => {
  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/health')
      .expect(200)
      .expect({ status: 'ok' });
  });
});
```

---

### 🔄 **9. Workflow CI/CD (Exemple GitHub Actions)**
```yaml
name: CI
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: nx affected:test
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: nx build api --prod
      - run: nx build web --prod
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist
```

---

### 📌 **Points d'Attention Techniques**
1. **Cache Nx** :  
   Le dossier `.nx/cache` peut devenir volumineux. À ignorer dans `.gitignore`.

2. **Dépendances Cycliques** :  
   Utilisez `nx graph` pour détecter les dépendances circulaires entre libs.

3. **Performance Build** :  
   Pour les gros monorepos, activez le **cache distribué** avec Nx Cloud :
   ```bash
   npx nx connect-to-nx-cloud
   ```

4. **Dockerisation** :  
   Exemple de `Dockerfile` pour l'API NestJS :
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY dist/apps/api ./dist
   COPY package.json .
   RUN npm install --production
   CMD ["node", "dist/main.js"]
   ```

---

Cette configuration couvre **100% des aspects techniques** d'un monorepo professionnel avec Nx, NestJS et React. Chaque paramètre a été optimisé pour la performance, la maintenabilité et la scalabilité. 🚀
