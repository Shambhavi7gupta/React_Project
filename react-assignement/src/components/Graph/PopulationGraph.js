import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./styles.css";
import axios from "axios";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    fetchPopulationData();
  }, []);

  const fetchPopulationData = async () => {
    try {
      const response = await axios.get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      setPopulationData(response.data.data);
    } catch (error) {
      console.error("Error fetching population data:", error);
    }
  };

  const prepareChartData = () => {
    const labels = populationData.map((entry) => entry.Year);
    const datasets = [
      {
        label: "United States",
        data: populationData.map((entry) => entry.Population),
        fill: false,
        borderColor: "#" + ((Math.random() * 0xffffff) << 0).toString(16), // Random color
      },
    ];

    return {
      labels: labels,
      datasets: datasets,
    };
  };

  return (
    <div className="population-graph-container">
      <h2 id="header">Population Data for Different Nations</h2>
      <div className="chart-wrapper">
        {populationData.length > 0 && (
          <Line
            style={{ height: 1000, width: 1000, padding: 20 }}
            data={prepareChartData()}
            options={{
              scales: {
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Population",
                    },
                  },
                ],
                xAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Year",
                    },
                  },
                ],
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PopulationGraph;
