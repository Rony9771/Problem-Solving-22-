//Write foo, bar, foobar if divisible by 3 or 5 or both(1 t0 50)
// if number divisible by 3 it's show foo
// if number divisible by 5 it's show bar
// if number divisible by 3 & 5 it's show foobar

for (let i=0; i<=50; i++){
  const element=i;

  if(element %3 ===0 && element %5 ===0){
    console.log("foobar");
  }
  else if(element % 3 ===0){
    console.log("foo");
  }
  else if(element % 5===0){
    console.log("bar")
  }
  else{
    console.log(element);
  }
}