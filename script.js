function compute()
{
    // Validate principal
    if (validate_value()) {
    // To compute the interest
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br/>at an interest rate of <mark>"+rate+"</mark>%.<br/>You will receive an amount of <mark>"+interest+"</mark>,<br/> in the year <mark>"+year+"</mark>";
    }
}

function updateRate() 
{
    // To update rate when users change the slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+" %";
}

function validate_value()
{
    // To validate that principal is positive
    var p = document.getElementById("principal").value;
    if (p<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
        return true
    }
}
