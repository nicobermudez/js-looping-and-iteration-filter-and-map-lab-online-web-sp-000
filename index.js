// Code your solution here:
function driversWithRevenueOver(array, number){
  array.map(function(driver) {
    return driver.revenue > number
  })
}
