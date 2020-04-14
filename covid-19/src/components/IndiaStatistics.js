import React, { Component } from 'react';
import StateCard from "./StateCard";
import InfectionsChart from "./InfectionsChart";
import DeathChart from "./DeathChart";
import { getCookie, setCookie } from "./../utils/storageUtils";
import { todaysDate } from '../utils/otherUtils';

export default class IndiaStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
          graphsData: {},
          stateDistrictData: [],
          loading: false,
        };
      }
      async componentDidMount() {
        let graphsData = {};
        let stateDistrictData = {};
    
        if (getCookie("fetchIndia") !== undefined) {
          graphsData = localStorage.getItem("graphsData");
          stateDistrictData = localStorage.getItem("stateDistrictData");
        } else {
          this.setState({
            loading: true,
          });
          await fetch(
            "https://api.covid19india.org/data.json",
            {
              method: "GET"
            }
          )
            .then((response) => response.json())
            .then((response) => {
              graphsData = response.cases_time_series;
              stateDistrictData = response.statewise;
            })
            .catch((err) => console.log(err));
    
          graphsData = JSON.stringify(graphsData);
          stateDistrictData = JSON.stringify(stateDistrictData);
    
          localStorage.setItem("graphsData", graphsData);
          localStorage.setItem("stateDistrictData", stateDistrictData);
          setCookie("fetchIndia", 1);
        }
    
        this.setState({
          graphsData: JSON.parse(graphsData),
          stateDistrictData: JSON.parse(stateDistrictData),
          loading: false
        });
      }
      render() {
        let { graphsData, stateDistrictData } = this.state;
    return this.state.loading ? (
      <div className="IndiaStatistics">
        <img src="/loading.gif" alt="loading" />
      </div>
    ) : (
      <div className="IndiaStatistics">
        <InfectionsChart data={graphsData} />
        <DeathChart data={graphsData} />
        <h2>{`Corona Virus Cases in India as of ${todaysDate()}`}</h2>
        
        <div className="IndiaStatistics-data">
          {stateDistrictData
            ? stateDistrictData.map(state => {
                return (
                  <StateCard
                    key={state.state}
                    data={state}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
   }
}
