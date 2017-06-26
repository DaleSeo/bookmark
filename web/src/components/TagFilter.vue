<template>
  <div id="TagFilter" class="ui search dropdown icon labeled button">
    <input type="hidden" @change="change">
    <i class="tags icon"/>
    <span class="text">Tags</span>
    <div class="menu">
      <div class="item" data-value="">All</div>
      <div class="item" :data-value="tag" v-for="tag in tags">{{tag}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: ['English', 'NodeJS', 'VueJS', 'MongoDB', 'CSS']
    }
  },
  mounted () {
    $('#TagFilter.ui.dropdown').dropdown()
  },
  methods: {
    change (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
