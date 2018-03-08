#### How to reproduce the issue
> First look at `./test.js` file
> Run `npm run gulp`
> Look at `dist/test.js` for the output generated
> Run `node test.js` should run fine & should log `inside Func`
> Run `node dist/test.js` should break saying the function `insideFunc` isn't defined
