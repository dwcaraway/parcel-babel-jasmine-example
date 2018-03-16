const multiply = (num1, num2) => (
  num1 * num2
)

const changeSomething = () => {
  console.log('changeSomething called')
  document.getElementById('block1').innerHTML = 'changed block'
}

module.exports.multiply = multiply
module.exports.changeSomething = changeSomething
