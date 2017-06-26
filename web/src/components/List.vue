<template>
  <div class="ui divided items">
    <Item
      :key="bookmark._id"
      :bookmark="bookmark"
      @edit="edit(bookmark)"
      v-for="bookmark in bookmarks"
    />
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  components: {Item},
  props: ['bookmarks'],
  methods: {
    edit (bookmark) {
      this.$emit('edit', bookmark)
    }
  }
}
</script>
