<template>
  <div id="Edit" class="ui modal">
    <div class="header">
      <i class="edit icon"/>{{title}}
    </div>
    <div class="ui form content">
      <div class="field">
        <label>URL</label>
        <input v-model="bookmark.url"/>
      </div>
      <div class="field">
        <label>Title</label>
        <input v-model="bookmark.title"/>
      </div>
      <div class="field">
        <label>Description</label>
        <textarea v-model="bookmark.description"/>
      </div>
      <div class="field">
        <label>Tags</label>
        <TagSelection v-model="bookmark.tags"/>
      </div>
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
import TagSelection from './TagSelection.vue'

export default {
  components: {TagSelection},
  props: {
    bookmark: {
      type: Object
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id () {
      return this.bookmark._id || 'new'
    },
    title () {
      return this.bookmark._id ? 'Edit' : 'New'
    }
  },
  watch: {
    show (val) {
      console.log('#watch show:', val)
      if (val) {
        $('#Edit.ui.modal').modal('show')
      } else {
        $('#Edit.ui.modal').modal('hide')
      }
    }
  },
  mounted () {
    console.log('#mounted', this.id)
    $('#Edit.ui.modal').modal({
      onApprove: () => this.$emit('approve'),
      onHide: () => this.$emit('hide')
    })
  }
}
</script>
