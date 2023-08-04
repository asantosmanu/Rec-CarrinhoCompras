<script>
import MButton from '@/components/MButton.vue'
import ProximaView from '../views/ProximaView.vue'
import FormView from '../views/FormView.vue'
import { RouterView } from 'vue-router';
</script>

<template>
    <m-button texto="Voltar" @click="$router.push({name: 'home'})" />
    <div class="dadosfinais">
    <div v-if="ok" class="container">
      <h1 class="final">Compra finalizada com sucesso!</h1>
      <p class="carrinho-total">Total da compra: {{ formatarPreco(carrinho.total) }}</p>
      <p class="dados">Dados inseridos:</p>
      <p>O nome inserido foi: {{ nome }}</p>
      <p>O email inserido foi: {{ email }}</p>
      <p>A senha inserida foi: {{ senha }}</p>
      <p>A confirmação da senha inserida foi: {{ confirmacao }}</p>
      <p>O endereço inserido foi: {{ endereco }}</p>
      <p>A cidade inserida foi: {{ cidade }}</p>
      <p>O estado inserido foi: {{ estado }}</p>
      <p>A forma de pagamento inserido foi: {{ pagamento }}</p>
      <p>Obs:{{ obs }}</p>
    </div>
   </div>
   <m-button texto="Concluir compra" @click="$router.push({name: 'concluirCompra'})"/>
</template>