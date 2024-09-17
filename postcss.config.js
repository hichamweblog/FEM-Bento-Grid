import purgecss from '@fullhuman/postcss-purgecss';

export const plugins = {
  autoprefixer: {},
  cssnano: {
    preset: 'default',
  },
  purgecss: purgecss({
    content: ['./**/*.html'],
  }),
};
