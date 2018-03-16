// const $ = require('jquery')

const multiply = (num1, num2) => (
  num1 * num2
)

const changeSomething = () => {
  console.log('changeSomething called')
  // $('#block1').text("changed block")
  document.getElementById('block1').innerHTML = 'changed block'
}

document.foo = changeSomething

module.exports.multiply = multiply
