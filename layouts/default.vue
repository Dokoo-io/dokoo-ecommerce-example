<template>
  <div class="bg-white font-family-karla">
    <!-- Text Header -->
    <header class="w-full bg-gray-100">
      <div class="container mx-auto flex justify-between">
        <div class="flex flex-col items-center py-12">
          <h1>
            <a class="font-bold text-blue-500 uppercase hover:text-blue-800 text-5xl" href="/">
              My E-Commerce
            </a>
          </h1>
        </div>
        <button class="snipcart-checkout flex items-center">
          <span class="material-icons text-4xl text-blue-500">
            shopping_cart
          </span>
          <span class="snipcart-items-count inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">0</span>
        </button>
      </div>
    </header>

    <div class="container mx-auto flex flex-wrap py-6">
      <!-- Posts Section -->
      <section class="w-full md:w-2/3 px-3">
        <Nuxt />
      </section>

      <!-- Sidebar Section -->
      <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
        <div class="w-full bg-white shadow flex flex-col my-4 p-6">
          <p class="text-xl font-semibold pb-5">
            About Us
          </p>
          <p class="pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.
          </p>
          <a href="#" class="w-full bg-blue-500 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
            Get to know us
          </a>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {}
</script>
