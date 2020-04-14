import React, { Component } from "react";
import CountryCard from "./CountryCard";
import { getCookie, setCookie } from "./../utils/storageUtils";

export default class CasesByCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      casesByCountry: {},
      loading: false,
    };
  }
  async componentDidMount() {
    let countryData = {};

    if (getCookie("fetch") !== undefined) {
      countryData = localStorage.getItem("countryData");
    } else {
      this.setState({
        loading: true,
      });
      await fetch(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":
              "e79c24a64emsh3d77c417035593dp1628f9jsn6eafd2ea48ef",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          countryData = response;
        })
        .catch((err) => console.log(err));

      countryData = JSON.stringify(countryData);

      localStorage.setItem("countryData", countryData);
      setCookie("fetch", 1);
    }

    if (localStorage.getItem("flags") === null) {
      let flags = [];
      await fetch("https://restcountries.eu/rest/v2/all", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          flags = response;
        })
        .catch((err) => console.log(err));

      let flagData = {};

      for (let x = 0; x < flags.length; x++) {
        flagData[flags[x].name] = flags[x].flag;
      }

      flagData = JSON.stringify(flagData);

      localStorage.setItem("flags", flagData);
    }

    this.setState({
      casesByCountry: JSON.parse(countryData),
      loading: false,
    });
  }
  render() {
    let { statistic_taken_at, countries_stat } = this.state.casesByCountry;
    let flagData = JSON.parse(localStorage.getItem("flags"));
    return this.state.loading ? (
      <div className="CasesByCountry">
        <img src="/loading.gif" alt="loading" />
      </div>
    ) : (
      <div className="CasesByCountry">
        <h2>{`Corona Virus Cases By Country as of ${statistic_taken_at}`}</h2>
        <div className="CasesByCountry-data">
          {countries_stat
            ? countries_stat.map((country) => {
                return (
                  <CountryCard
                    key={country.country_name}
                    flags={flagData}
                    data={country}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
