<template>
  <div class="ui container" style="margin-top: 5em;">
    <div class="ui center aligned basic segment"/>
      <div class="ui fluid right action left icon input" :class="{loading}">
        <i class="search icon" @click="search"/>
        <input type="text" placeholder="Search..." v-model="keyword" @input="search">
        <div class="ui teal icon labeled button" @click="modalNew">
          <i class="plus icon"/>Add
        </div>
      </div>
      <Edit :bookmark="newBookmark"/>
      <List :bookmarks="bookmarks"/>
    </div>
  </div>
</template>

<script>
import Edit from './Edit.vue'
import List from './List.vue'

export default {
  components: {Edit, List},
  data () {
    return {
      bookmarks: [],
      keyword: '',
      newBookmark: {},
      loading: false
    }
  },
  created () {
    this.fetch()
  },
  mounted () {
    $(`#new.ui.modal`)
      .modal({
        onApprove: this.add
      })
  },
  methods: {
    search () {
      if (0 < this.keyword.length && this.keyword.length < 3) return
      console.log('#search: ', this.keyword)
      this.fetch()
    },
    fetch () {
      this.loading = true
      this.$http.get(`/bookmarks?keyword=${this.keyword}`)
        .then(res => res.body)
        .then(bookmarks => this.bookmarks = bookmarks)
        .then(_ => this.loading = false)
    },
    modalNew () {
      $(`#new.ui.modal`).modal('show')
    },
    add () {
      this.$http.post(`/bookmarks`, this.newBookmark)
        .then(this.fetch)
    }
  }
}
</script>
