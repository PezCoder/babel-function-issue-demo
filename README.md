This is made for the issue, which is great read btw:
https://github.com/babel/babelify/issues/259

#### How to reproduce the issue
1. First look at code in `./test.js` file
2. Run `npm run gulp`
3. Look at `dist/test.js` for the output generated
4. Run `node test.js` should run fine & should log `inside Func`
5. Run `node dist/test.js` should break saying the function `insideFunc` isn't defined
