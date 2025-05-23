apps/
  web/
    src/
      app/
        components/         # Composants UI réutilisables (Button, Card, Loader, etc.)
        features/           # Features métier (auth, dashboard, course, profile, etc.)
          auth/
            LoginRegister.tsx
            AuthContext.tsx
            useAuth.ts
          dashboard/
            Dashboard.tsx
            CourseCard.tsx
            ProgressBar.tsx
          course/
            CourseList.tsx
            CourseDetail.tsx
            ChapterList.tsx
            ChapterDetail.tsx
          profile/
            Profile.tsx
            EditProfile.tsx
        layouts/            # Layouts globaux (MainLayout, AuthLayout, etc.)
        pages/              # Pages principales (routing)
          index.tsx         # Home
          login.tsx
          register.tsx
          dashboard.tsx
          course/
            [id].tsx        # Page de détail d'un cours
        lib/                # Hooks, contextes, helpers, API clients
          api/
            apiClient.ts    # Axios/fetch config
            courseApi.ts
            authApi.ts
          hooks/
            useCourses.ts
            useUser.ts
          context/
            AuthContext.tsx
        styles/             # Fichiers CSS/SCSS/Tailwind config
        router/             # Fichier de routing centralisé (React Router)
          AppRouter.tsx
        app.tsx             # Entrée principale (inclut le router)
        main.tsx            # Bootstrap React
      assets/               # Images, logos, etc.
      index.html
    public/
    package.json
