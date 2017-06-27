<template>
  <span class="ui teal mini labels">
    <div class="ui label" v-for="tag in tags">{{tag}}</div>
  </span>
</template>

<script>
export default {
  props: ['tags']
}
</script>
