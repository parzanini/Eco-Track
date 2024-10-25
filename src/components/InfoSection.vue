
<template>
    <section class="py-12 bg-white">
        <div class="container mx-auto">
            <h2 class="text 2xl font-bold text-center mb-6">{{ title }}</h2>
            <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md::space-y-0 md:space-x-6">
                <img :src="image" alt="Recycling Image" class="w-full md:w-1/2 rounded-lg shadow-md">
                <p class="text-gray-600 md:w-1/2">{{ content }}</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'InfoSection',
  props: {
    title: String,
    content: String,
    image: String
  }
};
</script>