# blog-backend-strapi

### `About:`
This is the backend CMS that is powering a `Next.js` blog.  

### `Tech Stack:`
| JavaScript | Node.js | PostgreSQL | Heroku | Strapi | Cloudinary | AWS
| :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/heroku-4.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/strapi-2.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" width="50" height="50"/>  

### `Specifics:`
The `main` branch of this git repository deploys automatically to Heroku ([adam-blog-backend-strapi.herokuapp.com](https://adam-blog-backend-strapi.herokuapp.com/)) for CI/CD.  The production environment uses a PostgreSQL database and uploads media to Cloudinary.  Changes made to the CMS ***must*** be made by developing locally.


### `Local Development:`
#### `Requirements:`

* Node.js <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" width="25" height="25"/> (v12-16 only)
* `.env` for environment variables

```bash
$ # check node.js version
$ node -v
$ # if using older or newer version of node.js
$ nvm use node 16
$ # install dependencies
$ npm i
$ # start local development node.js server
$ npm run develop
$ # or
$ yarn develop
```
    
---
---

<!-- # 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub> -->
