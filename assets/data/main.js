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
var jsondata = `{
	"things": [{
		"name": "book",
		"namejp": "本",
		"type": "quantity",
		"counter": 1
	}, {
		"name": "month",
		"namejp": "月",
		"type": "ordinal",
		"counter": 2,
		"rangemax": 12
	}, {
		"name": "day",
		"namejp": "日",
		"type": "ordinal",
		"counter": 3,
		"rangemax": 31
	}, {
		"name": "age",
		"namejp": "年齢",
		"type": "ordinal",
		"counter": 4
	}, {
		"name": "bottle",
		"namejp": "瓶",
		"type": "quantity",
		"counter": 5
	}, {
		"name": "chopsticks",
		"namejp": "お箸",
		"type": "quantity",
		"counter": 5
	}, {
		"name": "cup",
		"namejp": "コップ",
		"type": "quantity",
		"counter": 6
	}, {
		"name": "dog",
		"namejp": "犬",
		"type": "quantity",
		"counter": 7
	}, {
		"name": "hour",
		"namejp": "時",
		"type": "ordinal",
		"counter": 8,
		"rangemax": 24
	}, {
		"name": "minute",
		"namejp": "分",
		"type": "ordinal",
		"counter": 9,
		"rangemax": 59
	}, {
		"name": "paper",
		"namejp": "紙",
		"type": "quantity",
		"counter": 10
	}, {
		"name": "people",
		"namejp": "人間",
		"type": "quantity",
		"counter": 11
	}, {
		"name": "shirt",
		"namejp": "シャツ",
		"type": "quantity",
		"counter": 10
	}],
	"counters": [{
		"id": 1,
		"counter": "さつ",
		"halfspecials": [1, 8, 10]
	}, {
		"id": 2,
		"counter": "がつ",
		"halfspecials": [4, 7, 9]
	}, {
		"id": 3,
		"counter": "にち",
		"halfspecials": [4],
		"fullspecials": [1, 2, 3, 5, 6, 7, 8, 9, 10, 17, 19, 20, 27, 29]
	}, {
		"id": 4,
		"counter": "さい",
		"halfspecials": [1, 8, 10],
		"fullspecials": [20]
	}, {
		"id": 5,
		"counter": "ほん",
		"halfspecials": [1, 3, 6, 10]
	}, {
		"id": 6,
		"counter": "こ",
		"halfspecials": [1, 6, 8, 10]
	}, {
		"id": 7,
		"counter": "ひき",
		"halfspecials": [1, 3, 6, 8, 10]
	}, {
		"id": 8,
		"counter": "じ",
		"halfspecials": [4, 7, 9]
	}, {
		"id": 9,
		"counter": "ふん",
		"halfspecials": [1, 3, 4, 6, 8, 10]
	}, {
		"id": 10,
		"counter": "まい"
	}, {
		"id": 11,
		"counter": "にん",
		"halfspecials": [4, 7],
		"fullspecials": [1, 2]
	}],
	"halfspecials": [{
	    "counterid": 11,
	    "specialty": 7,
	    "newsmall": "しち"
	}, {
	    "counterid": 11,
	    "specialty": 4,
	    "newsmall": "よ"
	}, {
	    "counterid": 9,
	    "specialty": 10,
	    "newsmall": "じゅっ",
	    "newcounter": "ぷん"
	}, {
	    "counterid": 9,
	    "specialty": 8,
	    "newsmall": "はっ",
	    "newcounter": "ぷん"
	}, {
	    "counterid": 9,
	    "specialty": 6,
	    "newsmall": "ろっ",
	    "newcounter": "ぷん"
	}, {
	    "counterid": 9,
	    "specialty": 4,
	    "newcounter": "ぷん"
	}, {
	    "counterid": 9,
	    "specialty": 3,
	    "newcounter": "ぷん"
	}, {
	    "counterid": 9,
	    "specialty": 1,
	    "newsmall": "いっ",
	    "newcounter": "ぷん"
	}, {
	    "counterid": 8,
	    "specialty": 9,
	    "newsmall": "く"
	}, {
	    "counterid": 8,
	    "specialty": 7,
	    "newsmall": "しち"
	}, {
	    "counterid": 8,
	    "specialty": 4,
	    "newsmall": "よ"
	}, {
	    "counterid": 7,
	    "specialty": 10,
	    "newsmall": "じゅっ",
	    "newcounter": "ぴき"
	}, {
	    "counterid": 7,
	    "specialty": 8,
	    "newsmall": "はっ",
	    "newcounter": "ぴき"
	}, {
	    "counterid": 7,
	    "specialty": 6,
	    "newsmall": "ろっ",
	    "newcounter": "ぴき"
	}, {
	    "counterid": 7,
	    "specialty": 3,
	    "newcounter": "びき"
	}, {
	    "counterid": 7,
	    "specialty": 1,
	    "newsmall": "いっ",
	    "newcounter": "ぴき"
	}, {
	    "counterid": 6,
	    "specialty": 10,
	    "newsmall": "じゅっ"
	}, {
	    "counterid": 6,
	    "specialty": 8,
	    "newsmall": "はっ"
	}, {
	    "counterid": 6,
	    "specialty": 6,
	    "newsmall": "ろっ"
	}, {
	    "counterid": 6,
	    "specialty": 1,
	    "newsmall": "いっ"
	}, {
	    "counterid": 5,
	    "specialty": 10,
	    "newsmall": "じゅっ",
	    "newcounter": "ぽん"
	}, {
	    "counterid": 5,
	    "specialty": 6,
	    "newsmall": "ろっ",
	    "newcounter": "ぽん"
	}, {
	    "counterid": 5,
	    "specialty": 3,
	    "newcounter": "ぼん"
	}, {
	    "counterid": 5,
	    "specialty": 1,
	    "newsmall": "いっ",
	    "newcounter": "ぽん"
	}, {
	    "counterid": 4,
	    "specialty": 10,
	    "newsmall": "じゅっ"
	}, {
	    "counterid": 4,
	    "specialty": 8,
	    "newsmall": "はっ"
	}, {
	    "counterid": 4,
	    "specialty": 1,
	    "newsmall": "いっ"
	}, {
	    "counterid": 2,
	    "specialty": 4,
	    "newsmall": "し"
	}, {
	    "counterid": 2,
	    "specialty": 7,
	    "newsmall": "しち"
	}, {
	    "counterid": 2,
	    "specialty": 9,
	    "newsmall": "く"
	}, {
	    "counterid": 1,
	    "specialty": 1,
	    "newsmall": "いっ"
	}, {
	    "counterid": 1,
	    "specialty": 8,
	    "newsmall": "はっ"
	}, {
	    "counterid": 1,
	    "specialty": 10,
	    "newsmall": "じゅっ"
	}, {
	    "counterid": 3,
	    "specialty": 4,
	    "newsmall": "よっ",
	    "newcounter": "か"
	}],
	"fullspecials": [{
	    "counterid": 4,
	    "specialty": 20,
	    "newform": "はたち"
	}, {
	    "counterid": 11,
	    "specialty": 1,
	    "newform": "ひとり"
	}, {
	    "counterid": 11,
	    "specialty": 2,
	    "newform": "ふたり"
	}, {
	    "counterid": 3,
	    "specialty": 1,
	    "newform": "ついたち"
	}, {
	    "counterid": 3,
	    "specialty": 2,
	    "newform": "ふつか"
	}, {
	    "counterid": 3,
	    "specialty": 3,
	    "newform": "みっか"
	}, {
	    "counterid": 3,
	    "specialty": 5,
	    "newform": "いつか"
	}, {
	    "counterid": 3,
	    "specialty": 6,
	    "newform": "むいか"
	}, {
	    "counterid": 3,
	    "specialty": 7,
	    "newform": "なのか"
	}, {
	    "counterid": 3,
	    "specialty": 8,
	    "newform": "ようか"
	}, {
	    "counterid": 3,
	    "specialty": 9,
	    "newform": "ここのか"
	}, {
	    "counterid": 3,
	    "specialty": 10,
	    "newform": "とおか"
	}, {
	    "counterid": 3,
	    "specialty": 17,
	    "newform": "じゅうしちにち"
	}, {
	    "counterid": 3,
	    "specialty": 19,
	    "newform": "じゅうくにち"
	}, {
	    "counterid": 3,
	    "specialty": 20,
	    "newform": "はつか"
	}, {
	    "counterid": 3,
	    "specialty": 27,
	    "newform": "にじゅうしちにち"
	}, {
	    "counterid": 3,
	    "specialty": 29,
	    "newform": "にじゅうくにち"
	}]
}`;