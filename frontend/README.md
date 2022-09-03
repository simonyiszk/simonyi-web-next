# simonyi-web-front

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=simonyi-web-frontend-kir-dev&style=for-the-badge)

## Development

Install:

- [Node.js](https://nodejs.org/en/)
- [Yarn v3](https://yarnpkg.com/getting-started/install)
- Gatsby CLI by running `npm i -g gatsby-cli`

Copy `.env.development.example` file and name it as `.env.development`, fill in the needed strapi environment variables. Start up the strapi backend from the `../backend` folder (see README).

Starting up frontend:

```sh
yarn install
yarn start
```

The local blog webpack app should be available on http://localhost:8000/ and the GraphiQL site (where you can try out fetching data from the content sources, like articles) at http://localhost:8000/\_\_\_graphql.

## License

- Default post featured image by Clément Hélardot on Unsplash: https://unsplash.com/photos/95YRwf6CNw8
- Background svgs clipped together from [undraw.co](https://undraw.co/) images by Katerina Limpitsouni

All directories and files are MIT Licensed.
