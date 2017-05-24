import React, {Component} from 'react';
import {Grid, Table} from 'react-bootstrap';
import Moment from 'moment';

function convertSeconds(seconds) {
  return Moment().startOf('day').seconds(seconds).format('H:mm');
}

function RenderDepartures(props) {
  return (
    <div>
      <h3>{props.departureList.name} {props.departureList.code}</h3>
      <Table responsive>
        <thead>
          <tr>
            <th>Kello</th>
            <th>Linja</th>
          </tr>
        </thead>
        <tbody>
            {props.departureList.departures.map(function(departure, index) {
              return (
                <tr key={index}>
                  <td>{convertSeconds(departure.scheduledArrival)}</td>
                  <td>{departure.trip.route.shortName}</td>
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

class Departures extends Component {
  render() {
    return (
      <RenderDepartures departureList={this.props.departureList}/>
    )
  }
}

export default Departures;
