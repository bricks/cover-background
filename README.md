## cover-background

Cover Background Brick Component

## Install

```bash
$ npm install cover-background
```

## Usage

Mix it to your brick:

```js
var Brick = require('brick')
var Cover = require('cover-background')

module.exports = Brick(Cover, {
  show: show
});

function show (foo) {
  Cover.methods.show(foo, 'http://background.picture.jpg')
  foo.brick.bind('.cover-content', 'hello world')
}
```
