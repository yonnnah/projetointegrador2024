<script setup>
// import { reactive } from "vue";
// import { useAuth } from '@/stores/user'
// import { useRouter } from "vue-router";

// const router = useRouter()
// const auth = useAuth()

const dataLogin = reactive({
    email: '',
    password: ''
})

// async function realizarLogin() {
//     await auth.login({
//         email: dataLogin.email,
//         password: dataLogin.password
//     })

//     console.log('auth is aut', auth.isAuthenticated)
//     if ( auth.isAuthenticated ) {
//         router.push('/inicio')
//     }
// }

</script>

<template>
    <div class="container">
        <div>
            <img src="/src/assets/img/logo-black.png" alt="">
        </div>
        <div class="texto-login">
            <h1>Login</h1>
        </div>

        <div>
            <div class="formulario-itens-alinhamento">
                <div class="form-contato">
                    <label for="CPF"><strong>E-mail</strong></label>
                    <br>
                    <input type="email" v-model="dataLogin.email">
                </div>
                <div class="form-contato">
                    <label for="Senha"><strong>Senha</strong></label>
                    <br>
                    <input type="password" v-model="dataLogin.password">
                </div>
                <div class="botao-login">
                    <button 
                        class="botao-login-botao"
                        @click="realizarLogin"
                    >
                        <strong>Entrar</strong>
                    </button>
                    <span>
                        <span> Não tem uma conta? <p>cadastre-se.</p></span>
                    </span>
                </div>
                
            </div>
            <div class="icones-media">
                <i class="bi bi-instagram"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-youtube"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.texto-login {
    text-align: center;
    font-family: roboto;
    font-size: 20px;
    font-weight: 100;
    line-height: 30px;
    margin-bottom: 30px;
    margin-top: 30px;    
}
.formulario-itens-alinhamento {
    display: flex;
    flex-direction: column;
}
.form-contato {
    margin: 5px;
}
.form-contato label {
    font-size: medium;
    font-family: roboto; 
    margin-left: 1%;
    height: 30px;
    width: 100%;
    font-weight: 1;
    font-size: 17px;
}
.form-contato input {
    margin-top: 4%;
    padding: 8px 18px;
    width: 325px;
    height: 46.16px;
    border: none;
    background-color: var(--cor-background);
    color: #5e5e5e;
    border-radius: 20px;
    outline: none;
    font-family: roboto;
}
.botao-login {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.botao-login-botao {
    background-color: var(--cor-botao-login);
    color: var(--cor-fundo);
    border: none;
    border-radius: 20px;
    outline: none;
    width: 128px;
    height: 39px;
    margin-top: 6%;
    font-size: 24px;
}
.icones-media {
    display: flex;
    justify-content: center;
}
.bi{
    margin: 0 14px;
    font-size: 30px;
    color: var(--cor-principal);
}
.botao-login span {
    display: flex;
    line-height: 30px;
    font-weight: 500;
    cursor: pointer;
}
.botao-login p {
    text-decoration: underline;
    color: blue;
    text-underline-offset: 4px;
    margin-left: 5px;
}
</style>