var min=0;

var sec=0;
var m_sec=0;
 var startclick=0;
 const button=document.getElementById("min");

var minutes=document.getElementById("min");

var seconds=document.getElementById("sec");

var milisec=document.getElementById("msec");

function timer()
{
    m_sec++;
    milisec.innerHTML=m_sec;
    if(m_sec>=100)
    {
        sec++;
        seconds.innerHTML=sec;
        m_sec=0;
    }
    if(sec==60)
    {
        min++;
        minutes.innerHTML=min;
     sec=0;
    }
    
}

function start()
{
   
     interval=setInterval(timer,10);
     document.getElementById("startbtn").disabled = true;

     
}


function stop()
{

    clearInterval(interval);
    document.getElementById("startbtn").disabled = false;
}

function reset()
{

    m_sec=0;
    min=0;
    sec=0;
    minutes.innerHTML=m_sec;
    seconds.innerHTML=sec;
    milisec.innerHTML=m_sec;
    stop();
    document.getElementById("startbtn").disabled = false;

}



