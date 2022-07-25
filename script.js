//1.Get all the countries from Asia region using Filter function.
// var request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v2/all',true);
// request.send();
// request.onload = function(){
//     var data = JSON.parse(request.response);
//     console.log(data);


// var result = data.filter((element) => element.region=="Asia");
// console.log(result);

//     for(var i in result){
//         console.log(result[i].name);
//     }
    
// }

//2.Get all the countries with a population of less than 2 lakhs using Filter function

// var request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v2/all',true);
// request.send();
// request.onload = function(){
//     var data = JSON.parse(request.response);
//     console.log(data);

//     var result = data.filter((element) =>element.population<200000);
// console.log(result);

// for(var i=0; i<result.length; i++){
//     console.log(result[i].name);
// }

// } 


//3.Print the following details name, capital, flag using forEach function

//program not yet completed

// var request = new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all',true);
// request.send();
// request.onload = function(){
//     var data = JSON.parse(request.response);
//     console.log(data);

// data.forEach((element) => console.log(element.name));
// data.forEach((element) => console.log(element.flag)); 
// data.forEach((element) => console.log(element.capital));

// }    



//4.Print the total population of countries using reduce function
//Got Output little different.

// var request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/all',true);
// request.send();
// request.onload = function(){
//     var data = JSON.parse(request.response);
//     console.log(data);

//     var result = data.reduce((acc, curr) => acc+curr.population,0);

//     console.log(result);

// }



//5.Print the country which uses US Dollars as currency.

// var request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v2/all',true);
// request.send();
// request.onload = function(){
//     var data = JSON.parse(request.response);
//     console.log(data);

//     data.filter(element=>{
//         for (let key in element.currencies){
//             if(element.currencies[key].code==="USD"){
//                 console.log(element.name)
//             }
//         }
//     })
// }





