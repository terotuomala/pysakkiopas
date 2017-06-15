import React, {Component} from 'react';
import {Table, Popover, OverlayTrigger} from 'react-bootstrap';
import Moment from 'moment';
import Location from './Location';
import BusIcon from './BusIcon.js';
import './Departures.css';

function convertSeconds(seconds) {
  return Moment().startOf('day').seconds(seconds).format('H:mm');
}

function RenderDepartures(props) {
  const popover = (
    <Popover id="popover-trigger-click" title={props.departureList.name + " - " + props.departureList.code}>
      <Location map={props.departureList}/>
    </Popover>
  );
  return (
    <div>
      <h3 className="h3-inline">{props.departureList.name} - {props.departureList.code}</h3>
      <OverlayTrigger placement="bottom" trigger="click" rootClose overlay={popover}>
        <h3 className="h3-inline"><i className="fa fa-map-marker" aria-hidden="true"></i></h3>
      </OverlayTrigger>
      <Table responsive>
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
                <td className="td-blue"><BusIcon/><span className="bus-number">{departure.trip.route.shortName}</span></td>
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
