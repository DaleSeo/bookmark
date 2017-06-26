<template>
  <div id="TagSelection" class="ui fluid multiple search selection dropdown">
    <input type="hidden" @change="change">
    <i class="dropdown icon"></i>
    <span class="default text">Select Tags</span>
    <div class="menu">
      <div class="item" :data-value="tag" v-for="tag in tags">
        <div class="ui empty circular label"></div>
        {{tag}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      tags: ['English', 'NodeJS', 'VueJS', 'MongoDB', 'CSS']
    }
  },
  watch: {
    value (val) {
      let str = val ? val.join() : ''
      $('#TagSelection.ui.dropdown').dropdown('set selected', str)
    }
  },
  mounted () {
    $('#TagSelection.ui.dropdown').dropdown({
      allowAdditions: true
    })
  },
  methods: {
    change (event) {
      let arr = event.target.value ? event.target.value.split(',') : []
      this.$emit('input', arr)
    }
  }
}
</script>
