<script setup>
import { ref } from 'vue'
 
import MButton from '@/components/MButton.vue'
import ConcluirCompraView from '../views/ConcluirCompraView.vue'

import { carrinho } from '@/_data/carrinho.js'
const form = ref({
  dados: 'Manu'
})
</script>

<template>
  <div class="container">
    <div class="dadosfinais">
    <!-- <input type="text" v-model="form.dados" >
    <button @click="atualizarDados(form)">Atualizar</button> -->
    <div class="container">
      <h1>Compra finalizada com sucesso!</h1>
      <h2>Dados inseridos:</h2>
      <p>Nome inserido: {{ carrinho.dadosComprador.nome }}</p>
      <p>Email inserido: {{ carrinho.dadosComprador.email }}</p>
      <p>Senha inserida: {{ carrinho.dadosComprador.senha }}</p>
      <p>Confirmação da senha inserida: {{ carrinho.dadosComprador.confirmacao }}</p>
      <p>Endereço inserido: {{ carrinho.dadosComprador.endereco }}</p>
      <p>CEP inserido: {{ carrinho.dadosComprador.cep }}</p>
      <p>Cidade inserida: {{ carrinho.dadosComprador.cidade }}</p>
      <p>Estado inserido: {{ carrinho.dadosComprador.estado }}</p>
      <p>Forma de pagamento inserida: {{ carrinho.dadosComprador.pagamento }}</p>
      <p>Obs:{{ carrinho.dadosComprador.obs }}</p>
      <p class="carrinho-total">Total da compra: R$ {{ carrinho.total.toFixed(2) }}</p>
    </div>
   </div> 
   <hr>
   <m-button texto="Voltar" @click="$router.push({name: 'form'})" />
   <m-button texto="Concluir compra" @click="$router.push({name: 'concluirCompra'})"/>
  </div>
</template>

<style scoped>
.container{
  margin-left: 10px;
  margin-bottom: 5%;
}
.carrinho-total{
  color: aliceblue;
}
h2{
  color: aliceblue;
}
</style>