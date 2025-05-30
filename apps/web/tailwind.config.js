const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      screens: {
        'sm': '36rem',    // 576px
        'md': '48rem',    // 768px
        'lg': '62rem',    // 992px
        'xl': '75rem',    // 1200px
        '2xl': '87.5rem'  // 1400px
      },
    }
  },
  plugins: [],
};
