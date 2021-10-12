<template>
  <div v-if="rendered">
    <div class="mx-auto" style="max-width: 600px;">
      <img class="rounded mw-full mb-3" :src="`${entity.attributes.cover}?transform=true&format=webp`" alt="">
      <h1 class="text-4xl font-bold my-8">
        {{ entity.attributes.title }}
      </h1>
      <div class="rendered-article" v-html="rendered" />
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
export default {
  data () {
    return {
      entity: null
    }
  },
  async fetch () {
    const feed = this.$dokoo.myCookingBlog.feeds.getFeed('0dacdbc8-9ec9-4418-b5e5-796968550a87')
    const { entity } = await feed.getEntity(this.$route.params.id)
    this.entity = entity
  },
  computed: {
    rendered () {
      if (!this.entity) {
        return null
      }

      const md = new MarkdownIt()
      const result = md.render(this.entity.attributes.content)
      return result
    }
  }
}
</script>

<style lang="scss">
.rendered-article {
  @apply mx-auto text-lg;
  text-align: justify;
  p {
    @apply mb-3
  }
  ul {
    @apply mb-3 pl-5
  }
}
</style>
