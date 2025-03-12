const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dummyjson.com/carts', // Altere para a URL da sua API
  },
});
