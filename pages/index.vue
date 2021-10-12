<template>
  <section v-if="feed" class="">
    <div
      v-for="item in feed.hits"
      :key="item.id"
      class="flex flex-wrap"
    >
      <article
        class="flex flex-col shadow my-4 w-1/2 md:w-1/4"
      >
        <!-- Article Image -->
        <nuxt-link :to="`/articles/${item.id}`" class="hover:opacity-75">
          <img class="w-full" width="400" height="400" :src="`${item.attributes.cover}?transform=true&width=400&height=400&format=webp`" :alt="item.attributes.title">
        </nuxt-link>
        <div class="bg-white flex flex-col justify-start px-6 pt-6">
          <a href="#" class="text-lg font-bold hover:text-gray-700 pb-4">{{ item.attributes.label }}</a>
        </div>
        <div class="bg-white flex justify-between px-6">
          <a href="#" class="text-lg font-bold hover:text-gray-700 pb-4">{{ item.attributes.price }}€</a>
          <button
            class="snipcart-add-item"
            :data-item-id="item.id"
            :data-item-price="item.attributes.price"
            :data-item-url="`/`"
            :data-item-image="`${item.attributes.cover}?transform=true&width=400&height=400&format=webp`"
            :data-item-name="item.attributes.label"
          >
            Add to cart
          </button>
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
    const feed = this.$dokoo.myCookingBlog.feeds.getFeed('36f9a85c-fff0-43ba-acc4-0cde53c95af6')
    this.feed = await feed.get()
  }
}
</script>
