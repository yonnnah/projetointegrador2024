// import { computed, ref } from 'vue'
// import { defineStore } from 'pinia'
// import http from '@/services/http.js'

// export const useAuth = defineStore('useAuth', () => {
//   const usuario = ref()

//   async function login(dados) {
//     const body = {
//       email: dados.email,
//       password: dados.password
//     }

//     try {
//       const { data } = await http.post('/login', body)
//       console.log('data login: ', data)
      
//       localStorage.setItem('token', data.access_token)
//       localStorage.setItem('user', JSON.stringify(data.user))
//       localStorage.setItem('teste', 'teste')
//       usuario.value = data

//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const isAuthenticated = computed(() => {
//     console.log('token no aut', token)

//     if (token && user.value) {
//       console.log('token no aut', token)
//       return true
//     } else {
//       console.log('token no aut', token)
//       return false
//     }
//   })

//   return {
//     usuario,
//     login,
//     isAuthenticated
//   }
// })

