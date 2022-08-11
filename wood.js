
function woodCalculator(chairquantity,tablequantity,bedquantity){

  const perCharirWood = 5;
  const perTableWood = 20;
  const perBedWood = 50;

  const chairWood = perCharirWood * chairquantity;
  const tableWood = perTableWood * tablequantity;
  const bedWood = perBedWood * bedquantity;

  const totalWood =chairWood + tableWood + bedWood;
  return totalWood;
}

const totalWood = woodCalculator (6,2,1);
console.log("Total Reqirement:",totalWood);