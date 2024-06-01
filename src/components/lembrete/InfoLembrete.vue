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
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash" @click="deleteLembrete(lembrete.id)"></i>
        </div>
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

p {
    color: var(--cor-fonte);
    width: 100%;
    line-height: 47px;
    padding-left: 20px;
}

.bi-trash {
    margin-right: 15px;
}
</style>