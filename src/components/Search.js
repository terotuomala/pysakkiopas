import React, {Component} from 'react';
import {Grid, Table} from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import Departures from './Departures';
import api from '../utils/api';
import './Search.css';

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      departures: []
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
    api.fetchStopsByName(value).then((response) => {
      this.setState({
        suggestions: response,
        name: '',
        code: '',
        departures: []
      })
    })
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    api.fetchStopDepartures(suggestion.gtfsId).then((response) => {
      this.setState({
        value: '',
        name: suggestion.name,
        code: suggestion.code,
        departures: response,
        suggestions: []
      })
      console.log(response)
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
      placeholder: "Etsi pysäkkejä (esim. sipoontie, V8502..)",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          ref={this.storeInputReference}
        />
        <Departures departureList={this.state} />
      </div>
    );
  }
}

export default Search;
