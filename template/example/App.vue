<template>
  <div id="app">
    <<%= name %> />
  </div>
</template>

<script>
import <%= moduleName %> from '../src'

export default {
  data() {
    return {
    }
  },

  components: {
    <%= moduleName %>
  }
}
</script>
