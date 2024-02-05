
function updateDateTime() {
    var locElement = document.getElementById('loc');
    var locElement2 = document.getElementById('lic');
    var currentDate = new Date();
    var mois = ["janv", "févr", "mars", "avr", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"];
    var currentDay = currentDate.getDate()+' '+mois[currentDate.getMonth()]+' '+currentDate.getFullYear();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();
    var formattedTime = currentHour + ':' + (currentMinute < 10 ? '0' : '') + currentMinute + ':' + (currentSecond < 10 ? '0' : '') + currentSecond;
    var formattedDateTime = formattedTime ;
    locElement.textContent = formattedDateTime;

    if(locElement2){
      locElement2.textContent = 'PARIS,FRANCE,'+currentDay;
    }
 

  }
  updateDateTime();
  setInterval(updateDateTime, 1000);
  