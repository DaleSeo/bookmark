<template>
  <div id="Edit" class="ui modal">
    <div class="header">
      <i class="edit icon"/>{{title}}
    </div>
    <div class="ui content">
      <pre>{{bookmark.tags}}</pre>
      <Edit :bookmark="bookmark" v-if="bookmark"/>
    </div>
    <div class="actions">
      <div class="ui black cancel button">
        <i class="remove icon"/>Nope
      </div>
      <div class="ui green ok button">
        <i class="checkmark icon"/>Save
      </div>
    </div>
  </div>
</template>

<script>
import Edit from './Edit.vue'

export default {
  components: {Edit},
  props: {
    bookmark: {
      type: Object
    }
  },
  computed: {
    title () {
      return this.bookmark._id ? 'Edit' : 'New'
    }
  },
  mounted () {
    console.log('#mounted:', this.bookmark)
    $('#Edit.ui.modal').modal({
      onApprove: () => this.$emit('approve'),
      onHide: () => this.$emit('hide')
    })
  },
  updated () {
    console.log('#updated:', this.bookmark)
    $('#Edit.ui.modal').modal('show')
  }
}
</script>
