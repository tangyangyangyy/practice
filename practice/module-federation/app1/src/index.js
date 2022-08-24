document.querySelector('#app1-container').innerHTML = 'app1 content'
import ('app2/index').then((app2) => {
  const sayHello = app2.default
  sayHello('app1')
})