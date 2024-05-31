<script setup>
import FotoPaciente from "@/components/inicio/FotoPaciente.vue";
</script>

<template>
    <div class="container-info">
        <div class="img-paciente">
            <FotoPaciente />
        </div>
        <div class="content">
            <span>Nome</span>
            <p>Octávio Carvalho de Oliveira</p>
        </div>
        <div class="content">
            <span>E-mail</span>
            <p>octaviocarvalhooliveira@gmail.com</p>
        </div>
        <div class="content">
            <span>Nascimento</span>
            <p>15/08/1952</p>
        </div>
        <div class="content">
            <span>Sexo</span>
            <p>Masculino</p>
        </div>
        <div class="content">
            <span>Plano</span>
            <p>Silver</p>
        </div>
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
</style>