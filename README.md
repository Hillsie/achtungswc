# Boiler Plate React App with TypeScript and SWC
An Ejected Create React App with the purpose of configuring it with SWC. It's wip.\
TODO: Convert remaining babel to swc.

It has: 
- SWC  - Speedy Web Compiler hacks to an ejected create react app
- TypeScript
- React
- MobX
- Sass
- Yup and @types/yup  included.
- Tailwind appeared after ejecting.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder `without` sourcemaps.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
#### Easy Deployment Option
Build the app with `yarn build` and then copy the contents of the build folder to an S3 bucket. The S3 bucket should be configured to host a website.\

## Styling with Sass 
Different ways of using sass included. The classnames module has been included to combine styles (not shown in examples).\
- App.module.scss
- index.scss
- Nesting sass
