<p align="center">
  <a href="https://nextjs.org/docs">
    <img alt="NextJS" src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" width="60" />
  </a>
</p>
<h1 align="center">
  NextJS V14 with TypeScript and node v18 
</h1>

### Install NextJS

  ```shell
  # install next
  npx create-next-app@latest
  ```

### Scripts:
- `yarn install` to install all dependencies
- `yarn dev` for development mode and start with the creation of a new universe
- `yarn storybook` for the development mode and start with the creation of new storybook components.
- `yarn build` to make the build of vendor and project
- `yarn start` to deploy the generated build

## Environment variables
To expose a variable in the browser, you must preface its name with `REACT_APP_`. So `REACT_APP_API_URL` will be available in browser code but `API_KEY` will not.

> ### Note:
> - Never put variables in `.env.example`
> - To assign variables with `.env`, you must always add the environment in which the app is located: example `.env.development` or `.env.production`

## 🚀 Quick start

1.  **Clone the Project**

    Clone the project and install the dependencies, check the versions of the technologies and make sure you use the correct node version..

    ```shell
    # clone the project
    git clone URL_SSH_PROJECT OR URL_HTTPS_PROJECT
    cd my-nextjs-site/
    yarn install
    ```
2.  **Run Project.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-nextjs-site/
    # run project in localhost:3000
    yarn dev
    
    # run project in localhost:6006 for storybook
    yarn storybook
    ```

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-nextjs-site/
    yarn build
    yarn start
    ```

4.  **Open the code and start customizing!**

    Your site is now running at http://localhost:3000!

    Edit `src/app/` to see your site update in real-time!

5.  **Learn more**

    - [Documentation](https://nextjs.org/docs)
    - [Tutorials](https://nextjs.org/docs/app/building-your-application)
    - [API Reference](https://nextjs.org/docs/app/api-reference)
    - [Learn Next.js](https://nextjs.org/learn)
    - [Architecture](https://nextjs.org/docs/architecture)
  

## 🚀 Folder Architecture
  ```shell
  > - .storybook/
  >   - main.ts
  >   - preview.ts
  > - public
  > - src/
  >   - app/
  >     - [lng]/
  >       - home/
  >       - globals.css
  >       - layout.tsx
  >       - page.tsx
  >     - icon.png
  >     - layout.tsx
  >     - not-found.tsx
  >     - notFound.module.css
  >   - assets/
  >     - images
  >   - components/
  >       - atoms/
  >       - molecules/
  >       - organism/
  >   - helpers/
  >     - middlewares/
  >   - infraesctructure/
  >     - errors
  >     - interfaces
  >     - services
  >     - apis.ts
  >   - models/
  >     - data
  >     - i18n/
  >       - en
  >       - es
  >       - index.ts
  >       - translateType.ts
  >     - interfaces
  >     - schemas
  >     - types
  >   - store
  >   - stories/
  >     - assets
  >     - introduction.mdx
  >   - middleware.ts
  > - env.development
  > - env.example
  > - env.production
  > - .eslintrc.json
  > - .gitignore
  > - i18n-config.ts
  > - next-config.mjs
  > - package.json
  > - tsconfig.json
  > - yarn.lock
  ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 🚀 Quick start (Vercel)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
