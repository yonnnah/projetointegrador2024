<script setup>
</script>

<template>
    <div class="container">
        <div class="content">
            <p>Remédio de pressão 11:00</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
        </div>
        <div class="content">
            <p>Medir glicose 11:20</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
        </div>
        <div class="content">
            <p>Caminhada 16:30</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
        </div>
        <div class="content">
            <p>Bonviva 150mg Roche 18:00</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
        </div>
        <div class="content">
            <p>Remédio de pressão 23:00</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
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
    height: 47px;
    line-height: 47px;
    padding-left: 20px;
}

.bi-trash {
    margin-right: 15px;
}
</style>