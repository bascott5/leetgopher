module.exports = {
    content: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.html',
    ],
    theme: {
      screens: {
        'lg': {'max': '1024px'},  
        'md': {'max': '768px'},  
        'sm': {'max': '640px'},
      }
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }