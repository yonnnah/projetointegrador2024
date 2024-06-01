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
                    <input type="text" v-model="newData.data">
                </div>
                <div class="content">
                    <span>Hora</span>
                    <input type="text" v-model="newData.hora">
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
                <span>BOTAO: AJEITAR: ir para consutla</span>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
:disabled {
    cursor: not-allowed;
}
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 30px;
}

input {
    height: 40px;
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
button {
    cursor: pointer;
}
.content-diferente {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 5px;
    font-size: 20px;
    font-weight: bold;
    color: black;
}

p {
    color: var(--cor-fonte);
    width: 100%;
    background-color: var(--cor-background);
    height: 47px;
    border-radius: 10px;
    line-height: 47px;
    padding-left: 20px;
}
</style>