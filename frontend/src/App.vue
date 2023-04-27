<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: null
    }
  }
}
</script>