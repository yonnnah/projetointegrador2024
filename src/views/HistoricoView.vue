<script setup>
import ContainerHistorico from "@/components/historico/ContainerHistorico.vue";
</script>

<template>
  <div class="container-historico">
    <ContainerHistorico />
    <ContainerHistorico />
    <ContainerHistorico />
    <ContainerHistorico />
  </div>
</template>

<style scoped>
.container-historico {
  overflow: auto;
}
</style>