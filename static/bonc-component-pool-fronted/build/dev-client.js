/* eslint-disable */
require('eventsource-polyfill');
const hotClient = require('webpack-hot-middleware/client?path=./__webpack_hmr&noInfo=false&reload=true');

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload();
  }
});
