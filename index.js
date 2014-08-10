var Brick = require("brick");

module.exports = Brick(function (cover) {
  cover.brick.bind('.cover-background', {
    'style': 'background-image:url(' + cover.url + ')'
  });
});
