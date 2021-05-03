let test1 = [30,-4,5,7,909];

// let test2 = [-3,-4,5,7,9];

let numsDict = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
};

let retString = "";

for(elem in test1){
    // we will assume a negative integer entails 
    // the naming convention of positive integers.
    let tmpNum = Math.abs(test1[elem]);
    let tmpValStr = String(tmpNum);
    //console.log(tmpValStr);
    for(i in tmpValStr){
        if(numsDict[tmpValStr[i]] !== null){
            retString += numsDict[tmpValStr[i]];
        }
        else{ throw Error("Error parsing numerical value..."); }
    }
    retString += ",";
}

if(retString[retString.length - 1] === ","){ 
    retString = retString.slice(0, retString.length - 1); 
}


console.log(retString);