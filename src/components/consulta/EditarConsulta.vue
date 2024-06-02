<script setup>
import { onBeforeMount, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useConsulta } from '@/stores/consulta';

const dataConsulta = useConsulta()
const route = useRoute()
const router = useRouter()
const loading = ref(false)

const newData = reactive({
    id: route.params.id,
    especialidade: '',
    data: '',
    hora: ''
})

async function editarConsulta() {
    loading.value = true
    await dataConsulta.editConsulta(newData)
    loading.value = false
    router.push('/conta/consulta')
}
onBeforeMount( async () => {
    await dataConsulta.getConsulta(route.params.id)
    newData.especialidade = dataConsulta.consulta.especialidade
    newData.data = dataConsulta.consulta.data
    newData.hora = dataConsulta.consulta.hora
})
</script>

<template>
    <div class="container">
        <div v-if="dataConsulta.consulta">
            <div class="content">
                <span>Especialidade</span>
                <input type="text" v-model="newData.especialidade">
            </div>
            <div class="content-diferente">
                <div class="content">
                    <span>Data</span>
                    <input type="text" v-model="newData.data" placeholder="00/00/0000">
                </div>
                <div class="content">
                    <span>Hora</span>
                    <input type="time" v-model="newData.hora">
                </div>
            </div>
            <button 
                @click="editarConsulta"
                :disabled="loading"
            >
                Salvar alterações
            </button>
        </div>
        <div v-if="!dataConsulta.consulta">
            <span>Consulta nao encontrada</span>
            <router-link to="/conta/consulta">
                <span>BOTAO: AJEITAR: ir para consulta</span>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 40px 40px 230px;
}
input {
    color: var(--cor-fonte);
    font-size: 20px;
    width: 100%;
    background-color: var(--cor-background);
    height: 37px;
    border-radius: 10px;
    border: none;
    line-height: 47px;
    padding-left: 20px;
}
.content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    font-size: 20px;
    font-weight: bold;
    color: black;
}
.content-diferente {
    display: flex;
    justify-content: center;
    gap: 5px;
}
button {
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    justify-content: space-evenly;
    border-radius: 20px;
    outline: none;
    border: none;
    color: white;
    background-color: var(--cor-principal);
    font-size: 1.2rem;
    font-weight: bold;
}
</style>