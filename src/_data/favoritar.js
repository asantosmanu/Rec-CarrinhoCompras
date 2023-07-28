import { ref } from 'vue'

const favoritar = ref({
    itens: [],
  })

  function removerItemFavoritar(item) {
    const index = carrinho.value.itens.findIndex((i) => i.id === item.id)
    carrinho.value.total -= item.total
    carrinho.value.itens.splice(index, 1)
  }
  
  function adicionarFavoritar(livro) {
    const index = favoritar.value.itens.findIndex((item) => item.id === livro.id)
    if (index === -1) {
      favoritar.value.itens.push({
        ...livro,
      })
    }
    }
  export { favoritar, adicionarFavoritar, removerItemFavoritar }