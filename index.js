//global scope declaration, assign value is bob
var customerName = 'bob';

//accessing global customerName variable, uppercases 
function upperCaseCustomerName() {
    return customerName.toUpperCase();
  }
//function declares a global variable 
  function setBestCustomer() {
    var bestCustomer = 'not bob'; //declare a value
  }

  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  //function attempts to change the constant
  const leastFavoriteCustomer = 'jim';
  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'sally'; //const can't be reassigned
}
//my output 
console.log(upperCaseCustomerName()); //i get BOB uppercase
overwriteBestCustomer();
console.log(bestCustomer); 
console.log(leastFavoriteCustomer); // Outputs: 'jim'
changeLeastFavoriteCustomer(); //error occurs,const cannot be reassigned.
