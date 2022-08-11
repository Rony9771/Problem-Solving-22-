const phones = [
  {model: 'Redmi', price :20000, ram :'4gb'},
  {model: 'Nokia', price :25000, ram :'4gb'},
  {model: 'iphone', price :120000, ram :'4gb'},
  {model: 'walton', price :12000, ram :'4gb'},
];

function findCheapest (phones){
  let cheapest = phones[0];
  for (let i=0; i<phones.length; i++){
    const element =phones[i];

    if(element.price <cheapest.price){
      cheapest =element;
    }

  }
  return cheapest;
}

const cp =findCheapest(phones);
console.log(cp);