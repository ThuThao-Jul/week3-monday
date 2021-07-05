// const name = 'Parrot'
// const colors = ['Red', 'Green', 'Blue', 'Yellow']
// const talons = 'cwc'

// const bird = {
//   name,
//   colors,
//   talons,
// }

// console.log(bird)


// const capital = 'Hanoi'
// const continent = 'Asia'

// const vietnam = {
//   capital,
//   continent
// }

// console.log(vietnam)



// const wheelsCount = 4
// const doorsCount = 4
// const color = 'black'

// const car = {
//   wheelsCount,
//   doorsCount,
//   color
// }

// console.log(car)

//Assign 3
// function getAverage(obj) {
//     return Math.floor((obj.x+obj.y+obj.z) / 3.0); // CHANGE ME
//   }
  
//   console.log(getAverage({ x: 3.6, y: 7.8, z: 4.3 }))



// function getAddress(obj) {
//     return obj.city === "HCMC" && obj.country === "Vietnam" && obj.address.street === "Ton Dan"; // CHANGE ME
//   }
  
//   console.log(getAddress({
//     city: "HCMC",
//     country: "Vietnam",
//     address: {
//       number: 12,
//       street: "Ton Dan",
//       district: "4",
//     },
//   }))



// function objectifyElements(arr) {
//     const first = arr[0];
//     const second = arr[1];
//     const third = arr[2];
//     const fourth = arr[4];
  
//     return { fourth };  // CHANGE ME
//   }
  
//   console.log(objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]))



// function getFoodItems() {
//     const food = [
//       ["carrots", "beans", "peas", "lettuce"],
//       ["apples", "mangos", "oranges"],
//       ["cookies", "cake", "pizza", "chocolate"],
//     ];
//     const carrots = food[0][0];
//     const cookies = food[2][0];
//     const mangos = food[1][1];
  
//     return { carrots,cookies,mangos}
//   }
  
//   console.log(getFoodItems().mangos === "mangos")




// function getHistoricPrices(index) {
//     const bingo = index[0] // CHANGE ME
//     return bingo
//   }
  
//   console.log(getHistoricPrices([true, false, true]))




// function getHistoricPrices(index) {
//     const bingo = index[0][0] // CHANGE ME
//     return bingo
//   }
  
//   console.log(getHistoricPrices([[true, false], [false, true]]))



// function getHistoricPrices(index) {
//     const bingo = index[0][0][0] // CHANGE ME
//     return bingo
//   }
  
//   console.log(getHistoricPrices([[[true, false],[true, false]]]))



function getHistoricPrices(index) {
    const bingo = index // CHANGE ME
    return bingo
  }
  
  getHistoricPrices([[[{}, {}]]])



  //Assign 4
//   function restParams(first, ...rest) {
//     return first === 'first' && rest[0] === 'second'
//   }
  
//   console.log(restParams("first","second")); // CHANGE ME



// function restParams2(first, ...rest) {
//     return first === 'first' && rest[0] === 'second' && rest[1] === 'third'
//   }
  
//   console.log(restParams2("first","second","third")); // CHANGE ME




// function restParams3(first, ...rest) {
//     return first === "first" && rest[0] === "second" && rest[1] === "third" && rest[2] === undefined;
//   }
  
//   console.log(restParams3("first","second","third")); // CHANGE ME



// function restParams4(...rest) {
//     return rest[0] === "first" && rest[1] === "second" && rest[2] === "third"; // CHANGE ME
//   }
  
//   console.log(restParams4("first", "second", "third"));



function ontoAnObject() {
    const array = [1, 2, 3, 4, 5, 6];
    const object = {};
    // CHANGE BELOW
    
    // object.one = array[0];
    // object.two = array[1];
    // object.three = array[2];
    // object.rest = array.slice(3);
    // CHANGE ABOVE
  
    return object;
  }

  console.log(ontoAnObject())




  function findTheMax() {
    const arr1 = [1, 7, 2, 4];
    const arr2 = [1, 9, 5, 8];
    return 
  }
 