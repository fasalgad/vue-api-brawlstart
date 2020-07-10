import axios from "axios";
const ApiBrawl = {};
ApiBrawl.install = function(Vue, options) {
  // 1. agregar método global o propiedad
  // 4. agregar un método de instancia
  Vue.prototype.$apiBrawl = axios.create({
    baseURL: process.env.VUE_APP_BASEURL_API_BRAWLSTART,
    headers: {
      authorization: `Bearer ${process.env.VUE_APP_TOKEN_API_BRAWLSTART}`,
      accept: "application/json",
      "Access-Control-Allow-Origin": "https://developer.brawlstars.com",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
      "Access-Control-Allow-Methods": "GET",
      ':authority': 'api.brawlstars.com',
      'sec-fetch-mode': 'cors',
      ':method': 'GET'

    },
  });
};
console.log(
  process.env.VUE_APP_BASEURL_API_BRAWLSTART,
  process.env.VUE_APP_TOKEN_API_BRAWLSTART
);

export default ApiBrawl;
