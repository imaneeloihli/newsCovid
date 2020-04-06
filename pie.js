  
	  //pie chart
	  
	  
	  google.charts.load('current', {'packages':['corechart']});
	  var dataarray = [];
	  var temp = ["countries","number"];
	  dataarray.push(temp);
	  $.getJSON("https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest", function (data) {
	  for (i = 0; i < data.length ; i++) {
               dataarray.push([data[i].countryregion,data[i].confirmed]);
            }
			});
			console.log(dataarray);
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable(dataarray);

        var options = {
          title: 'Confirmed Cases'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      } 
	  
	  