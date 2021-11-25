<script setup>
import { ref, getCurrentInstance } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)

// script 中使用
const { $px2rem } = getCurrentInstance().appContext.config.globalProperties
console.log($px2rem(30))
</script>

<template>
  <h1 :style="{ fontSize: $px2rem(30) /* template 中使用 */ }">{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style lang="scss" scoped>
@import '../design/flexible/flexible.scss';

a {
  color: #42b983;
}

h1 {
  font-size: px2rem(30);
}
</style>
