<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
import { atualizarDadosComprador} from '@/_data/carrinho.js'

import MButton from '@/components/MButton.vue'

const form = ref({
  nome: '',
  data: '',
  email: '',
  endereco: '',
  cidade: '',
  estado: '',
  hobbie: [],
  linguagem: '',
  biografia: '',
  senha: '',
  confirmacao: '',
  sexo: '',
  ok: false,
  cores: [],
})


function validar() {
  if (form.value.ok) {
    return false
  }
  if (form.value.senha === form.value.confirmacao) {
    return true;
  }
  else {
    return false;
  }
}
const mensagemErro = computed(() => {
  if (form.value.senha != form.value.confirmacao) {
    return 'As senhas devem ser iguais'
  } else {
    return ''
  }
})

function irProximo() {
  atualizarDadosComprador(form.value)
  router.push({ name: 'proxima' })
}
</script>

<template>
  <div class="forms">
    <form class="container" @submit.prevent="ok = validar()">
      <div>
        <h1 class="titleform">INSIRA SUAS INFORMAÇÕES PARA CONCLUIR A COMPRA</h1>
        <h2 class="sectitle">Dados de contato:</h2>
        <label for="">Nome Completo: </label>
        <input type="text" class="input" v-on:keypress="ok = false" v-model="form.nome" placeholder="Insira seu nome"
          required />
        <hr>
        <label for="">Email: </label>
        <input type="email" class="input" v-on:keypress="ok = false" v-model="form.email" placeholder="insira seu email"
          required />
        <hr>
        <label for="">Senha: </label>
        <input type="password" class="input" v-on:keypress="ok = false" v-model="form.senha" placeholder="insira sua senha"
          minlength="6" required />
        <hr>
        <label for="">Confirmar senha: </label>
        <input type="password" class="input" v-on:keypress="ok = false" v-model="form.confirmacao"
          placeholder="insira sua senha novamente" minlength="6" required />
        <hr>
        <h2 class="sectitle">Endereço de Entrega:</h2>
        <div>
          <label for="">Endereço: </label>
          <input type="text" class="input" v-on:keypress="ok = false" v-model="form.endereco" placeholder="insira seu endereço"
            required />
          <hr>
          <label for="">Cidade: </label>
          <input type="text" class="input" v-on:keypress="ok = false" v-model="form.cidade" placeholder="insira sua cidade"
            required />
          <hr>
          <label for="estado">Estado: </label>
          <select v-on:keypress="ok = false" v-model="form.estado" class="input" required>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goías</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roráima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
          <hr>
          <h2 class="sectitle">Formas de pagamento:</h2>
          <label for="estado">Pagamento por: </label>
          <select v-on:keypress="ok = false" v-model="form.pagamento" class="input" required>
            <option value="CC">Cartão</option>
            <option value="BO">Boleto</option>
            <option value="PI">Pix</option>
          </select>
          <hr>
          <h2 class="sectitle">Observações:</h2>
          <label for="">Está satisfeito(a)? Registre aqui qualquer obs sobre a loja: </label>
          <input type="text" class="input" v-on:keypress="ok = false" v-model="form.obs" style="padding: 20px;"
            placeholder="Deixe seu feedback" />
          <hr>
        </div>
        <button class="botao" @click="$router.push({ name: 'home' })">Voltar</button>
        <button class="botao" type="submit" @click="irProximo">Próxima</button>
      </div>
      <p>{{ mensagemErro }}</p>
    </form>

  </div>
</template>


<style scoped>
.container {
  display: flex;
  position: absolute;
  transform: translate(-50% -50%);
  flex-direction: column;
  top: 5%;
  nav-down: 20%;
  left: 0%;
  right: 0%;
  align-items: center;
  padding: 15px;
  margin: 0 auto;
  color: rgb(255, 255, 255);
  align-items: center;
  margin: 0 auto;
  margin-top: 2%;
  border-radius: 0px;
  width: 50%;
  background-color: rgb(94, 132, 155);
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(0, 0, 0, 0.2);
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

.titleform {
  color: rgb(255, 255, 255);
}

.sectitle {
  color: rgb(0, 0, 0);
}

.dadosfinais {
  color: black;
}

.final {
  color: black;
}

.dados {
  color: black;
  font-size: large;
}</style>
