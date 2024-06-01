<script setup>
import { onBeforeMount, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useLembrete } from '@/stores/lembrete';

const dataLembrete = useLembrete()
const route = useRoute()
const router = useRouter()
const loading = ref(false)

const newData = reactive({
    id: route.params.id,
    title: '',
    data: '',
    hora: ''
})

async function editarLembrete() {
    loading.value = true
    newData.data === "todos os dias" ? "allday" : newData.data
    await dataLembrete.editLembrete(newData)
    loading.value = false
    router.push('/conta/lembrete')
}
onBeforeMount( async () => {
    await dataLembrete.getLembrete(route.params.id)
    newData.title = dataLembrete.lembrete.title
    newData.data = dataLembrete.lembrete.data === "allday" ? "todos os dias" : dataLembrete.lembrete.data
    newData.hora = dataLembrete.lembrete.hora
})
</script>

<template>
    <div class="container">
        <div v-if="dataLembrete.lembrete">
            <div class="content">
                <span>Lembrete</span>
                <input type="text" v-model="newData.title">
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
                @click="editarLembrete"
                :disabled="loading"
            >
                Salvar alterações
            </button>
        </div>
        <div v-if="!dataLembrete.lembrete">
            <span>Lembrete nao encontrada</span>
            <router-link to="/conta/lembrete">
                <span>BOTAO: AJEITAR: ir para consutla</span>
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