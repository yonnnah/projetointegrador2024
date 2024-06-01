<script setup>
import { useLembrete } from '@/stores/lembrete'; 
import { onBeforeMount } from 'vue';

const dataLembrete = useLembrete()

async function deleteLembrete(id) {
    await dataLembrete.delLembretes(id)
}

onBeforeMount(async () => {
    await dataLembrete.setLembretes()
})
</script>

<template>
    <div class="container">
        <div class="content" v-for="lembrete, index in dataLembrete.lembretes" :key="index">
            <p>{{ lembrete.title }} {{ lembrete.data === "allday" ? "todos os dias" : lembrete.data }} {{ lembrete.hora }}</p>
            <router-link :to="`/conta/editar-lembrete/${lembrete.id}`">
                <i class="bi bi-pencil-square"></i>
            </router-link>
            <i class="bi bi-trash" @click="deleteLembrete(lembrete.id)"></i>
        </div>
        <router-link to="/conta/novo-lembrete">
            <button>
                Novo Lembrete
            </button>
        </router-link>
        
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
.content i{
    color: black;
}
p {
    color: var(--cor-fonte);
    width: 100%;
    line-height: 47px;
    padding: 0 20px;
}
.bi-trash {
    margin-right: 15px;
    cursor: pointer;
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
    bottom: 112px;
    transform: translateX(-50%);
    z-index: 1;
    cursor: pointer;
}
</style>