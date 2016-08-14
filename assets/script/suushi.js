/* global data */
var numbers = {
    "0":"ゼロ",
    "1":"いち",
    "2":"に",
    "3":"さん",
    "4":"よん",
    "5":"ご",
    "6":"ろく",
    "7":"なな",
    "8":"はち",
    "9":"きゅう",
    "10":"じゅう"
};

function convertNumber(number) {
    var numberStr = "" + number;
    var smallpart;
    if (number >= 20) {
        var bigpart = numberStr.substr(-2,1);
        smallpart = parseInt(numberStr.substr(-1,1),10);
        return numbers[bigpart] + numbers["10"] + convertNumber(smallpart);
    } if (number >= 10) {
        smallpart = parseInt(numberStr.substr(-1,1),10);
        return numbers["10"] + convertNumber(smallpart);
    } else if (number > 0) {
        smallpart = numberStr.substr(-1,1);
        return numbers[smallpart];
    } else {
        return "";
    }
}

function getAnswer(thingID, count) {
    var countStr = "" + count;
    var counterID = data.things[thingID].counter;
    var result = JSON.search(data, "//counters[id=" + counterID + "]", true);
    
    // IF FULL SPECIAL
    if (typeof result[0].fullspecials !== "undefined") {
        if (result[0].fullspecials.indexOf(count) > -1) {
            var result4 = JSON.search(data, "//fullspecials[counterid=" + counterID + "][specialty=" + count + "]", true);
            if (result4.length == 1) {
                return result4[0].newform;
            } else {
                return "エラー #004"
            }
        }
    }
    
    var bigpart = "";
    var smallpart = "";
    var counterpart = "";
    var sBigpart = 0;
    var sSmallpart = 0;
    
    if (count > 0) {
        // NORMAL
        if (count >= 20) {
            sBigpart = parseInt(countStr.substr(-2,1),10);
            bigpart = convertNumber(sBigpart) + convertNumber(10);
        } else if (count >= 10) {
            bigpart = convertNumber(10);
        }
        sSmallpart = parseInt(countStr.substr(-1,1),10);
        smallpart = convertNumber(sSmallpart);
        counterpart = result[0].counter;
        
        // IF HALF SPECIAL
        if (typeof result[0].halfspecials !== "undefined") {
            
            // IF FAKE HALF SPECIAL
            if (sSmallpart == 0 && result[0].halfspecials.indexOf(10) > -1) {
                var result2 = JSON.search(data, "//halfspecials[counterid=" + counterID + "][specialty=10]", true);
                if (result2.length == 1) {
                    if (typeof result2[0].newsmall !== "undefined") { // NEWSMALL
                        if (count >= 20) {
                            sBigpart = parseInt(countStr.substr(-2,1),10);
                            bigpart = convertNumber(sBigpart) + result2[0].newsmall;
                        } else if (count >= 10) {
                            bigpart = result2[0].newsmall;
                        }
                    }
                    if (typeof result2[0].newcounter !== "undefined") { // NEWCOUNTER
                        counterpart = result2[0].newcounter;
                    }
                } else {
                    return "エラー #003";
                }
                
            }
            
            // IF TRUE HALF SPECIAL
            if (sSmallpart != 0 && result[0].halfspecials.indexOf(sSmallpart) > -1) {
                var result3 = JSON.search(data, "//halfspecials[counterid=" + counterID + "][specialty=" + sSmallpart + "]", true);
                if (result3.length == 1) {
                    if (typeof result3[0].newsmall !== "undefined") { // NEWSMALL
                        smallpart = result3[0].newsmall;
                    }
                    if (typeof result3[0].newcounter !== "undefined") { // NEWCOUNTER
                        counterpart = result3[0].newcounter;
                    }
                } else {
                    return "エラー #002";
                }
            }
        }
        
        return bigpart + smallpart + counterpart;
    }
    
    return "エラー #001";
}