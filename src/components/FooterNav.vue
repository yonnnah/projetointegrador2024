<script setup>

</script>

<template>
    <footer class="container">
        <div>
            <router-link to="/conta/inicio">
                <div class="alinhamento-text-funcoes">
                    <i class="bi bi-house-fill"></i>
                    <p>Início</p>
                </div>
            </router-link>
            <router-link to="/conta/consulta">
                <div class="alinhamento-text-funcoes">
                    <i class="bi bi-calendar3"></i>
                    <p>Consultas</p>
                </div>
            </router-link>
            <router-link to="/conta/historico">
                <div class="alinhamento-text-funcoes">
                    <i class="bi bi-journal-text diferente"></i>
                    <p>Histórico</p>
                </div>
            </router-link>
            <router-link to="/conta/lembrete">
                <div class="alinhamento-text-funcoes">
                    <i class="bi bi-bell"></i>
                    <p>Lembrete</p>
                </div>
            </router-link>
        </div>
    </footer>
</template>

<style scoped>
.container {
    width: 100%;
    display: flex;
    height: 130px;
}
.container > div {
    display: flex;
    width: 100%;
    background-color: var(--background-footer);
    justify-content: space-evenly;
    gap: 0 5%;
    align-items: center;
}
.bi {
    font-size: 4em;
    line-height: 60px;
    color: var(--cor-principal);
}
.bi-telephone-fill {
    font-size: 1.5em;
    color: white;
}
.alinhamento-text-funcoes {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80px;
}
.container p {
    font-size: 16px;
    font-weight: bold;
    line-height: 25px;
    color: var(--cor-principal);
}
</style>