//padrão
    (function($) {
        //dados
        //https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/notifications_mgil.csv
        d3.csv('https://docs.google.com/spreadsheets/d/1tttGLST1VR5duGWbvcQ2EyrllpAINXGe5W3fYEaZj0E/export?format=csv&gid=0')
        .then(function(data){
            console.log(data);
            gerarGraficoDosesRecebidas(data.slice(-30));        
        });

        d3.csv('https://raw.githubusercontent.com/webalysson/covidmgil/master/dados/COVIDMGIL%20-%20Bairros.csv')
        .then(function(data){
            //gerarTabela(data);
        })

})(jQuery);
