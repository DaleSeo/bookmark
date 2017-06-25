<template>
  <div class="item">
    <div class="content">
      <div class="header" @click="toggleDetails">
        <span>{{bookmark.title}}</span>
        <div class="ui label" @click="visit">{{bookmark.url}}</div>
      </div>
      <div class="meta" @click="toggleDetails">
        <i class="green check icon"/> {{bookmark.visits || 0}} visits
        &nbsp;&nbsp;&nbsp;
        <i class="calendar icon"/>
        <span v-if="bookmark.visited">visited on {{bookmark.visited | formatDate}}</span>
        <span v-if="bookmark.updated">updated on {{bookmark.updated | formatDate}}</span>
        created on {{bookmark.created | formatDate}}
      </div>
      <div class="ui segment description" v-show="showDetails">
        <span class="pre-wrap">{{bookmark.description}}</span>
      </div>
      <div class="extra" v-show="showDetails">
        <div class="ui right floated mini icon labeled button" @click="modalEdit">
          <i class="edit icon"/>Edit
        </div>
        <Edit :bookmark="bookmark"/>
      </div>
    </div>
  </div>
</template>

<script>
import Edit from './Edit.vue'

export default {
  components: {Edit},
  props: ['bookmark'],
  data () {
    return {
      showDetails: false,
    }
  },
  mounted () {
    $(`#${this.bookmark._id}.ui.modal`)
      .modal({
        onApprove: this.save
      })
  },
  methods: {
    visit () {
      window.open(this.bookmark.url, '_blank')
      this.$http.patch(`/bookmarks/${this.bookmark._id}/visit`)
    },
    toggleDetails () {
      this.showDetails = !this.showDetails
    },
    modalEdit () {
      $(`#${this.bookmark._id}.ui.modal`).modal('show')
    },
    save () {
      this.$http.put(`/bookmarks/${this.bookmark._id}`, this.bookmark)
    }
  }
}
</script>

<style>
.pre-wrap {
  white-space: pre-wrap;
}
</style>
