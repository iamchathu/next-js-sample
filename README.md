This is a [Next.js](https://nextjs.org/) project created for DevOps tutorial by Zack.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

To build the static site run:

```bash
yarn export
```

## Notes

* This project use vulnerable lodash dependency on purpose to showcase security scan in the build pipeline and will update to new version later on the session.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

* The site will be deployed as a static site using nginx.
* Dockerfile is multi staged.