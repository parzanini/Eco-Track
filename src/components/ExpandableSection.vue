<template>
    <div>
      <h2 @click="toggleSection" class="cursor-pointer text-lg font-bold mb-2 text-center">
        {{ title }}
        <img :src="isOpen ? '/imgs/eduPageImgs/minus-sign.png' : '/imgs/eduPageImgs/add.png' " alt="Toggle Icon" class="w-6 h-6 ml-2 inline-block"/>
      </h2>
      <div v-show="isOpen" class="transition-all duration-300 ease-in-out">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      }, 
       defaultOpen: {
        type: Boolean,
        default: false,
    },
    },
  
    data() {
      return {
        isOpen: this.defaultOpen,
      };
    },
    methods: {
      toggleSection() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  </style>