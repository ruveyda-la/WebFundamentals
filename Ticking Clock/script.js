function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    // console.log(time);
      // your code here
    var secondsdegree = 0;
    var minutesdegree = 0;
    var hoursdegree = 0;



    if (time < 43200){
    secondsdegree = 6 * ((time % 3600) % 60);
    minutesdegree = 6 * Math.trunc((time % 3600)/60) ;
    hoursdegree = 6 * Math.trunc (time/3600); 
    }
    
    else {
    secondsdegree = 6 * (((time-43200) % 3600) % 60);
    minutesdegree = 6 * Math.trunc (((time-43200) % 3600)/60);
    hoursdegree = 6 * Math.trunc ((time-43200)/3600);

    }
    console.log (time)
    console.log (hoursdegree/6);
    console.log (minutesdegree/6);
    console.log (secondsdegree/6);


    document.querySelector("#seconds").style.transform = `rotate(${secondsdegree}deg)`;
    document.querySelector("#minutes").style.transform = `rotate(${minutesdegree}deg)`;
    document.querySelector("#hours").style.transform   = `rotate(${hoursdegree}deg)`;




}, 1000);
