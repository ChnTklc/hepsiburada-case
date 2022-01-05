# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Configured for personal usage only.

## Available Scripts

In the project directory, you can run:

### `yarn run start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn run start:api`

Runs the NodeJS server API on http://localhost:5001. You need to start api to reach out products.

### `yarn run test`

Runs `.test.tsx` files and shows the result on console.

### `yarn run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run lint`

Runs the typescript complier just for type checking then runs eslint to check any eslint error exists in files with `.ts(x)` formats. It uses `eslintrc.js`and`.eslintignore` file that you have in root folder (same directory with package.json).

### `yarn run format`

Runs eslint to check any eslint error exists in files with `.ts(x)` formats. It uses `eslintrc.js` and `.eslintignore` file that you have in root folder (same directory with package.json).

### `yarn run prettier-format`

Runs prettier for `.ts(x)` formats only and fix the prettier issues. It uses `.prettierrc` file that you have in root folder (same directory with package.json).
