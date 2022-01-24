// 정보 받기
// function 이 object 있을 때만 가능

const player = {
    name: "chaeyj",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you!")
    }
};

console.log(player.name);
player.sayHello("Youngjoon");
player.sayHello("chaeyj");