# Curriculum Vitae

Curriculum Vitae with [gatsbyJS](https://www.gatsbyjs.org/) a static page generator for [reactJs](https://reactjs.org/).

## Motivation

- I dislike centralisation that has cause LinkedIn to become a dominant platform for an online "work" identity

- I agree that there is some utility in having my work history, projects and certifications publicly available

- I wanted to apply some React knowledge that I learnt doing [A Udemy course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
and modifying a gatsby CV that [firsttris created](https://github.com/firsttris/gatsby-cv)
to meet my needs seemed like a good opportunity to try this out in an existing code base.


## Page

https://stephen.resume.engineering

## Template, Author & License

Creating my own design seemed lame, I forked [A design made by Tristan Teufel](https://github.com/firsttris/gatsby-cv) 
which looked fantastic but needed a few things changed to fit my tastes.

Tristan cites https://github.com/xriley/pillar-theme by UX/UI designer [Xiaoying Riley](https://twitter.com/3rdwave_themes) 
as the design that he based his on.


## Bootstrapping & Development

Based on best practices of [gatsbyJS](https://www.gatsbyjs.org/)

- src/data/ - JSON Files
- src/markdown-pages/ - Markdown Files
- src/templates - Templates (main source for generation)
- src/components - Components
- src/translations - Localization
- src/assets - Assets, pictures and stuff

for more information on how to get started with Gatsby if refer to https://www.gatsbyjs.org/docs/

### Commands
```zsh
➜  npm run
  build
    rm -Rf public && rm -Rf .cache && gatsby build --prefix-paths
  develop
    gatsby develop
  predeploy
    rm -Rf public && rm -Rf .cache && npm run build
  prod
    gatsby serve
  cy:open
    cypress open
  cy:run
    cypress run
  test:interactive-develop
    start-server-and-test develop http://localhost:8000 cy:open
  test:ci-develop
    start-server-and-test develop http://localhost:8000 cy:run
  test:ci-live
    cypress run -C cypress.config-live.js

```

## Deployment
Deployment is dealt with through GitHub Pages, check the `.github/workflows` folder for the details.

If you're setting this up yourself you'll want to check the [ReadMe](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
for GitHub Pages, and the section about [Setting up a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages).

## Testing
I use [Cypress](https://docs.cypress.io/) for some sanity tests on every commit, again on the live website post deploy.
These tests include:
* Checks for link rot (checking if links on my page sends a non 200 response code)
* Checks to make sure the content my work and projects pages matches what's in my configuration

Eventually I'll include accessibility tests (the code is in there but commented out). Currently, my header fails for
having grey on grey text.

This testing can happen with the local version `npm run test:ci-develop` and with the live version `test:ci-live` hosted
by GitHub. If you need to change the URL check `cypress.config-live.js`.