// //'use strict'

// // document.querySelector('.check').addEventListener("click",function(){
// //        let val = Number(document.querySelector('.guess').value)
// //        console.log(val)
// //        let message = document.querySelector('.message').textContent="no number entered";
// //        if(!val){
// //        	console.log(message)
// //        }else

// // })



// // console.log(this)

// // var years = 12212;
// // let year = 2022
// // const rajendra = function (birthdate){
// // let year = 2022-birthdate;
// // console.log(year)
// // console.log(this)
// // }
// // rajendra(2000)

// // const rajendrar =(birthdate)=>{
// // let year = 2022-birthdate;
// // console.log(year)
// // console.log(this)
// // }
// // rajendrar(2000)

// // function dec(birthdate){
// //        console.log(2022-birthdate)
// // }
// // dec(2000)

// // const rajendra = function (){
// //        console.log(this)
// // }
// // rajendra()

// // const rajendraarow =()=>{
// //        console.log(this)
// // }
// // rajendraarow()

// // const raj = {
// //        year : 2022,
// //        birth: function(){
// //               console.log(this.year)
// //        }
// // }
// // raj.birth()

// // const matila ={
// //        year:2222
// // }

// // matila.birth = raj.birth;

// // matila.birth()

// // let r=raj.birth;
// // r();
// // const nit= raj.birth;
// // console.log(this.year)


// // console.log(raj.birth())


// // function world(){
// //        // console.log(this.rajs)
// // }
// // world()

// // console.log(this)


// // function hello(r){
// //        console.log(this.r)
// // }

// // hello(25)

// // var firstname = "rajednra";
// // const raj = ()=>{
// //        console.log("rajednra "+this.firstname)
// // }

// // raj();


// // const world = {
// //        firstname:"hello world",
// //        firstname:"jkskahjska",
// //        birth:function(){
// //               console.log(this.firstname)
// //               const firstname ="hershal mehta"
              
// //               const date=()=>{
// //                      console.log(this.firstname);
// //               }
// //               date();
// //        },
// //        years:()=>{
// //               firstname:"hello world";
// //               // console.log(this);
// //               console.log("rajednra "+this.firstname)
// //        }
// // }

// // world.birth();
// // world.years();

// // const firstname = "raj";

// // const rajendra = {
// //        // firstname:"rajendra",
// //        // lastname:"jangid",


// //        year:function(){
// //               console.log(this.firstname +" "+ this.lastname)
// //        const years=()=>{
// //               console.log(this.firstname +" "+ this.lastname)
// //        }
// //        years()

// //        },
// //        years:()=>{
// //               console.log(this.firstname +" "+ this.lastname)
// //        }
// // }


// // rajendra.year()
// // rajendra.years()


// // var firstname = "rajednra";

// // const hel= function(){
// //        const firstname = "rajenra"
// //        console.log(this.firstname)
// // }
// // hel()

// // const rajendra = {
// //        starter:["noodles","manchurian","pasta",["fish","chicken"]],
// //        maicourse:["paneer","kolapuri Paneer","paneer Handva"],
// //        order:function(starterIndex,maincourseIndex){
// //               return [this.starter[starterIndex],this.maicourse[maincourseIndex]]

// //        }
// // }

// // console.log(rajendra.order(2,1))

// // const [start,main]=rajendra.order(2,2);
// // console.log(start,main)


// // const array = [2,3,[5]]
// // const [i, ,[j,k=25]] = array;
// // console.log(i,j,k)

// // const restaurnt = {
// //        name:["rajednra"],
// //        starterd:["paneerchilly","oriendar"],
// //        opening:{
// //               thu:{
// //                      open:11,
// //                      close:23
// //               },
// //               fri:{
// //                      open:11,
// //                      close:23
// //               }
// //        }

// // }
// // console.log(restaurnt.opening)

// // const {name,starterd}=restaurnt;

// // // const{name:firstname,starterd:start} = restaurnt;
// // // console.log(firstname,start)
// // console.log(name)

// // const {firstname=[],starterd:madan=[],heroine=[]}=restaurnt;
// // console.log(firstname,madan,heroine)
// // console.log(name,starterd)

// // mutaiting variable--------------------

// // let a=111;
// // let b=454;
// // const obj={
// //        a:11,
// //        b:3,
// //        openingdays:{
// //               mon:{
// //                      open:10,
// //                      close:9
// //               },
// //               tue:{
// //                      open:0,
// //                      close:9
// //               }

// //        }
// // };

// // // ({a,b}=obj);
// // // console.log(obj.a)
// // console.log(obj.openingdays)

// // const {mon:{open,close},tue}=obj.openingdays;
// // // console.log(mon)
// // console.log(open)


// // const restaurent = {
// //        starterd:["manchurian","pizza","pasat","frenchroll"],
// //        maincourse:["paneer","malaikofta","sahipaneer","mutterpaneer"],
// //        order:function({starterdIndex,maincourseIndex}){
// //               return [this.starterd[starterdIndex] , this.maincourse[maincourseIndex] ]
// //        },

// //        orders:function({starterdIndex:star=[],maincourseIndex:main,time,ordernumber}){
// //               console.log(`order number is ${ordernumber} on timing ${time} delivered before time and order is ${this.starterd[star]} in starterd and the maincourse is ${this.maincourse[main]}`)
// //        },
// //        orderpasta:function(ing1,ing2,ing3){
// //               return `let's make your delicious pizza with ${ing1} ,${ing2} and ${ing3} `;
// //        }

// // }

// // const order1 = restaurent.orders({
       
// //        starterdIndex:0,
// //        maincourse:3,
// //        time:"10:30 pm",
// //        ordernumber:1
// // });

// // const order2 = restaurent.orders(1,1,1,1)
// // console.log(order2)
// // console.log(order1)s


// // const ingrident =[prompt("let's make your dilicious pizaa 'enter ingrident 1 '"),prompt("ingrident 2") ,prompt( "ingrident 3")]

// // console.log(ingrident);

// //  const dish1 = restaurent.orderpasta(...ingrident)

// // console.log(typeof dish1)

// // function helloworld(){
// //        return ("hello rajendra jangid")
// // }
// // helloworld()

// // document.querySelector('#dish').textContent=dish1;

// // let raj = {
// //        firstname:"rajednra",

// //        helloworld:function(){
// //        console.log("hello rajendra jangid")
// //        }
      
// //        }



// // const arrays = [22,[5,6,8,5]];
// // const [w,...rest] = arrays;
// // console.log(w,...rest)

// // function add(...arrays){
// //        let sum = 0;
// //        for(let i=0;i<arrays.length;i++){
// //               sum +=arrays[i]
// //        }
// //               return sum;
      
// // }

// // console.log(add(...rest))
// // console.log(add(2,5,10,5))

// // let raj =0;
// // let end = "jangid";
// // let newraj = raj??"jkhjkshajsh";
// // console.log(newraj)
// // if(newraj){
// //        console.log("hello how are you ")
// // }else{
// //        console.log("you are not okay")
// // }
// // console.log(newraj)

// // // The Nullish Coalescing Operator
// // let numGuests;
// // numGuests = 0;
// // const guests = numGuests || 10;
// // console.log(guests);

// // // Nullish: null and undefined (NOT 0 or '')
// // const guestCorrect = numGuests ?? 10;
// // console.log(guestCorrect);


// // const rajendra1 = {
// //        name:"rajendra",
// //        owner:10
// // }
// // const rajendra2 = {
// //        name:"rajendra",
// //        owner:10,
// //        lastnumber:"shdhk"

// // }

// // rajendra1.lastnumber = rajendra1.lastnumber && "<anonymous>"


// // rajendra2.lastnumber = rajendra2.lastnumber && "<anonymous>"

// // rajendra1.lastnumber &&= "anonymous";
// // rajendra2.lastnumber &&= "anonymous";
// // // 
// // console.log(rajendra1)
// // console.log(rajendra2)
// // rajendra.owner = undefined||"djkajs"||rajendra.owner;
// // rajendra.owner ||=10;
// // console.log(rajendra)


// // const r=[[1,3,4535,324234,3242423],[4,5,6],9,2,3,9];
// // let [[raj,...rest],j,s]=r;


// // console.log(...rest,...j,s)


// // let raj = "rajednra";
// // let san = "sanjay";
// // // console.log(raj)

// // let ramesh = raj && san ;
// // console.log(ramesh)

// // const array = [12,321,435,6432,24,543,2345,3,42243,2432,4234,24]

// // for(let [q,w] of array.entries()){
// //        console.log(`${q+1} : ${w}`)
  

// // }

// // console.log(array.entries())



// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
//   sunday:"sun"
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
//   helloworld(){
//        return this.name;
//   }
// };


// // value

// // let properties = Object.entries(openingHours)
// // // console.log(properties)

// // for (const [key,{open,close}] of properties){
// //        console.log(`index number ${key} the open on ${open} and close on ${close}`)
// // }
// //        console.log(properties)

// // property keys
// // const properties = Object.keys(openingHours)
// // console.log(properties)

// // let openstr = `we are open on ${properties.length}`
// // console.log(openstr)
// // for(const days of properties){
// //        openstr+=` , ${days} ,`
// //        console.log(openstr)
// // }
// // console.log(openstr)


// // let property = Object.keys(restaurant)
// // console.log(property)

// // for(let keys of property.entries()){
// //        console.log(`${keys[0]+1}: ${keys[1]}  `)
       
// // }
// // if(openingHours){
// //               console.log(Object.keys(openingHours))
// //        }
// // console.log(restaurant.helloworl?.())
// // console.log(restaurant?.name?.addha??"noradha")
// // console.log(restaurant?.name?.kjsk??"closed")

// // let day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']


// // for (let days of day){
// //        console.log(days);
// //        console.log(restaurant.openingHours[days]?.open)
// // }


// // const array = [{name:{firstname:"rajednra"},sirname:"jangid"}];

// // console.log(array[0].name.firstname?.sirname ?? "sirname"?.sad??"sad")

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borru9999ssia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5
//   },
// };


// // console.log(game.odds)


// // console.log(avg/raj.length)
// // console.log(raj.length)
// // console.log(game.scored)

// // for(let [index,player] of game.scored.entries()){

// //        console.log(`"Goal ${index+1}:${player}"`)
    
// // }
// // const raj = Object.entries(game.odds);

// // let avg = 0;
// // for(let [key,value] of raj)
// //        avg+=value
// //        console.log(avg/raj.length)


// // let teamOne = game.team1
// // console.log(teamOne)

// // Print the 3 odds to the console, but in a nice formatted way, exactly like this: Odd of victory Bayern Munich: 1.33 
// // Odd of draw: 3.25 
//  // Odd of victory Borrussia Dortmund: 6.5 

// // for(let [a,b] of Object.entries(game.odds)){
// //        console.log(a,b);
// //        const team = a==="x"?"draw":`victory ${game[a]}`
// //        console.log(`odd of  ${team} : ${b}`);
// // }


// // set----------------------------

// // const data = ["chef","chef","manager","manager","waiter","recepenist"];
// // console.log(new Set(data).add("rajednra").add("dkjk"))
// // const orderSets = new Set("rajendra");
// // console.log(new Set(["kj","ds","dsd"]).size)


// // maps----------------------------------
// // const rest = new Map();
// // console.log(rest.set("name","rajendra"));
// // rest.set("sirname","jangid");
// // rest.set(true,"restaurent is open");
// // rest.set(false,"restaurent is not open")
// // rest.set("open",18);
// // rest.set("close",22)
// // const time = 19;

// // console.log(rest.get(time>rest.get("open") && time<rest.get("close")))

// // rest.get(time>rest.get("open") && 
// //        time<rest.get("close"))


// // const raj = 21;
// // const san  = 20;
// // console.log(raj  && san  )

// // const army = new Map([
// //        ["hello","jdj"],["world","lorieou9r"]
// //        ,["hdhdh","kji"]])

// // console.log(army.set(1,"hello"))
// // army.set("hellos","world")



// // const que = {
// //        firstname:"rajednra",
// //        lastname:"jangid",
// //        fullname:"rajendra jangid"
// // }

// // console.log(que)

// // const detail = new Map(Object.entries(que))
// // console.log(detail)



// // console.log(openingHours)

// // console.log("hello world")

// // let hotel = {
// //   hotelname:"shiv sagar hotel",
// //   startdate:1927,

// // }
// // const Objects = Object.entries(hotel)
// // let newmap = new Map([...Objects])
// // console.log(newmap)

// // for(let x of Object.keys(hotel))
// // console.log(x)

// // const arrays=["helo","helo","chef","manager"]
// // // const deletes=arrays.pop()
// // // console.log(deletes)

// // // const ra = arrays.pop()
// // // console.log(ra)

// // console.log(arrays.length)

// // const newMap = new Set([...arrays]);
// // console.log(newMap)
// // // console.log(array)

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // console.log(gameEvents.keys())
// // // console.log(gameEvents)

// // // 1)-----------
// // const values = gameEvents.values()


// // const events = [...new Set(values)]
// // console.log(events)

// // // 2)-----------------------
// // gameEvents.delete(64)
// // console.log(gameEvents)
// // // console.log(values)



// // // 3)-------------------

// // const time =[...gameEvents.keys()].pop()
// // console.log(time)

// // console.log(`An event happened, on average, every ${time/gameEvents.size} minutes `)



// // 4)-----------------------

// // const index = gameEvents.entries()
// // console.log(index)
// // for(const [x,{y}] of index)
// //   console.log(x,y)
// // const ind = gameEvents;
// // for (const [key,val] of ind){
// //     let timer = (key<=45)?"first":"second"
// //     console.log(`[${timer}half] ${key} : ${val}`)
// // }

// // const air = "indiair plane nda";
// // console.log(air.indexOf(""))

// // const checkMiddleSeat = function(seat){
// //         let m = seat;
// //         console.log(typeof middle)
// //         if(m.indexOf("B")=="B" || m.indexOf("b")==="b"){
// //           console.log("you have a middle seat");
// //         }else{
// //           console.log("you don't have a middle seat");
// //         }
// // }

// // checkMiddleSeat("11c");

// // let raj = 1;
// // console.log(raj===12?"raj is 12":"raj is not 12")
// // const checkMiddleSeats = function(seat){
// //         let m=seat.slice(-1);
// //       console.log((m==="B" || m==="b") ? "you have a middle seat":"you don't have a middle seat")
   
// // }

// // checkMiddleSeats("11C")
// // checkMiddleSeats("11b")


// // let raj = "hello"
// // console.log(raj.indexOf("l"))


// // function checkMiddle(seat){
// //   let m = seat.indexOf("BCbc");
// //   if(m=){
// //     console.log("you got the middle seat")
// //     99

// //   }else{
// //     console.log("hahaha you don't get the middle seat")

// //   }

// // }

// // checkMiddle("111BCbc")

// // const name = "rajednra";
// // const firstUpper=name[0].toUpperCase();
// // const firUresL = firstUpper + name.slice(1).toLowerCase()
// // console.log(firUresL)
// // // console.log(name.toLowerCase())
// // // console.log(name[0])

// // const CamelLetter=function(string){

// // const name = string;
// // const firstUpper=name[0].toUpperCase();
// // const firUresL = firstUpper + name.slice(1).toLowerCase()
// // console.log(firUresL)
// // }

// // CamelLetter("nEETU")


// // const rajendra = "hello world hello world hello world";
// // console.log(rajendra.replaceAll("hello","rajednra"))

// // const email = "rajendra.jangidsm@gmail.com";
// // const loginEmail = "         RAJENDra.janGIDsm@GMAIL.com";
// // const normalEmail = loginEmail.toLowerCase().trim();
// // console.log(email)
// // console.log(normalEmail)
// // console.log(email==loginEmail || email==normalEmail)
// // console.log((email==loginEmail || email==normalEmail)?false:true)


// // const new_string = "rajendra nitin hershal kishan".split(" ");
// // console.log(new_string)


// // const CamelLetter=function (name){
// //     let capitalize = name.split(" ")
// //     console.log(capitalize)
// //     newCap=[]
// //     for(let i=0;i<capitalize.length;i++){
// //       let capital = capitalize[i].indexOf().toUpperCase();
// //       newCap.push(capital)
// //     }
// //     console.log(newCap)

// // }

// // CamelLetter("rajednra sanjay nitin hershal")

// // let raj = "hii raj how are you"
// // let san = "hello how are you"
// // let newar = [raj + san].join(" hjsh")
// // console.log(newar)


// // let fullname = "rajednra jangid"
// // let split = fullname.split(" ");
// // console.log(split)
// // console.log(split.join())
// let stars = function(number){
//   let star = number+"";
//   let last = star.slice(-4);
  
//  return (last.padStart(star.length,"*"))
// }

// console.log(stars(6226262978987))
const bookings = []

const flightTicket = function(flight,pasanger,time){
  pasanger ||= 1;
  time ||= 199;
  const booking = {
    flight,pasanger,time
  }
  console.log(booking)
  bookings.push(booking)
}

flightTicket("a21fg");
flightTicket("a21fg",10,2)


console.log(bookings)