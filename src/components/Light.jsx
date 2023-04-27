import React from 'react'
import SwitchBlock from '../pages/SwitchBlock'
// import {db} from '../components/firebase'
// const ctx = document.getElementById("myChart").getContext("2d")

// myChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ['Value',],
//     datasets: [{
//         label: 'Temperature',
//         data: [0],
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)'
//         ],
//         borderColor: [
//             'rgba(255, 99, 132, 1)'
//         ],
//         borderWidth: 1
//     }]
//   },
//   options: {
//       scales: {
//           yAxes: [{
//               ticks: {
//                   beginAtZero: true
//               }
//           }]
//       }
//   }
// });
// function addData(chart, label, data) {
//   chart.data.labels.push(label);
//   chart.data.datasets.forEach((dataset) => {
//       dataset.data.push(data);
//   });
//   chart.update();
// }
// var valueRef = firebase.database().ref('temps');
// valueRef.on('child_added', (snapshot) => {
//     var temperature = snapshot.val().temp;
//     var time = snapshot.val().time
//     addData(myChart, time, temperature);
// });
function Light() {
  return (
    <div>
        <SwitchBlock funcname={"Light Switch"}/>
    </div>
  )
}

export default Light