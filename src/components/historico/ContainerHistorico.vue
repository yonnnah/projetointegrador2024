<script setup>
</script>

<template>
    <div class="container">
        <i class="bi bi-person-circle"></i>
        <div>
            <h4>Atendido por Felipe Alves</h4>
            <h5>Densitometria óssea</h5>
            <p> - Exame regular, paciente diagnosticado a osteoporose.</p>
            <h5>Prescrição</h5>
            <p> - Bonviva 150mg Roche 1 comprimido.</p>
        </div>
        <span>15/02/2024</span>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    height: auto;
    gap: 20px;
    padding: 20px;
    border-bottom: 2px solid #dad5db;
}
.container > i {
    font-size: 39px;
}
.container div {
    display: flex;
    flex-direction: column;
    display: flex;
    gap: 10px;
}
span {
    display: flex;
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: #f16323;
    text-underline-offset: 8px;
    text-decoration-thickness: 4px;
}


</style>