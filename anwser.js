console.log("1> Booleans");
console.log("2> String");
console.log("3> Arrays");
console.log("4> Arrays");
console.log("5> Objects");
console.log("6> An Objects that contain an Arrays");

const rainbowColor = ["red", "organ", "yellow", "green", "blue", "indigo", "violet"];
console.log(rainbowColor);

console.log(rainbowColor[4]);

const myInfo = {
	name: "Khoa",
	favFood: "Shirmp",
	hobby: "Chatting",
	town: "Austin",
	favDataType: "Booleans"
};

console.log(myInfo.hobby);

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);
