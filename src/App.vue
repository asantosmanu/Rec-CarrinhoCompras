<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  
  <h1>BOOKSTORE 🕮</h1>
    <div class="container-geral">
      <router-view/>
    </div>

</template>

<style scoped>
.container-geral {
  display: flex;
  justify-content: space-between;
  background-color: rgb(172, 231, 172);
}
h1{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>



