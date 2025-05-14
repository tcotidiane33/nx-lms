Voici comment intégrer un **frontend ReactJS** avec votre **backend NestJS** dans un monorepo Nx, en optimisant les partages de code et la configuration :

---

### 🌐 **Architecture Finale (Nx + NestJS + React)**
```markdown
monorepo/
├── apps/
│   ├── api/                  # Backend NestJS (ex: localhost:3000)
│   ├── web/                  # Frontend React (ex: localhost:4200)
│   │   ├── src/
│   │   │   ├── app/          # Composants principaux
│   │   │   ├── lib/          # Features React (ex: auth, dashboard)
│   │   │   ├── environments # Configs front
│   │   │   └── main.tsx      # Point d'entrée
│   │   └── project.json      # Config Nx pour React
│   │
│   └── web-e2e/              # Tests E2E du front
│
├── libs/
│   ├── shared/               # Code partagé front/back
│   │   ├── interfaces/       # Types TS communs
│   │   └── utils/            # Fonctions partagées
│   ├── ui/                   # Composants UI réutilisables
│   └── api-client/           # Client HTTP généré (Swagger/OpenAPI)
│
├── tools/
├── package.json
└── nx.json
```

---

### 🔗 **Intégration Frontend/Backend**
#### 1. **Partage de Types (TypeScript)**
- Définissez les interfaces dans `libs/shared/interfaces/` :
  ```typescript
  // libs/shared/interfaces/user.ts
  export interface User {
    id: string;
    name: string;
  }
  ```
- Utilisez-les des deux côtés :
  ```typescript
  // apps/api/src/users/users.service.ts (Backend)
  import { User } from '@monorepo/shared';

  // apps/web/src/app/user-list.tsx (Frontend)
  import { User } from '@monorepo/shared';
  ```

#### 2. **Client API Auto-généré**
- Utilisez `openapi-generator` ou `Orval` pour générer un client HTTP depuis votre Swagger NestJS :
  ```bash
  nx g @nx/plugin:library api-client --importPath=@monorepo/api-client
  ```
- Exemple de hook React utilisant le client :
  ```typescript
  // apps/web/src/lib/users/user-list.tsx
  import { useGetUsers } from '@monorepo/api-client';

  function UserList() {
    const { data: users } = useGetUsers();
    return <div>{users?.map(user => <p>{user.name}</p>)}</div>;
  }
  ```

#### 3. **Proxy des requêtes (Éviter le CORS)**
- Configurez un proxy dans `web/project.json` :
  ```json
  {
    "targets": {
      "serve": {
        "executor": "@nx/web:dev-server",
        "options": {
          "proxyConfig": "apps/web/proxy.conf.json"
        }
      }
    }
  }
  ```
- Fichier `proxy.conf.json` :
  ```json
  {
    "/api": {
      "target": "http://localhost:3000",
      "secure": false
    }
  }
  ```
- Les requêtes vers `/api/users` seront proxyfiées vers NestJS.

---

### ⚙️ **Configuration Nx Clé**
#### `nx.json` (Extrait)
```json
{
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build", "test", "lint"]
      }
    }
  }
}
```

#### `tsconfig.base.json` (Alias)
```json
{
  "compilerOptions": {
    "paths": {
      "@monorepo/shared": ["libs/shared/src/index.ts"],
      "@monorepo/api-client": ["libs/api-client/src/index.ts"]
    }
  }
}
```

---

### 🚀 **Workflow Intégré**
1. **Lancer les deux apps en dev** :
   ```bash
   nx run-many --target=serve --projects=api,web
   ```
   - Frontend: `localhost:4200`
   - Backend: `localhost:3000`

2. **Builder pour la production** :
   ```bash
   nx build api --prod && nx build web --prod
   ```

3. **Déployer** :
   - Backend : Container Docker avec NestJS.
   - Frontend : Static files sur Netlify/Vercel.

---

### 📌 **Bonnes Pratiques**
- **Librairie UI partagée** : Créez `libs/ui` pour les composants React réutilisables (boutons, modales).
- **Environnements** : Utilisez `libs/shared/environments` pour les variables communes.
- **Hooks partagés** : Placez `useAuth()` dans `libs/shared/hooks/`.

---

### 🔥 **Avantages**
- **Hot Reload** : Modifiez le front ou le backend sans tout recharger.
- **Single Build** : `nx affected:build` pour ne builder que ce qui a changé.
- **Dépendances gérées** : Une seule `node_modules` pour tout le monorepo.

Avec cette architecture, vos équipes frontend et backend peuvent collaborer efficacement en partageant du code tout en gardant une séparation claire des responsabilités. 🚀
