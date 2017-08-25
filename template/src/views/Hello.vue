<template lang="pug">
  .hello
    component
</template>

<script>
import store from '@/store'
import Component from '@/components/Component'
export default {
  name: 'hello',
  store: store,
  components: {
    Component
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
