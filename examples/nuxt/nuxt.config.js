module.exports = {
  // some nuxt config...
  plugins: [
    { src: '~plugins/nuxt-easymde-plugin.js', mode: 'client' },
  ],
  css: [
    'easymde/dist/easymde.min.css',
  ],
};
