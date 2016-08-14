/*
    Copyright (C) 2016  j

    This file is part of counter-game
    
    counter-game is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    counter-game is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*global jsondata, wanakana, getAnswer*/

var counterNode = document.getElementById("counter");
var thingNode = document.getElementById("thing");
var thingDescNode = document.getElementById("thing-desc");
var scoreNode = document.getElementById("score-display");
var inputNode = document.getElementById("answer-input");

var score;
var counter;
var thing;
var thingDesc;
var data;
var answer;
var scoreIncAns;

function getRandomInt(min, max) {
    var s = Math.floor(Math.random() * 10) + 1;
    if (max > 20 && s != 10) {
        return Math.floor(Math.random() * (20 - min + 1)) + min;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateScore() {
    if (score >= 0 && score <= 9999) {
        scoreNode.textContent = "Score: " + score;
    } else {
        score = 9999;
        updateScore();
    }
}

function updateCounter() {
    if (counter >= 0 && counter <= 99) {
        var s = "0" + counter;
        counterNode.textContent = s.substr(s.length-2);
    } else {
        counter = 0;
        updateCounter();
    }
}

function updateThing() {
    thingNode.src = "assets/img/" + thing + ".jpg";
}

function revealThingDesc() {
    thingDescNode.textContent = thingDesc;
    thingDescNode.style.color = "black";
}

function concealThingDesc() {
    thingDescNode.textContent = "reveal";
    thingDescNode.style.color = "#888888";
}

function nextThing() {
    concealThingDesc();
    var thingID = getRandomInt(0,data.things.length-1);
    thing = data.things[thingID].name;
    updateThing();
    thingDesc = data.things[thingID].namejp;
    var counterMin = 1;
    var counterMax = 99;
    if (typeof data.things[thingID].rangemin !== "undefined") {
        counterMin = data.things[thingID].rangemin;
    }
    if (typeof data.things[thingID].rangemax !== "undefined") {
        counterMax = data.things[thingID].rangemax;
    }
    if (data.things[thingID].type == "ordinal") {
        document.getElementById("multiplication").textContent = ".";
    } else {
        document.getElementById("multiplication").textContent = "x";
    }
    counter = getRandomInt(counterMin, counterMax);
    updateCounter();
    
    answer = getAnswer(thingID, counter);
    scoreIncAns = true;
}

function initGame() {
    counter = getRandomInt(1,99);
    
    updateCounter();
    score = 0;
    updateScore();
    
    nextThing();
}

function checkAnswer() {
    if (inputNode.value != "") {
        if (inputNode.value == answer) {
            if (scoreIncAns) {
                score++;
                updateScore();
            }
            nextThing();
        } else {
            score = 0;
            updateScore();
        }
        inputNode.value = "";
    }
}

function revealAnswer() {
    score = 0;
    updateScore();
    inputNode.value = answer;
    scoreIncAns = false;
}

window.addEventListener("load", function() {
    wanakana.bind(inputNode);
    data = JSON.parse(jsondata);
    
    initGame();
    thingDescNode.addEventListener("click", revealThingDesc, false);
    document.getElementById("answer-form-el").addEventListener("submit", checkAnswer, false);
    document.getElementById("reveal-answer").addEventListener("click", revealAnswer, false);
    
},false);