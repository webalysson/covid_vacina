// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

//dados previamente carregados e chamada esta function
var labels_municipios;
var total_doses;

function gerarGraficoDosesRecebidas(dadosVacinas){
    labels_municipios = dadosVacinas.map(function(d) {return d.MUNICIPIO});
    total_doses = dadosVacinas.map(function(d) {return d.TOTAL});

    var div_grafico_doses_recebidas = document.getElementById("grafico_barras_doses_recebidas");
    grafico_barras_doses_recebidas(div_grafico_doses_recebidas);
}


function grafico_barras_doses_recebidas(div_grafico_doses_recebidas){

  var myLineChart = new Chart(div_grafico_doses_recebidas, {
    type: 'horizontalBar',
    data: {
      labels: labels_municipios,
      datasets: [{
                label: "Total",
                backgroundColor: "rgba(2,117,216,1)",
                borderColor: "rgba(2,117,216,1)",
                data: total_doses,
              }           
            ],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'Data'
          },
          gridLines: {
            display: true
          },
          ticks: {
            maxTicksLimit: 50
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 2000,
            maxTicksLimit: 10
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: true
      }
    }
  });

}

