import axios from "axios";
const ApiBrawl = {};
ApiBrawl.install = function(Vue, options) {
  // 1. agregar método global o propiedad
  // 4. agregar un método de instancia
  Vue.prototype.$apiBrawl = axios.create({
    baseURL: process.env.VUE_APP_BASEURL_API_BRAWLSTART,
    headers: {
      Authorization: `Bearer ${process.env.VUE_APP_TOKEN_API_BRAWLSTART}`,
      "Access-Control-Allow-Origin":
        process.env.VUE_APP_BASEURL_API_BRAWLSTART_ORIGIN,
        Origin: process.env.VUE_APP_BASEURL_API_BRAWLSTART_ORIGIN,
        Referer:process.env.VUE_APP_BASEURL_API_BRAWLSTART_ORIGIN
    },
  });
};
console.log(
  process.env.VUE_APP_BASEURL_API_BRAWLSTART,
  process.env.VUE_APP_TOKEN_API_BRAWLSTART
);

export default ApiBrawl;
