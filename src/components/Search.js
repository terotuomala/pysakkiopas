import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import Departures from './Departures';
import routingApi from '../utils/routing-api';
import SearchIcon from './SearchIcon';
import './Search.css';

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name} - {suggestion.code}</span>
  );
}

function renderInputComponent(inputProps) {
  return (
    <div className="inputContainer">
      <SearchIcon />
      <input {...inputProps} />
    </div>
  )
};

class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      departures: [],
      hasContent: false
    };
  }

  componentDidMount() {
    this.input.focus();
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    routingApi.queryStopsByName(value).then((response) => {
      this.setState({
        suggestions: response,
        hasContent: false
      })
    })
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    routingApi.queryStopDepartures(suggestion.gtfsId).then((response) => {
      this.setState({
        value: '',
        name: suggestion.name,
        code: suggestion.code,
        lat: suggestion.lat,
        lon: suggestion.lon,
        departures: response,
        suggestions: [],
        hasContent: true
      })
    })
  };

  storeInputReference = autosuggest => {
    if (autosuggest !== null) {
      this.input = autosuggest.input;
    }
  };

  render() {
    const { value, suggestions} = this.state;
    const inputProps = {
      placeholder: "Etsi pysäkkejä nimellä (esim. jumbo, sipoontie, viikki...)",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <Col lg={8} lgOffset={2} md={10} mdOffset={1}>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={this.onSuggestionSelected}
            renderInputComponent={renderInputComponent}
            inputProps={inputProps}
            ref={this.storeInputReference}
          />
        </Col>
        <Col lg={8} lgOffset={2} md={10} mdOffset={1}>
          <Departures departureList={this.state} />
        </Col>
      </div>
    );
  }
}

export default Search;
