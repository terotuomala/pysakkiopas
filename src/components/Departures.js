import React, {Component} from 'react';
import {Grid, Table} from 'react-bootstrap';
import Moment from 'moment';
import Icon from './Icon.js';
import './Departures.css';

function convertSeconds(seconds) {
  return Moment().startOf('day').seconds(seconds).format('H:mm');
}

function RenderDepartures(props) {
  return (
    <div>
      <h3>{props.departureList.name} {props.departureList.code}</h3>
      <Table responsive className="table-style">
        <thead>
          <tr className="active">
            <th>Lähtee</th>
            <th>Linja</th>
            <th>Määränpää</th>
          </tr>
        </thead>
        <tbody>
            {props.departureList.departures.map(function(departure, index) {
              return (
                <tr key={index}>
                  <td className="td-bold">{convertSeconds(departure.scheduledArrival)}</td>
                  <td className="td-blue"><Icon/><span className="bus-number">{departure.trip.route.shortName}</span></td>
                  <td>{departure.headsign}</td>
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
    if (this.props.departureList.hasContent) {
      return (
        <RenderDepartures departureList={this.props.departureList}/>
      )
    }
    return (
      <div></div>
    )
  }
}

export default Departures;
