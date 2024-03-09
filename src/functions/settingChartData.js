import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices) => {
    setChartData({
        labels: prices.map((price) => {
          return convertDate(price[0]);
        }),
        datasets: [
          {
            label: "Dataset 1",
            data: prices.map((price) => {
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