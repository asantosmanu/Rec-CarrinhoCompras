<script setup>

const props = defineProps({
    texto: String
})
</script>

<template>
<button>{{ props.texto }}</button>

</template>

<style scoped>

button {
    background-color: rgb(0, 0, 0);
    color: white;
    font-size: 1.1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
}

button:hover {
    background-color: rgb(43, 40, 40)
}

</style>