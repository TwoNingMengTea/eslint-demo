<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div id="id2"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    console.log(123)
    let a = true
    if (a) return 123
    let arr = [1, 2]
    let obj = {name: 123, age: 12}
    let str = '123'
    this.test()
    if (a) console.log(1)
    function f() {
      console.log(2)
    }
    let hello = {
      AaCc: '123'
    }
    for (let i = 0; i < arr.length; i++) {
      console.log(i)
      console.log(arr[i])
    }
    let foo = () => ({ bar: 0 })
    function foo2() { return true }

    if (foo) {
      console.log(1)
      foo()
    } else {
      console.log(1)
      foo()
    }
  },
  methods: {
    test() {
      // 123
      /* 1 */
      console.log(123 + 1)
      let a = 1
      let b = 2
      switch (a) {
      case 1:
        console.log('333')
        break
      default:
      }
      if (a === b) {
        console.log('111')
        return
      } else if (a !== b) return
      console.log(1)
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;

}

#id2 {
  color: #2c3e50;
}

</style>
