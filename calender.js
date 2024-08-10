days = prompt("Enter the no. of days");
fl = prompt("Enter the first letter of month")

if(days==30){
    if(fl.toUpperCase()=="A"){
        console.log("April");
    }else if(fl.toUpperCase()=="J"){
        console.log("June");
    }else if(fl.toUpperCase()=="S"){
        console.log("September");
    }else if(fl.toUpperCase()=="N"){
        console.log("November");
    }else{
        console.log("Invalid Input"); 
    }
}else if(days==31){
    if(fl.toUpperCase()=="J"){
        alert("It's either January or July!");
        sl= prompt("Enter the second letter");

        if (sl.toUpperCase() == "U"){
            console.log("July");
        }else if(sl.toUpperCase() == "A"){
            console.log("January");
        }else{
            console.log("Invalid Input");
        }
    }
    else if(fl.toUpperCase()=="M"){
        alert("It's either March or May!");
        ll= prompt("Enter the last letter");

        if (ll.toUpperCase() == "H"){
            console.log("March");
        }else if(ll.toUpperCase() == "Y"){
            console.log("May");
        }else{
            console.log("Invalid Input");
        }
    }else if(fl.toUpperCase()=="A"){
        console.log("August");
    }else if(fl.toUpperCase()=="O"){
        console.log("October");
    }else if(fl.toUpperCase()=="D"){
        console.log("December");
    }else{
        console.log("Invalid Input!");
    }
}else if(days==28||days==29){
    console.log("February");
}else{
    console.log("Invalid Input!");
}



//30~april, june, sep, nov
//31~jan, march, may, july, august, october, dec
//28 and 29~Feb