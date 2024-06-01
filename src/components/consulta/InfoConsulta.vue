<script setup>
import { useConsulta } from '@/stores/consulta';
import { onMounted, ref } from 'vue';

const dataConsulta = useConsulta()
const loading = ref(false)

async function deleteConsulta(id) {
    loading.value = true
    await dataConsulta.delConsultas(id) 
    loading.value = false
}

onMounted(async () => {
    await dataConsulta.setConsultas()
})
</script>

<template>
    <div class="container">
        <div class="content" v-for="consulta, index in dataConsulta.consultas" :key="index">
            <p>{{ consulta.especialidade + ' ' + consulta.data + ' ' +  consulta.hora }}</p>
            <route-link :to="`/conta/editar-consulta/${consulta.id}`">
                <i class="bi bi-pencil-square"></i>
            </route-link>

            <i class="bi bi-trash" 
                @click="deleteConsulta(consulta.id)" 
                :disabled="loading"
            ></i>
        </div>
        <button>
            Nova Consulta
        </button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 30px;
    overflow: auto;
    height: 100%;
}
a {
    cursor: pointer;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cor-background);
    border-radius: 10px;
    flex-direction: row;
    width: 100%;
    gap: 5px;
    font-size: 20px;
    font-weight: bold;
    color: black;
}

p {
    color: var(--cor-fonte);
    width: 100%;
    height: 47px;
    line-height: 47px;
    padding-left: 20px;
}

.bi-trash {
    margin-right: 15px;
}
button {
    display: flex;
    align-items: center;
    height: 40px;
    width: 70%;
    justify-content: space-evenly;
    border-radius: 20px;
    outline: none;
    border: none;
    color: white;
    background-color: var(--cor-principal);
    font-size: 1.2rem;
    font-weight: bold;
    position: absolute;
    left: 50%;
    bottom: 110px;
    transform: translateX(-50%);
    z-index: 1;
}
</style>