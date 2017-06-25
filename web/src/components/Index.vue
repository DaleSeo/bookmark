<template>
  <div class="ui container" style="margin-top: 5em;">
    <div class="ui center aligned basic segment"/>
      <div class="ui fluid icon input" :class="{loading}">
        <input type="text" placeholder="Search..." v-model="keyword" @keyup.enter="search">
        <i class="search icon" @click="search"/>
      </div>
      <List :bookmarks="bookmarks"/>
    </div>
  </div>
</template>

<script>
import List from './List.vue'

export default {
  components: {List},
  data () {
    return {
      bookmarks: [],
      keyword: '',
      loading: false
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    search () {
      console.log('#search: ', this.keyword)
      this.fetch()
    },
    fetch () {
      this.loading = true
      this.$http.get(`/bookmarks?keyword=${this.keyword}`)
        .then(res => res.body)
        .then(bookmarks => this.bookmarks = bookmarks)
        .then(_ => this.loading = false)
    }
  }
}
</script>
