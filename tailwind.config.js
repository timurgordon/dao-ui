const production = !process.env.ROLLUP_WATCH; 
const colors = require('tailwindcss/colors')

module.exports = {
  future: { 
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  plugins: [

  ],
  purge: {
    content: [
      "./src/**/*.svelte",
      
    ], 
    enabled: production // disable purge in dev
  }
};
