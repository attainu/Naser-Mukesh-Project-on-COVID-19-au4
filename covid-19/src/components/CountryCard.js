import React, { Component } from "react";

export default class CountryCard extends Component {
  render() {
    let { data, flags } = this.props;
    return flags[data.country_name] ? (
      <div className="CountryCard">
        <img src={flags[data.country_name]} alt={data.country_name} />
        <h2>{data.country_name}</h2>
        <div className="CountryCard-case-data">
            <h3>Cases</h3>
        <p>Total: {data.cases}</p>
        <p>Active: {data.active_cases}</p>
        <p>New: {data.new_cases}</p>
        <p>Recovered: {data.total_recovered}</p>
        </div>
        <div className="CountryCard-casualty-data">
            <h3>Casualties</h3>
        <p>Total: {data.deaths}</p>
        <p>New Deaths: {data.new_deaths}</p>
        <p>Critical: {data.serious_critical}</p>
        </div>
      </div>
    ) : null
  }
}
