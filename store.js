
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCKrYrmgNef8KYkn2kqDS1Gi6InPf5nSKE",
    authDomain: "covidnews-41cb1.firebaseapp.com",
    databaseURL: "https://covidnews-41cb1.firebaseio.com",
    projectId: "covidnews-41cb1",
    storageBucket: "covidnews-41cb1.appspot.com",
    messagingSenderId: "485617911058",
    appId: "1:485617911058:web:1e2bf9e5307c24a3685fcb",
    measurementId: "G-TDQME3FNSM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  window.onload = function (){
	  var date = new Date();
	  var currentdate = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
	  var firestore = firebase.firestore(); 
	   $.getJSON("https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest", function (data) {
            var cont = [];
            var rec = [];
            var dea = [];
            var conf = [];
            var provin = [];
            var wal = [];
            for (var i = 0; i < data.length; i++) {
                cont[i] = 0;
                rec[i] = 0;
                conf[i] = 0;
                dea[i] = 0;
            }
            for (var i = 0; i < data.length; i++) {
                dea[i] = JSON.stringify(data[i].deaths);
                provin[i] = JSON.stringify(data[i].provincestate);
                rec[i] = JSON.stringify(data[i].recovered);
                conf[i] = JSON.stringify(data[i].confirmed);
                cont[i] = JSON.stringify(data[i].countryregion);
            }
            for (var i = 0; i < data.length; i++) {
                if (dea[i] === undefined) {
                    dea[i] = "0";
                }
                else {
                    dea[i] = JSON.stringify(data[i].deaths);
                }
            }
            for (var i = 0; i < data.length; i++) {
                if (rec[i] === undefined) {
                    rec[i] = "0";
                }
                else {
                    rec[i] = JSON.stringify(data[i].recovered);
                }
            }
            for (var i = 0; i < data.length; i++) {
                if (conf[i] === undefined) {
                    conf[i] = "0";
                }
                else {
                    conf[i] = JSON.stringify(data[i].confirmed);
                }
            }
            for (var i = 0; i < data.length; i++) {
                var docVar = firestore.ref(currentdate + "/" + cont[i]);
                docVar.push({
                    Province_State: provin[i],
                    Confirmed_Cases: conf[i],
                    Deaths: dea[i],
                    Recovered: rec[i],


                })
            }
        })
    };
  
  
  
  
  
 
