<script setup>
import {
  favoritar,
  adicionarFavoritar,
  removerItemFavoritar
} from '@/_data/favoritar.js'
</script>

<template>
    <h1 class="titlefav">Meus livros favoritos</h1>
    <button @click="$router.push({name: 'home'})">Voltar</button>

</template>

<style scoped>
button{
    background-color: rgb(0, 0, 0);
    color: white;
    font-size: 1.1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 100px;
}
</style>