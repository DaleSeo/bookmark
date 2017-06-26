<template>
  <div class="ui fluid multiple search selection dropdown">
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
      tags: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python']
    }
  },
  mounted () {
    $('.ui.dropdown').dropdown({
      allowAdditions: true
    })
    let str = this.value ? this.value.join() : ''
    $('.ui.dropdown').dropdown('set selected', str)
  },
  methods: {
    change (event) {
      let arr = event.target.value ? event.target.value.split(',') : []
      this.$emit('input', arr)
    }
  }
}
</script>
