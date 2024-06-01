<script setup>
import { useAuth } from "@/stores/user";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const dataAuth = useAuth()
const router = useRouter()

onMounted(() => {
    console.log('is auth: ', dataAuth.isAuthenticated)
    if (dataAuth.isAuthenticated) {
        router.push('/inicio')
    }
})
</script>


<template>
    <div class="container">
        <div>
            <img src="@/assets/img/MedAssist.svg" alt="Logo da empresa">
            <hr>

        </div>
        <div class="content">
            <router-link to="login">
                <span>Acesse sua conta!</span>
            </router-link>
            <router-link to="cadastro">
                <span>Cadastre-se</span>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--cor-principal);
}
.container > div {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}
.content {
    display: flex;
    width: 100%;
    height: 300px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.content > a {
    background-color: white;
    color: var(--cor-principal);
    height: 40px;
    width: 300px;
    display: flex;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin: 8px;
    border: 1px solid grey;
}
hr {
    width: 70px;
    color: #f16323;
    height: 5px;
    border: none;
    background-color: #f16323;
    margin: 10px 120px 20px 0;
}
</style>