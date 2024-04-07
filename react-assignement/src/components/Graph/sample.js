/*
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const token = localStorage.getStorage.getItems("token");
    if(token)
    {
        const axiosConfig={
            headers:{
                Accept:"application/json",
                Authorization: `Bearer ${token}`
            }
        };
        axios.get(
            "https://datausa.io/api/data?drilldowns=Nation&measures=Population", axiosConfig).then((res) =>{

            
         if(res.data.data.length > 0){
            setPopulationData({
                labels: res.data.data.map((individualData) =>individualData.month),
                datasets:[{
                    label: 'Amount',
                    data: res.data.data.map((individualData)=>individualData.amount),
                }]
            })
          }
    }
    
      , []);
  
}



  return (
    <div>
      <h2>Population Data for Different Nations</h2>
     </div>
  );
};

export default PopulationGraph;
*/
