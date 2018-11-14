'use strict';

const debug = process.env.NODE_ENV !== 'production';
const assetPrefix = debug ? '' : 'https://www.dameonmendoza.com/sickFitsClient/';

module.exports = {
  assetPrefix
};