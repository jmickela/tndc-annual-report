$(document).ready(function(){
    let color_faded_red = '207,66,72'; // #cf4248
    let color_tomato = '236,91,35'; // #ec5b23
    let color_yellow_tan = '255,220,124'; // #ffdc7c
    let color_hospital_green = '145,224,135'; // #91e087
    let color_turquoise_blue = '0,162,186'; // #00a2ba
    let color_dusk_blue = '38,77,158'; // #264d9e
    let color_white = '255,255,255'; // #ffffff
    

    
    let expensesChartData = {
      type: 'pie',
      data: {
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["SERVICES TO MAINTAIN OUR BUILDINGS", "SERVICES TO SUPPORT RESIDENTS", "HOUSING DEVELOPMENT", "ADMINISTRATION", "FUNDRAISING"],
        datasets: [{
          data: [7161528.6, 3501191.76, 2705466.36, 2068886.04, 954870.48],
          backgroundColor: ["rgb("+color_tomato+")", "rgb("+color_yellow_tan+")", "rgb("+color_turquoise_blue+")", "rgb("+color_hospital_green+")", "rgb("+color_dusk_blue+")"], 
          
          borderColor: ["rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)", "rgb(0, 0, 0)"],

          borderWidth: 6,
          
          hoverBackgroundColor: ["rgba("+color_tomato+",.8)", "rgba("+color_yellow_tan+",.8)", "rgba("+color_turquoise_blue+",.8)", "rgba("+color_hospital_green+",.8)", "rgba("+color_dusk_blue+",.8)"],

          hoverBorderColor: ["rgba("+color_tomato+",.8)", "rgba("+color_yellow_tan+",.8)", "rgba("+color_turquoise_blue+",.8)", "rgba("+color_hospital_green+",.8)", "rgba("+color_dusk_blue+",.8)"],
                
        }],
      },
      options: {
        title: {
          display: false,
          text: 'Total Revenue'
        },
        maintainAspectRatio: false,
        responsive: true,
        
        legend: {
          display: false,
          position: 'bottom',
          labels: {
              boxWidth: 15,
              fontColor: 'rgb(10, 10, 10)',
              fontSize: 13,
              padding: 30,
          },
        },
        tooltips: {
          enabled: false,
        },
      },
    };

    function newChart(selector, data) {
      new Chart(selector, data);
    }
  
    checkVisibility('#expensesChart', [newChart, $('#expensesChart'), expensesChartData]);

});
