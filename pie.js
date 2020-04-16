  
	  //pie chart
	  
	
	
	  google.charts.load('current', {'packages':['corechart']});
	  var dataarray2 = new Array(['countries','number']);
	  
	  $.getJSON("https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest", function (data) {
	  for (i = 0; i < data.length ; i++) {
               dataarray2.push([data[i].countryregion,Math.abs(data[i].confirmed)]);
            }
			});
			console.log(dataarray2);
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable(dataarray2);

        var options = {
          title: 'Confirmed Cases'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      } 
	  
	  