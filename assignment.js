//P1: feet to mile conversion!!
function feetToMile(feet){
    if (feet < 0)
    {
       console.log("Miles can not be negative");
    }
    else{
        var mile = feet * 0.000189394;
        console.log(mile, "mile");
    }
}
var mile = feetToMile(22);


//P2: wood calculator
function woodCalculator(chair, table, bed){
    if (chair < 0 || table < 0 || bed < 0){
        console.log("invalid input");
    }
    else{
        var woodForChair = chair * 1;
        var woodForTable = table * 3;
        var woodForBed = bed * 5;
        totalWood = woodForChair + woodForTable + woodForBed;
        console.log("You need a total of", totalWood, "cubic feet wood!");
    }
}
var totalWood = woodCalculator(14, 8, 4);


//P3: brick calculator
function brickCalculator(totalNumberOfFloor){
    var firstTenFloor = 10;
    var secondTenFloor = 10;
    if (totalNumberOfFloor > 0 && totalNumberOfFloor <= 10){
        totalNumberOfBricks = (totalNumberOfFloor * 15 * 1000);
        console.log("You need a total of", totalNumberOfBricks, "bricks");
    }
    else if (totalNumberOfFloor > 10 && totalNumberOfFloor <= 20){
        totalNumberOfBricks = (firstTenFloor * 15 * 1000) + ((totalNumberOfFloor - 10) * 12 * 1000);
        console.log("You need a total of", totalNumberOfBricks, "bricks");
    }
    else if (totalNumberOfFloor > 20){
        totalNumberOfBricks = (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000) +  ((totalNumberOfFloor - 20) * 10 * 1000);
        console.log("You need a total of", totalNumberOfBricks, "bricks");
    }
    else {   
        console.log("Value of floor can not be negative");
    }
}
var totalNumberOfBricks = brickCalculator(28);


//P4: find the smallest name from an array
function tinyFriend(name){
    var smallestName = name[0];
    for(var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(currentName.length < smallestName.length){
            smallestName = currentName;
            console.log("Smallest name is", '"', smallestName, '"');
        }
    }
}
var smallestName = tinyFriend(["Messi", "Neymar", "Ronaldo", "Rivaldo", "Pele", "Maradona"]);
    