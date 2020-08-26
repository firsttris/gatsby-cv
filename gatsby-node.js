const path = require('path');

exports.createPages = async ({ page, actions }) => {
  const { createPage } = actions;

  const router = [{ path: '/', name: 'CV' }];

  const locales = ['de', 'en'];

  const types = ['', 'work', 'opensource'];

  router.forEach(route => {
    locales.forEach(locale => {
      types.forEach(type => {
        createPage({
          path: `/${locale}${route.path}${type}`,
          component: path.resolve(`src/templates/${route.name}.tsx`),
          context: { locale }
        });
      });
    });
  });
};
