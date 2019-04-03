// Code your solution here:
function driversWithRevenueOver(array, number){
  return array.filter(function(driver) {
    return driver.revenue > number
  })
}

function driverNamesWithRevenueOver(array, number) {
  return driversWithRevenueOver(array, number).map(function(driver) {
    return driver.name
  })
}

function exactMatch(array, object) {
  array.filter(function(driver) {

  })
}
