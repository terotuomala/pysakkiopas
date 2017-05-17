import axios from 'axios';

module.exports = {
  fetchStopInfo: function (param) {
    let URL = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
    axios.post(URL, {
      "query": "{stops(name:\"sipoontie\"){name lat lon wheelchairBoarding}}"
    })
    .then(function(response) {
      console.log(response.data)
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
  }
}
