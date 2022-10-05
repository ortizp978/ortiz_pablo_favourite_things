const person = {

    Trevor: {
        name : "Trevor", //string
        age : "old", //string
        eyeColor : "black", //string
        height : 183, //number
        children : true, //Boolean
        role: "Prof",
        desc : "all about blah blah",
        avatar: "kim_jung_gi_m.jpg",
        nickname: "The red guy",
        sayHello : function() { console.log ('hi!') }
    },

    Justin: {
        name : "Justin",
        role: "Coordinator",
        nickname : "Tatto man",
        desc : "all about blah blah",
        avatar: "justin.jpg",
        sayHello : function() { console.log ('hi!') }
    },

    Jhon: {
        name : "John",
        role: "Prof",
        nickname : "Moupheus",
        desc : "all about blah blah",
        avatar: "john.jpg",
        sayHello : function() { console.log ('hi!') }
    },

    Jarrod: {
        name : "Jarrod",
        role: "Prof",
        nickname : "Zoolander",
        desc : "all about blah blah",
        avatar: "jarrod.jpg",
        sayHello : function() { console.log ('hi!') }
    },

    Joe: {
        name : "Joe",
        role: "Prof",
        nickname : "Pooh",
        desc : "all about blah blah",
        avatar: "joe.jpg",
        sayHello : function() { console.log ('hi!') }
    }


}

// make this file public in whichever file is import it
export { person };