<script setup>
import {
  carrinho,
  adicionarAoCarrinho,
  removerItemCarrinho,
  atualizaQuantidadeItem
} from '@/_data/carrinho.js'

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

import { ref, computed } from 'vue'

const nome = ref('')
const data = ref('')
const email = ref('')
const endereco = ref('')
const cidade = ref('')
const estado = ref('')
const hobbie = ref([])
const linguagem = ref('')
const biografia = ref('')
const senha = ref('')
const confirmacao = ref('')
const sexo = ref('')
const ok = ref(false)
const cores = ref([])
const user = ref({
  avatar: null
})
function handleFileUpload(e) {
  const target = e.target
  if (target && target.files) {
    const file = target.files[0]
    user.value.avatar = URL.createObjectURL(file)
  }
}
function validar() {
  if (ok.value) {
    return false
  }
  if (senha.value === confirmacao.value) {
    return true;
  }
  else {
    return false;
  }
}
const mensagemErro = computed(() => {
  if (senha.value != confirmacao.value) {
    return 'As senhas devem ser iguais'
  } else {
    return ''
  }
})
</script>

<template>
<div class="carrinho">
      <h1 class="title">CARRINHO	&#128722;</h1>
      <div class="wrap-carrinho">
        <m-message v-if="carrinho.itens.length === 0"/>
        <div v-else>
          <div class="item-carrinho" v-for="(item, index) in carrinho.itens" :key="index">
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
                  <p>
                    Quantidade:
                    <input
                      type="number"
                      v-model="item.quantidade"
                      @change="atualizaQuantidadeItem(item)"
                      min="1"
                    />
                  </p>
                  <button @click="removerItemCarrinho(item)">&#128465;</button>
                  <p>Total: {{ formatarPreco(item.total) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <m-button texto="Limpar" />
      <m-button texto="Fechar carrinho" @click="$router.push({name: 'fecharcompras'})"/>      <m-button texto="Favoritos" />
      <m-button texto="Continuar Comprando" @click="$router.push({name: 'homeview'})" />

    <p class="carrinho-total">Total: {{ formatarPreco(carrinho.total) }}</p>
</div>
   <div class="forms">
    <form class="container" @submit.prevent="ok = validar()">
    <input type="file" id="avatarField" @change="handleFileUpload($event)" />
    <hr>
    <div>
      <h1>INSIRA SUAS INFORMAÇÕES PARA CONCLUIR A COMPRA</h1>
      <label for="">Nome: </label>
      <input type="text" class="input" v-on:keypress="ok = false" v-model="nome" placeholder="Insira seu nome" required />
      <hr>
      <label for="sexo">Sexo: </label>
      <input type="radio" v-model="sexo" value="masculino" /> Masculino
      <input type="radio" class="input" v-model="sexo" value="feminino" /> Feminino
      <hr>
      <label for="">Data de nascimento: </label>
      <input type="date" class="input" v-on:keypress="ok = false" v-model="data" placeholder="insira sua data" required />
      <hr>
      <label for="">Email: </label>
      <input type="email" class="input" v-on:keypress="ok = false" v-model="email" placeholder="insira seu email"
        required />
      <hr>
      <label for="">Endereço: </label>
      <input type="text" class="input" v-on:keypress="ok = false" v-model="endereco" placeholder="insira seu endereço" />
      <hr>
      <div>
        <label for="">Cidade: </label>
        <input type="text" class="input" v-on:keypress="ok = false" v-model="cidade" placeholder="insira sua cidade" />
        <hr>
        <label for="estado">Estado: </label>
        <select v-on:keypress="ok = false" v-model="estado" class="input">
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
        </select>
        <hr>
        <label for="hobbie">hobbies:</label>
        <input type="checkbox" v-model="cores" value="esportes" /> Esportes
        <input type="checkbox" v-model="cores" value="ler" /> Ler
        <input type="checkbox" v-model="cores" value="escrever" /> Escrever
        <input type="checkbox" v-model="cores" value="viagens" /> Viagens
        <input type="checkbox" v-model="cores" value="cozinhar" /> Cozinhar
        <input type="checkbox" v-model="cores" value="pintar" /> Pintar    
         <hr>
        <label for="">Linguagem de programação: </label>
        <input type="text" class="input" v-on:keypress="ok = false" v-model="linguagem"
          placeholder="insira uma linguagem de programação" />
        <hr>
        <label for="">Biografia: </label>
        <input type="text" class="input" v-on:keypress="ok = false" v-model="biografia" style="padding: 20px;"
          placeholder="insira sua biografia" />
        <hr>
        <label for="">Senha: </label>
        <input type="password" class="input" v-on:keypress="ok = false" v-model="senha" placeholder="insira sua senha"
          minlength="6" />
        <hr>
        <label for="">Confirmar senha: </label>
        <input type="password" class="input" v-on:keypress="ok = false" v-model="confirmacao"
          placeholder="insira sua senha novamente" minlength="6" />
        <hr>
      </div>
      <button class="botao" type="submit">Mostrar</button>
    </div>
    <p>{{ mensagemErro }}</p>
  </form>
    <div v-if="ok" class="container">
      <img :src="user.avatar" class="img" />
      <p>O nome inserido foi: {{ nome }}</p>
      <p>A data inserida foi: {{ data }}</p>
      <p>O email inserido foi: {{ email }}</p>
      <p>Sexo: {{ sexo }}</p>
      <p>O endereço inserido foi: {{ endereco }}</p>
      <p>A cidade inserida foi: {{ cidade }}</p>
      <p>O estado inserido foi: {{ estado }}</p>
      <p>Selecione seus hobbies: {{ hobbie }}</p>
      <p>A linguagem inserida foi: {{ linguagem }}</p>
      <p>A biografia inserida foi: {{ biografia }}</p>
      <p>A senha inserida foi: {{ senha }}</p>
      <p>A confirmação da senha inserida foi: {{ confirmacao }}</p>
    </div>
   </div>
</template>


<style scoped>

.container {
  display: flex;
  position: absolute;
  transform: translate( -50% -50% );
  flex-direction: column;
  top: 5%;
  nav-down: 20%;
  left: 50%;
  right: 0%;
  align-items: center;
  padding: 15px;
  margin: 0 auto;
  color: white;
  align-items: center;
  margin: 0 auto;
  margin-top: 23%;
  border-radius: 0px;
  width: 50%;
  background-color: rgb(94, 132, 155);
}

.botao {
  align-items: center;
  background-color: rgb(0, 0, 0);
  color: white;
}

.img {
  width: 100px;
  height: 100px;
}

.input {
  background-color: rgb(255, 255, 255);
}



.wrap-carrinho .carrinho-total {
  position: fixed;
  bottom: 3%;
  font-size: 1.5rem;
  font-weight: bold;
}

.item-carrinho .info-livro {
  display: flex;
  margin-bottom: 10px;
}
.detalhes-livro {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.detalhes-livro p {
  margin: 0;
}
.detalhes-livro div {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.detalhes-livro input[type='number'] {
  width: 50px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  margin-left: 10px;
}

.detalhes-livro button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
  padding: 0;
  margin: 0;
}

.info-livro-preco {
  margin-left: auto;
}
.icon-capa-livro {
  width: 30px;
  margin-right: 10px;
}
.container-geral {
  display: grid;
  grid-template-columns: 3fr 1fr;
} 

.carrinho {
  min-width: 20%;
}
.listagem-livros {
  display: flex;
  flex-wrap: wrap;
}
.title{
  color: rgb(94, 132, 155);
}

</style>
