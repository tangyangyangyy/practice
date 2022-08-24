// document.querySelector('#app2-container').innerHTML = 'app2 content'
// document.querySelector('#app1-container').innerHTML = 'app1 content'

console.log(document.querySelector('#app2-container'));

function sayHello(name) {
  alert(`Hello, this is ${name}! I say Hello in app2's method`);
}

export default sayHello