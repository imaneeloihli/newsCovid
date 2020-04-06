
<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>


<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-analytics.js"></script>

<script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-firestore.js"></script>
  // Your web app's Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD5a0OWtuQmCceki9bOK-CAdG5hk41gHgo",
    authDomain: "mydocc19.firebaseapp.com",
    databaseURL: "https://mydocc19.firebaseio.com",
    projectId: "mydocc19",
    storageBucket: "mydocc19.appspot.com",
    messagingSenderId: "590596458684",
    appId: "1:590596458684:web:909d9c80996ac4e10928b9",
    measurementId: "G-1CEGJJ3S15"
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
                var docVar = firestore.doc(currentdate + "/" + cont[i]);
                docVar.set({
                    Province_State: provin[i],
                    Confirmed_Cases: conf[i],
                    Deaths: dea[i],
                    Recovered: rec[i],


                })
            }
			console(provin);
			
        })
    };

  
  
  
  
  
 
