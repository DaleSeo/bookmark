<template>
  <div class="item">
    <div class="content">
      <div class="header" @click="toggleDetails">
        <span>{{bookmark.title}}</span>
        <div class="ui label">
          <a :href="bookmark.url" target="_blank">
            {{bookmark.url}}
          </a>
        </div>
      </div>
      <div class="meta" v-show="showDetails">
        <i class="green check icon"/> {{bookmark.hit}} Hits
      </div>
      <div class="description" v-show="showDetails">
        <span class="pre-wrap">{{bookmark.description}}</span>
      </div>
      <div class="extra" v-show="showDetails">
        <i class="calendar icon"/> {{bookmark.date}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bookmark'],
  data () {
    return {
      showDetails: false
    }
  },
  methods: {
    toggleDetails () {
      this.showDetails = !this.showDetails
    }
  }
}
</script>

<style>
.pre-wrap {
  white-space: pre-wrap;
}
</style>
