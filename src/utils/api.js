import axios from 'axios';

const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

function queryStopsByName(name) {
  return axios.post(url, {
    "query": '{stops(name:"' + name + '"){gtfsId name code lat lon}}'
  })
};

function queryStopDepartures(id) {
  return axios.post(url, {
    "query": '{stop(id:"' + id + '"){name code stoptimesWithoutPatterns(numberOfDepartures:10){scheduledArrival headsign trip{route{id shortName longName}}}}}'
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
  },

  fetchStopDepartures: function(id) {
    return queryStopDepartures(id).then(function(response) {
      return response.data.data.stop.stoptimesWithoutPatterns
    }).catch(handleError);
  }
};
