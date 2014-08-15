var Brick = require("brick");

module.exports = Brick(function (cover) {
  if (!cover.url) return;

  cover.brick.bind('.cover-background', {
    'style': 'background-image:url(' + cover.url + ')'
  });
});
