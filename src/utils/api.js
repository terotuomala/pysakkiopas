import axios from 'axios';

const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

function queryStopsByName(name) {
  return axios.post(url, {
    "query": '{stops(name:"' + name + '"){name code lat lon}}'
  })
};

function handleError(error) {
  console.warn(error);
  return null;
};

module.exports = {
  fetchStopsByName: function(name) {
    return queryStopsByName(name).then(function(response) {
      return response.data.data.stops
    }).catch(handleError);
  }
};
