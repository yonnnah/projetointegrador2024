<script setup>
import HeaderMed from '@/components/HeaderMed.vue'
import FooterNav from '@/components/FooterNav.vue';
import { useRoute } from 'vue-router';
const route = useRoute()

</script>

<template>
  <div>
    <HeaderMed v-if="
      route.path !== '/login' &&
      route.path !== '/cadastro'
    "/>

    <RouterView 
      :style="route.path == '/login' && route.path !== '/cadastro' ?
      '76%' : '100%'"
    />
    
    <FooterNav v-if="
      route.path !== '/login' &&
      route.path !== '/cadastro'"
      class="footer" 
    />
  </div>
</template>

<style scoped>
div {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  position: relative;
}
.footer {
  position: absolute;
  bottom: 0px;
  left: 0;
}
</style>
