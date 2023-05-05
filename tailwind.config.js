/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // https://www.figma.com/file/JOHGaqs67K52ZSj32xF8Bd/Weboldal?node-id=12%3A1075
        simonyi_zold: '#63BC47',
        dark: '#231F20',
        darkmode_regular: '#333333',
        light: '#F8F8F8',
        white: '#FFFFFF',
        simonyi_zold_halvany: '#63BC47',
        simonyi_sarga: '#FFFF3C'
      },
      fontSize: {
        h1: [
          '32px',
          {
            fontWeight: '600',
            lineHeight: '35px'
          }
        ],
        h2: [
          '24px',
          {
            fontWeight: '600',
            lineHeight: '26px'
          }
        ],
        h3: [
          '20px',
          {
            fontWeight: '600',
            lineHeight: '22px'
          }
        ],
        h4: [
          '16px',
          {
            fontWeight: '600',
            lineHeight: '17px'
          }
        ],
        text: [
          '20px',
          {
            fontWeight: '400',
            lineHeight: '26px'
          }
        ],
        link: [
          '16px',
          {
            fontWeight: '400',
            lineHeight: '20px'
          }
        ]
      },
      fontFamily: {
        // https://www.figma.com/file/JOHGaqs67K52ZSj32xF8Bd/Weboldal?node-id=12%3A1076
        heading: 'Archivo, sans-serif',
        body: 'Space Grotesk, sans-serif',
        mono: 'Menlo, monospace'
      },
      screens: {
        sm: '30em',
        msm: '40em',
        md: '51em',
        lg: '70em',
        xl: '80em',
        '2xl': '96em'
      }
    },
    darkMode: ['class', '[data-theme="dark"]']
  },
  plugins: []
};
