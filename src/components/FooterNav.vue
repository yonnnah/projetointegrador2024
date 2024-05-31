<script setup>

</script>

<template>
    <footer class="container">
        <button>
            Ligar para o médico
            <i class="bi bi-telephone-fill"></i>
        </button>
        <div>
            <router-link to="/inicio">
                <div class="alinhamento-text-funcoes">
                    <i class="bi bi-house-fill"></i>
                    <p>Início</p>
                </div>
            </router-link>
            <router-link to="/consulta">
                <div class="alinhamento-text-funcoes">
                    <i class="bi bi-calendar3"></i>
                    <p>Consultas</p>
                </div>
            </router-link>
            <router-link to="/historico">
                <div class="alinhamento-text-funcoes">
                    <i class="bi bi-journal-text diferente"></i>
                    <p>Histórico</p>
                </div>
            </router-link>
            <router-link to="/lembrete">
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