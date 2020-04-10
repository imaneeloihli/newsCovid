//line chart
  google.charts.load('current', {'packages':['line']});
  
  var dataarray1 = [];
  var temp1 = ["countries","numberOfCases","numberOfDeaths","numberOfRecovred"];
  dataarray1.push(temp1);
  
  $.getJSON("https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest", function (data) {
  for (i = 0; i < data.length ; i++) {
		   dataarray1.push([data[i].countryregion,data[i].confirmed,data[i].deaths,data[i].recovered]);
		}
		});
		console.log(dataarray1);
  
	google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
	var data = google.visualization.arrayToDataTable(dataarray1);

	var options = {
	  title: 'Countries Statistics',
	  curveType: 'function',
	  legend: { position: 'bottom' }
	};

	var chart = new google.visualization.LineChart(document.getElementById('myChart2'));

	chart.draw(data, options);
  }