# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> npm install
> npm start
```

`npm start` will automatically run the compilationo of the files through the webpack in order for them to be displayed as one simple file, called bundle.js. This file only has vanilla JS since the browser only understands it. So, that's why we need the Babel compiler and the Webpack as well.

## Important Notes

A React application is created through many components, and each component returns HTML. That's it!
So, our purpose is to write JSX in different components, make some mix in between them, and them generate
HTML that is going to be shown in the page.