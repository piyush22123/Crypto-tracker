import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
    
  if(prices1){
    setChartData({
      labels: prices1.map((price) => {
        return convertDate(price[0]);
      }),
      datasets: [
        {
          label: "Dataset 1",
          data: prices1.map((price) => {
            return new Date(price[1]);
          }),
          borderColor: "#3a80e9",
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
        },
        {
          label: "Dataset 2",
          data: prices2.map((price) => {
            return new Date(price[1]);
          }),
          borderColor: "#61c96f",
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
        },
      ],
    });
  }
  else{
    setChartData({
      labels: prices1.map((price) => {
        return convertDate(price[0]);
      }),
      datasets: [
        {
          label: "Dataset 2",
          data: prices1.map((price) => {
            return new Date(price[1]);
          }),
          borderColor: "#3a80e9",
          borderWidth: 1,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(58, 128, 233, 0.1)",
          pointRadius: 0,
        },
      ],
    });
  }
  
}