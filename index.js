var customerName = "bob";
const bestCustomer = "not Bob";

function upperCaseCustomerName () {
  return customerName = customerName.toUpperCase();
}
function setBestCustomer () {
  return bestCustomer = "not bob";
}
function overwriteBestCustomer () {
  return bestCustomer = "maybe bob";
}
function leastFavoriteCustomer () {
  let bestCustomer = "maybe bob";
}