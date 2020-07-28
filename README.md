# WordCamp Bulgaria 2020

This repository contains the assets used to create the WordCamp Bulgaria 2020 theme.

## Development

To set up your development environment follow these steps:
1. Run `git clone git@github.com:atanas-dev/wcbulgaria-2020.git` in your terminal in a directory of your choice.
2. Run `cd wcbulgaria-2020` in your terminal.
3. Run `npm install` or `yarn install` in your terminal.
4. Open `https://localhost:8080/bundle.js`. If you get a certificate warning page, click on "Advanced" or expand the error message and click on "Accept ...".
5. Close the link we just opened. *If hot reloading stops working at any time in the future you may need to repeat step 5.*
6. Run `npm run hot` or `yarn hot` in your terminal and leave it open. When you're done working, you can cancel it using `Ctrl+C`.
7. Open `https://2020.bulgaria.wordcamp.org/`.
8. Open your browser's Dev Tools and paste this code in the console:
  ```js
  window.jQuery('#wp-custom-css').remove();const hot = document.createElement('script');hot.setAttribute('src', 'https://localhost:8080/bundle.js');document.head.appendChild(hot);
  ```
You will now have live editing of CSS enabled. To start work again at a later time, only follow steps 6-8.

## Production

1. `npm run build` or `yarn build`
2. `git add style.css`
3. `git commit -m 'Deploying latest CSS'`
4. `git push`
