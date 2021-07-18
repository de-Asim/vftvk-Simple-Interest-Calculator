


rate.addEventListener("change", updateRate)
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    
    var rate = document.getElementById("rate");
    var years = document.getElementById("years").value;
    var amount = principal * years * rate.value /100;
    var year = new Date().getFullYear()+parseInt(years);
    if(principal > 0){
    document.getElementById("result").innerHTML=`If you deposit ${principal} <br> at an interest rate of  ${rate.value}%<br> You will receive an amount of ${amount}  <br> in the year ${year}`
    }
    else{
        document.getElementById("result").innerHTML="";
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}