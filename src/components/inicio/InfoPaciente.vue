<script setup>
import FotoPaciente from "@/components/inicio/FotoPaciente.vue";
import { useAuth } from "@/stores/user";

const auth = useAuth()
</script>

<template>
    <div class="container-info">
        <div class="img-paciente">
            <FotoPaciente />
        </div>
        <div class="content">
            <span>Nome</span>
            <p>{{ auth.usuario.name }}</p>
        </div>
        <div class="content">
            <span>E-mail</span>
            <p>{{ auth.usuario.email }}</p>
        </div>
        <div class="content">
            <span>Nascimento</span>
            <p>{{ auth.usuario.birthdate }}</p>
        </div>
        <div class="content">
            <span>Sexo</span>
            <p>{{ auth.usuario.gender }}</p>
        </div>
        <div class="content">
            <span>Plano</span>
            <p>{{ auth.usuario.plan }}</p>
        </div>
        <button onclick="window.location.href='tel:+62999999999'">
            Ligar para o médico
            <i class="bi bi-telephone-fill"></i>
        </button>
    </div>
</template>

<style scoped>
.container-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 30px;
    height: calc(100% - 260px);
}
.img-paciente {
    height: 200px;
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
p {
    color: var(--cor-fonte);
    width: 100%;
    background-color: var(--cor-background);
    height: 40px;
    border-radius: 10px;
    line-height: 40px;
    padding-left: 20px;
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
    bottom: -40px;
    transform: translateX(-50%);
    z-index: 1;
    cursor: pointer;
}
</style>