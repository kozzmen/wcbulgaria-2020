# WordCamp Bulgaria 2020

This repository contains the assets used to create the WordCamp Bulgaria 2020 theme.

## Development

To set up your development environment follow these steps:
1. `git clone git@github.com:atanas-dev/wcbulgaria-2020.git`
2. `cd wcbulgaria-2020`
3. `npm install` or `yarn install`
4. `npm run hot` or `yarn hot` and leave the terminal open. When you're done working, you can cancel it using `Ctrl+C`.
5. Open `https://localhost:8080/bundle.js`. If you get a certificate warning page, click on "Advanced" or expand the error message and click on "Accept ...".
6. Close the link we just opened. If hot reloading stops working at any time in the future you may need to repeat step 5.
7. Drag this link into the bookmarks bar of your browser: <a href="javascript:(function()%7Bwindow.jQuery('%23wp-custom-css').remove()%3Bconst%20hot%20%3D%20document.createElement('script')%3Bhot.setAttribute('src'%2C%20'https%3A%2F%2Flocalhost%3A8080%2Fbundle.js')%3Bdocument.head.appendChild(hot)%7D)()">Live Edit WCBG</a>
8. Open `https://2020.bulgaria.wordcamp.org/` and click on your new `Live Edit WCBG` bookmark - your CSS changes will now be loaded live until you stop the process from step 4.

## Production

1. `npm run build` or `yarn build`
2. `git add style.css`
3. `git commit -m 'Deploying latest CSS'`
4. `git push`
