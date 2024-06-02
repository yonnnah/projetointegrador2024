<script setup>
import { useConsulta } from '@/stores/consulta';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const dataConsulta = useConsulta();
const router = useRouter();
const loading = ref(false)
const newConsulta = reactive({
  especialidade: '',
  data: '',
  hora: '',
});
const error = ref(null);

async function submitForm() {
  try {
    await dataConsulta.addConsulta(newConsulta);
    router.push('/conta/consulta');
  } catch (erro) {
    console.log(erro)
    error.value = erro.response ? erro.response.data : 'Erro ao agendar consulta';
  }
}
</script>

<template>
    <div class="container">
        <div>
            <div class="content">
                <span>Especialidade</span>
                <input type="text" v-model="newConsulta.especialidade">
            </div>
            <div class="content-diferente">
                <div class="content">
                    <span>Data</span>
                    <input type="text" v-model="newConsulta.data" placeholder="00/00/0000">
                </div>
                <div class="content">
                    <span>Hora</span>
                    <input type="time" v-model="newConsulta.hora">
                </div>
            </div>
            <button 
                @click="submitForm"
                :disabled="loading"
            >
                Nova consulta
            </button>
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