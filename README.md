# Boiler Plate React App with TypeScript and SWC
An Ejected Create React App  configured to compile with SWC

- SWC  Speedy Web Compiler hacks to an ejected create react app
- React
- TypeScript
- React Router 6
- Tailwindcss - Awesome Tailwindcss with version 6 configuration
- mdx  - Markdown for the component era. Components  rendered in the markdown.  Tailwindcss utility class batteries included.
- MobX - One mean state machine
- Yup and @types/yup  included.
- Sass batteries included

## Stuff done, stuff to do
- [x]  build and  hot reloading tested
- [x] frontmatter loader added
- [x] configured tailwindcss support
- [ ] add support for @swc/jest
- [ ] sort out tailwindcss nesting issue
- [ ] sort out gfm
- [ ] clean up janky experiment code (Progress over perfection)
- [ ] clean up directory structure

## BAGS and daydreams
-  Webassembly wasm
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
