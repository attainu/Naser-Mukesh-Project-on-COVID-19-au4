import React, { Component } from 'react';
import CanvasJSReact from './../utils/canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class InfectionsChart extends Component {
    render() {
        let {data} = this.props;
        let dataPoints = [];

        for (let x = 0; x < data.length; x++) {
            dataPoints.push({
                x: new Date(`${data[x].date}2020`),
                y: Number(data[x].totalconfirmed)
            })
        }
        const options = {
			theme: "light2",
			title: {
				text: "Infection Growth of Covid-19 in India"
			},
			axisY: {
				title: "Cases",
				prefix: "",
				includeZero: false
			},
			data: [{
				type: "line",
				xValueFormatString: "DD MMM YYYY",
				yValueFormatString: "#,### confirmed cases",
				dataPoints: dataPoints
			}]
		}
        return (
            <div className="InfectionsChart">
                <CanvasJSChart options = {options} />
            </div>
        )
    }
}


