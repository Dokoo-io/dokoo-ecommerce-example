<template>
  <section v-if="feed" class="">
    <div
      v-for="item in feed.hits"
      :key="item.id"
    >
      <article
        class="flex flex-col shadow my-4"
      >
        <!-- Article Image -->
        <nuxt-link :to="`/articles/${item.id}`" class="hover:opacity-75">
          <img class="w-full" width="800" height="350" :src="`${item.attributes.cover}?transform=true&width=800&height=350&format=webp`" :alt="item.attributes.title">
        </nuxt-link>
        <div class="bg-white flex flex-col justify-start p-6">
          <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Food</a>
          <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{{ item.attributes.title }}</a>
          <div style="white-space: pre-wrap; height: 50px;" class="mb-3" v-text="item.attributes.description" />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      feed: null
    }
  },
  async fetch () {
    const feed = this.$dokoo.myCookingBlog.feeds.getFeed('0dacdbc8-9ec9-4418-b5e5-796968550a87')
    this.feed = await feed.get()
  }
}
</script>
