function myFunction() {
    var date = document.getElementById("myForm.date").value;
    
    var basePath = "/home/rohit/Desktop/CDBB/scripts/ttn_data/mnt/tfc_data/tfc/csn_ttn/data_bin/";
    var workingDirectory = basePath.concat(date)

    alert(workingDirectory)
  }

var c = []; 
var randomNumber = Math.random()*190;
    function getRandomDataPoint(x){
        if (x == "x"){
            var _return
            return Math.random()*20;
        }
        else if (x == "y"){
            return Math.random()*10 + randomNumber; 
        } 
        else{

        } 
    }
    var xPoints = [];
    var yPoints = [];
    var storage = [];
    for(var i=0;i<100;i++)
    { 
        xPoints[i] = Math.random()*20;
        yPoints[i] = Math.random()*10 + randomNumber;
        x = xPoints[i];
        y = yPoints[i];
        var json = {x: x, y: y};
        storage.push(json); 
    }

    var concatenatedArray = xPoints.concat(yPoints);



    let myChart = document.getElementById('myChart');//.getContext('2d');
    Chart.defaults.global.defaultColor = '#000000'; 

    let massPopChart = new Chart(myChart, {
        type: 'scatter',
            data: {
                datasets: [{label: 'Data Set', data: storage}],
            },
            options: {
                fill: false,
                spanGap: false,
                showLines: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }       
    });
