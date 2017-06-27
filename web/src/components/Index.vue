<template>
  <div class="ui container" style="margin-top: 5em;">
    <div class="ui center aligned basic segment"/>
      <TagFilter v-model="tag"/>
      <div class="ui right action left icon input" :class="{loading}">
        <i class="search icon" @click="search"/>
        <input type="text" placeholder="Search..." v-model="keyword" @input="search">
        <div class="ui teal icon labeled button" @click="add">
          <i class="plus icon"/>Add
        </div>
      </div>
      <EditModal
        v-if="bookmark"
        :bookmark="bookmark"
        @approve="save"
        @hide="hideEdit"
      />
      <List
        :bookmarks="bookmarks"
        @edit="edit"
      />
    </div>
  </div>
</template>

<script>
import EditModal from './EditModal.vue'
import List from './List.vue'
import TagFilter from './TagFilter.vue'

export default {
  components: {EditModal, List, TagFilter},
  data () {
    return {
      bookmarks: [],
      bookmark: null,
      tag: '',
      keyword: '',
      loading: false
    }
  },
  watch: {
    tag (val) {
      this.fetch()
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
    initBookmark () {
      return {
        url: '',
        title: '',
        description: '',
        tags: []
      }
    },
    search () {
      if (0 < this.keyword.length && this.keyword.length < 3) return
      console.log('#search: ', this.keyword)
      this.fetch()
    },
    fetch () {
      this.loading = true
      let url = `/bookmarks?keyword=${this.keyword}&tag=${this.tag}`
      this.$http.get(url)
        .then(res => res.body)
        .then(bookmarks => this.bookmarks = bookmarks)
        .then(_ => this.loading = false)
    },
    save () {
      if (this.bookmark._id) {
        this.$http.put(`/bookmarks/${this.bookmark._id}`, this.bookmark)
      } else {
        this.$http.post(`/bookmarks`, this.bookmark)
      }
      this.bookmark = null
    },
    add () {
      console.log('#add')
      this.bookmark = this.initBookmark()
    },
    hideEdit () {
      console.log('#hideEdit')
      this.bookmark = null
    },
    edit (bookmark) {
      console.log('#edit')
      this.bookmark = bookmark
    }
  }
}
</script>
