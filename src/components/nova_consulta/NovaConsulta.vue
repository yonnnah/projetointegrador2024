<script setup>
</script>

<template>
    <div class="container">
        <div class="content">
            <span>Especialidade</span>
            <p>Geriatra</p>
        </div>
        <div class="content-diferente">
            <div class="content">
                <span>Data</span>
                <p>15/08/2024</p>
            </div>
            <div class="content">
                <span>Hora</span>
                <p>12:00</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 30px;
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