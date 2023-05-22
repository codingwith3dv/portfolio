// uno.config.ts

import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWind,
  presetWebFonts,
  presetTypography,
  transformerAttributifyJsx,
} from 'unocss';

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetAttributify(),
    presetWind(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        base: 'Noto Sans',
      },
    }),
    presetTypography({
      cssExtend: {
        'ul': {
          'list-style-type': 'none',
          'margin': 0,
          'padding': 0,
        },
        'ul li:not(:first-child)': {
          'margin-top': '1rem',
        },
      },
    }),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
  theme: {
    colors: {
      'primary': '#537FE7',
      'text': '#F1F1F5',
      'bg': '#112',
      'bgTwo': '#222',
    }
  },
  preflights: [
    {
      getCSS: ({ theme }) => `
        body {
          background-color: ${theme.colors.bg};
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.base};
          --c-primary: ${theme.colors.primary};
        }
        html {
          scroll-behavior: smooth;
        }
      `
    }
  ],
});
