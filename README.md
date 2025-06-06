# Lmsrepo
# ██████╗  ██████╗ ██╗   ██╗██████╗ ██╗     ███████╗
# ██╔══██╗██╔═══██╗██║   ██║██╔══██╗██║     ██╔════╝
# ██║  ██║██║   ██║██║   ██║██████╔╝██║     █████╗
# ██║  ██║██║   ██║██║   ██║██╔══██╗██║     ██╔══╝
# ██████╔╝╚██████╔╝╚██████╔╝██████╔╝███████╗███████╗
# ╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝╚══════╝


<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/tutorials/2-react-monorepo/1r-introduction/1-welcome?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/LZqk7ljom5)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve lmsrepo
```

To create a production bundle:

```sh
npx nx build lmsrepo
```

To see all available targets to run for a project, run:

```sh
npx nx show project lmsrepo
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/tutorials/2-react-monorepo/1r-introduction/1-welcome?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
# nx-lms



## Key Features

- **Browse & Filter Courses**: Easily explore and discover courses tailored to your interests.
- **Purchase Courses using Stripe**: Seamlessly complete transactions with secure payment processing via Stripe.
- **Mark Chapters as Completed or Uncompleted**: Track your progress within each course.
- **Progress Calculation**: Monitor your progress with detailed statistics for each course.
- **Student Dashboard**: Access a personalized dashboard to manage your courses and track your learning journey.
- **Teacher Mode**: Empower educators with tools to create, manage, and monitor courses.
- **Create New Courses**: Effortlessly create new courses with customizable settings.
- **Create New Chapters**: Structure course content by adding chapters and organizing them efficiently.
- **Drag n’ Drop Reordering**: Easily rearrange chapter positions using intuitive drag and drop functionality.
- **Multimedia Support**: Upload thumbnails, attachments, and videos seamlessly with UploadThing.
- **Video Processing**: Enhance video content with Mux for optimized playback.
- **HLS Video Player**: Enjoy high-quality video streaming with Mux's HLS video player.
- **Rich Text Editor**: Create engaging chapter descriptions with a user-friendly rich text editor.
- **Authentication**: Ensure secure access with authentication powered by Clerk.
- **ORM**: Utilize Prisma for efficient and type-safe database access.
- **Database**: Benefit from MySQL database management with Aiven.

```bash
# Structure NX optimale
apps/
├── admin/    # Next.js
├── web/      # React/Remix
└── api/      # NestJS
libs/
├── shared/   # DTOs Typescript
└── lms/      # Core business logic
```

```sh

  // 🌐 Graph & Utilities
  "graph": "nx graph",
  "help": "nx help",
  "dep-graph": "nx dep-graph",

  // 🚀 Dev Servers
  "dev:api": "nx serve api",
  "dev:web": "nx serve web",

  // 🏗️ Builds
  "build": "nx run-many --target=build --projects=api,web --parallel",
  "build:api": "nx build api",
  "build:web": "nx build web",

  // 🧪 Tests
  "test": "nx run-many --target=test --projects=api,web --parallel",
  "test:api": "nx test api",
  "test:web": "nx test web",

  // 🧹 Linting
  "lint": "nx run-many --target=lint --all --parallel",
  "lint:api": "nx lint api",
  "lint:web": "nx lint web",

  // 🧪 E2E Tests
  "e2e": "nx run-many --target=e2e --projects=api-e2e,web-e2e",
  "e2e:api": "nx e2e api-e2e",
  "e2e:web": "nx e2e web-e2e",

  // 🧬 Prisma (API only)
  "prisma:generate": "nx run api:prisma:generate",
  "prisma:migrate": "nx run api:prisma:migrate",
  "prisma:studio": "nx run api:prisma:studio",

  // 🧼 Clean dist folders (optional but useful)
  "clean": "rimraf dist node_modules && pnpm install",

  // 🔄 Migrations
  "migrate:latest": "pnpm dlx nx@latest migrate latest && pnpm install --no-frozen-lockfile",
  "migrate:run": "nx migrate --run-migrations"

```