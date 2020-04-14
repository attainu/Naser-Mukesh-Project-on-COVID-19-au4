import React, { Component } from 'react';

export default class StateCard extends Component {
    render() {
        let { data } = this.props;
          return <div className="StateCard">
            <h2>{data.state}</h2>
            <div className="StateCard-case-data">
                <h3>Cases</h3>
            <p>Total: {data.confirmed}</p>
            <p>Active: {data.active}</p>
            <p>New: {data.deltaconfirmed}</p>
            <p>Recovered: {data.recovered}</p>
            </div>
            <div className="StateCard-casualty-data">
                <h3>Casualties</h3>
            <p>Total: {data.deaths}</p>
            <p>New Deaths: {data.deltadeaths}</p>
            </div>
          </div>
      }
}
