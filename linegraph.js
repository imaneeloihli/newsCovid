 fetch('https://pomber.github.io/covid19/timeseries.json').then(function(response){
            return response.json();
        }).then(function(obj){
            var arr = new Array();
            arr= obj["Afghanistan"];
            var date = new Array();
            var cases =new Array();
            var donnee =new Array();
            var deaths=new Array();
            var recovered = new Array();
            for( var i=0;i<arr.length;i++){
                date.push(arr[i].date);
                cases.push(arr[i].confirmed);
                deaths.push(arr[i].deaths);
                recovered.push(arr[i].recovered);
            }

            console.log("date",date);
            console.log("confirmed",cases);
            console.log("deaths",deaths);
            console.log("recovered",recovered);
            
                Chart.defaults.global.legend.labels.usePointStyle = true;
                donnee=[];
                donnee.push(cases);
                donnee.push(recovered);
                donnee.push(deaths);
                labels=["Cases","Recovered","Deaths"];
                var dynamicColors = function() {
                    var r = Math.floor(Math.random() * 255);
                    var g = Math.floor(Math.random() * 255);
                    var b = Math.floor(Math.random() * 255);
                    return "rgb(" + r + "," + g + "," + b + ")";
                 };    
                var ctxgen = document.getElementById('genChart').getContext('2d');
                var chartgen = new Chart(ctxgen, {
                    type: 'line',
                    data: {
                        labels: date,
                        
                    },
                    options:{
                        legend:{
                            display: true,
                        }
                    }
                });
                for(let i=0;i<donnee.length;i++){
                    chartgen.data.datasets.push({
                        fill: false,                        
                        data: donnee[i],  
                        label: labels[i],
                        borderColor: dynamicColors(),
                        pointBorderColor: dynamicColors(),
                        pointHoverBackgroundColor: dynamicColors(),
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 2,
                        pointBackgroundColor: dynamicColors(),
                        pointBorderWidth: 0,
                        pointHoverRadius: 3,
                        pointHoverBorderColor: "#fff",
                        pointHoverBorderWidth: 3,
                        pointRadius: 0,
                        pointHitRadius: 5,

                    });
                }
                chartgen.update();
                
            })
        
	

     