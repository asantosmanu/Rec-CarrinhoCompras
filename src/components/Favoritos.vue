<script setup>
import {
  favoritar,
  adicionarFavoritar,
  removerItemFavoritar,
} from '@/_data/favoritar.js'

import MButton from './MButton.vue'



</script>

<template>

<div class="favoritar">
      <h2>Meus Favoritos</h2>
      <div class="wrap-carrinho">
        <m-message v-if="favoritar.itens.length === 0"/>
        <div v-else>
          <div class="item-favoritar" v-for="(item, index) in favoritar.itens" :key="index">
            <div class="info-livro">
              <div class="imagem-livro">
                <img :src="item.img" class="icon-capa-livro" />
              </div>
              <div class="detalhes-livro">
                <div>
                  <p>{{ item.title }}</p>
                  <p class="info-livro-preco">{{ formatarPreco(item.price) }}/un</p>
                </div>
                <div>
                  <button @click="removerItemFavoritar(item)">&#128465;</button>
                  <p>Total: {{ formatarPreco(item.total) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <m-button texto="Limpar" />
      <m-button texto="Fechar meus favoritos" />
      </div>
   
      <div class="listagem-livros">
          <card-livro  v-for="livro in livros" :key="livro.id" :livro="livro"/>
     </div> 
</template>
