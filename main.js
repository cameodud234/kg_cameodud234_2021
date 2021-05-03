let test1 = [15, 30,-4,5,7,909,888,505,-1,1,300];

// let test2 = [-3,-4,5,7,9];

const numsDict = {
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


// returns a string
function numsIn_strOut(numsArr){

    let retString = "";

    for(elem in numsArr){

        // We will assume a negative integer inherits 
        // the naming convention of positive integers.
        let tmpNum = Math.abs(numsArr[elem]);
        let tmpValStr = String(tmpNum);

        for(i in tmpValStr){
            if(numsDict[tmpValStr[i]] !== undefined){
                retString += numsDict[tmpValStr[i]];
            }
            else{ throw Error("Error parsing numerical value..."); }
        }

        retString += ",";

    }

    // this gets rid of the trailing ','
    if(retString[retString.length - 1] === ","){ 
        retString = retString.slice(0, retString.length - 1); 
    }

    return retString;

}


console.log(test1)
console.log(numsIn_strOut(test1));