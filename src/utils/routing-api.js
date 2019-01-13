import axios from 'axios';

const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

const queryStopsByName = async (name) => {
  const response = await axios.post(url, {
    "query": '{stops(name:"' + name + '"){gtfsId name code lat lon}}'
  })
  return response.data.data.stops
}

const queryStopDepartures = async (id) => {
  const response = await axios.post(url, {
    "query": '{stop(id:"' + id + '"){name code stoptimesWithoutPatterns(numberOfDepartures:10){scheduledArrival realtimeArrival realtime headsign trip{route{id shortName longName}}}}}'
  })
  return response.data.data.stop.stoptimesWithoutPatterns
}

export default { queryStopsByName, queryStopDepartures }
