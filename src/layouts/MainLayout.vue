<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <div class="layout-wrapper">
    <Header/>
    <main>
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

