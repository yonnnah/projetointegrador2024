<script setup>
import { onBeforeMount, reactive } from "vue";
import { useAuth } from '@/stores/user';
import { useRouter } from "vue-router";

const router = useRouter()
const auth = useAuth()

const dataCadastro = reactive({
    nome: '',
    email: '',
    nascimento: '',
    genero: '',
    password: ''
})

async function realizarCadastro() {
    try {
        await auth.cadastro(dataCadastro)
    } catch (error) {
        console.log(error)
    }

    console.log('auth is aut', auth.isAuthenticated)
    router.push({path: '/login'})
}   
</script>

<template>
    <div class="tela">
        <div>
            <img src="/src/assets/img/logo-black.png" alt="">
        </div>
        <div class="cadastro-form" @submit.prevent="onSubmit">
            <h1>Cadastro</h1>
            <form id="cadastroForm">
                <div class="form-group">
                    <label for="name">Nome</label>
                        <input type="text" id="name" name="name" v-model="dataCadastro.nome" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                    <input type="email" id="email" name="email"  v-model="dataCadastro.email" required>
                    </div>
                    <div class="form-group">
                        <label for="birthdate">Nascimento</label>
                    <input type="text" id="birthdate" name="birthdate" placeholder="00/00/0000" v-model="dataCadastro.nascimento" required>
                    </div>
                    <div class="form-group">
                        <label for="gender">Sexo</label>
                    <select id="gender" name="gender"  v-model="dataCadastro.genero" required>
                        <option value="" disabled selected>Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                    </div>
                    <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password"  v-model="dataCadastro.password" required>
                </div>
                <button @click="realizarCadastro">
                    Cadastrar
                </button>
            </form>
        </div>
</div>
</template>

<style scoped>
.tela {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.cadastro-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
}

.cadastro-form h1 {
    text-align: center;
    font-size: 2em;
    line-height: 30px;
    letter-spacing: 0em;
    margin-bottom: 30px;
    margin-top: 30px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 20px;
    font-size: bold;
    padding-left: 3px;
}

.form-group input {
    padding: 8px 18px;
    width: 100%;
    height: 46.16px;
    border: none;
    background-color: #EEEE;
    color: #5e5e5e;
    border-radius: 20px;
    outline: none;
}

.form-group select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #EEEE;
  cursor: pointer;
  padding: 10px; 
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #5e5e5e;
}

.form-group select:focus {
  outline:#0056b3;
}

button {
    width: 100%;
    padding: 10px;
    background-color: var( --cor-principal);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}
</style>