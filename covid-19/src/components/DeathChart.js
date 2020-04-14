import React, { Component } from 'react';
import CanvasJSReact from './../utils/canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class DeathChart extends Component {
    render() {
        let {data} = this.props;
        let dataPoints = [];

        for (let x = 0; x < data.length; x++) {
            dataPoints.push({
                x: new Date(`${data[x].date}2020`),
                y: Number(data[x].totaldeceased)
            })
        }
        const options = {
			theme: "light2",
			title: {
				text: "Covid-19 Deaths in India"
			},
			axisY: {
				title: "Deaths",
				prefix: "",
				includeZero: false
			},
			data: [{
                color: "rgb(194, 20, 20)",
				type: "line",
				xValueFormatString: "DD MMM YYYY",
				yValueFormatString: "#,### deaths",
				dataPoints: dataPoints
			}]
		}
        return (
            <div className="DeathChart">
                <CanvasJSChart options = {options} />
            </div>
        )
    }
}


