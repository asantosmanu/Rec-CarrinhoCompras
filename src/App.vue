<script setup>

import ListagemLivros from '@/components/ListagemLivros.vue'
import MeuCarrinho from '@/components/MeuCarrinho.vue'
import Favoritos from './components/Favoritos.vue';

</script>

<template>
  
  <h1>MINHA LIVRARIA</h1>
  <router-view />
  <div class="container-geral">
    <listagem-livros/>
   <meu-carrinho/>
   <favoritos/>
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



