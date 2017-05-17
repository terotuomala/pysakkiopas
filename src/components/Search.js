import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Autosuggest from 'react-autosuggest';
import api from '../utils/api';
import './Search.css';

const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const names = [];
console.log(api.fetchStopInfo());

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return names.filter(name => regex.test(name));
}

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => suggestion;

const renderInputComponent = inputProps => (
  <div className="inputContainer">
    <input {...inputProps}/>
  </div>
);

class Search extends Component {

  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, {newValue, method}) => {
    this.setState({value: newValue});
  };

  onSuggestionsFetchRequested = ({value}) => {
    this.setState({suggestions: getSuggestions(value)});
  };

  onSuggestionsClearRequested = () => {
    this.setState({suggestions: []});
  };

  render() {
    const {value, suggestions} = this.state;
    const inputProps = {
      placeholder: "Etsi pysäkkejä (esim. sipoontie, V8502..)",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue} renderSuggestion={renderSuggestion}
        inputProps={inputProps} renderInputComponent={renderInputComponent}
      />
    );
  }
}

export default Search;
