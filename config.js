// This is client side config only - don't put anything in here that shouldn't be public!
export const endpoint = `http://localhost:4444`;
export const prodEndpoint = 'https://sickfits-production.herokuapp.com/';
export const perPage = 4;

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? `/somewhere` : '',
}