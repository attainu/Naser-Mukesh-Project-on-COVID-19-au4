import React, { Component } from 'react';
import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";
import CountryPicker from "./CountryPicker/CountryPicker";

import { fetchData } from "./api/index";

class Home extends Component {

    state = {
      data: {},
      country: ""
    }
  
    async componentDidMount() {
      const fetchedData = await fetchData()
  
      this.setState({ data: fetchedData });
    }
  
    handleCountryChange = async (country) => {
     const fetchedData = await fetchData(country);
  
     this.setState({ data: fetchedData, country });
    }
    render() {
      const { data, country } = this.state
      return(
        <div className="home-container">
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      )
    }
  }
  
  export default Home;
