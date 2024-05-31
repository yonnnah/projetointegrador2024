import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import http from '@/services/http.js'

export const useAuth = defineStore('useAuth', () => {
  const token = ref(localStorage.getItem('token') || '')
  const getUser = localStorage.getItem('user')
  const usuario = ref(getUser ? JSON.parse(getUser) : null)

  async function login(dados) {
    const body = {
      email: dados.email,
      password: dados.password
    }

    try {
      const { data } = await http.post('/login', body)
      setToken(data.access_token)
      setUser(data.user)
    } catch (error) {
      console.log(error)
    }
  }

  function setToken(tk){
    localStorage.setItem('token', tk)
    token.value = tk
  }
  function setUser(us) {
    localStorage.setItem('user', JSON.stringify(us));
    usuario.value = us;
  }

  const isAuthenticated = computed(() => {
    if (token.value && usuario.value) {
      return true
    } else {
      return false
    }
  })

  return {
    usuario,
    login,
    isAuthenticated
  }
})

