<template>
  <div class="ui modal" :id="bookmark._id || 'new'">
    <div class="header">
      <i class="edit icon"/>{{title}}
    </div>
    <div class="ui form content">
      <pre>{{bookmark}}</pre>
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
      <div>
        <Tags v-model="bookmark.tags"/>
      </div>
    </div>
    <div class="actions">
      <div class="ui black deny button">
        <i class="remove icon"/>Nope
      </div>
      <div class="ui green ok button">
        <i class="checkmark icon"/>Save
      </div>
    </div>
  </div>
</template>

<script>
import Tags from './Tags.vue'

export default {
  components: {Tags},
  props: {
    bookmark: {
      type: Object
    }
  },
  computed: {
    title () {
      return this.bookmark._id ? 'Edit' : 'New'
    }
  }
}
</script>
