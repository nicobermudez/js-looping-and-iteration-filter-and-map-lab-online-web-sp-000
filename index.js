// Code your solution here:
function driversWithRevenueOver(array, number){
  array.filter(function(driver) {
    return driver.revenue > number
  })
}
