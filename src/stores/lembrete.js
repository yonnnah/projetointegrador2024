import { defineStore } from 'pinia'
import { ref } from 'vue'
import http from '@/services/http.js'

export const useLembrete = defineStore('useLembrete', () => {
    const lembretes = ref()
    const lembrete = ref()

    async function setLembretes() {
        try {
            const { data } = await http.get('/notificacoes')
            lembretes.value = data
        } catch (error) {
            console.log(error)
        }
    }

    async function getLembrete(id) {
        try {
            const { data } = await http.get(`/notificacao/${id}`)
            lembrete.value = data
        } catch (error) {
            console.log(error)
        }
    }

    async function delLembretes(id) {
        try {
            await http.delete(`/notificacao/${id}`)
            await setLembretes()
        } catch (error) {
            console.log(error)
        }
    }

    async function editLembrete(newValue) {
        const body = {
            title: newValue.title,
            data: newValue.data,
            hora: newValue.hora,
        }
        try {
            await http.put(`/notificacao/${newValue.id}`, body)
            await setLembretes()
        } catch (error) {
            console.log(error)
        } 
    }
    return {
        lembretes,
        lembrete,
        setLembretes,
        getLembrete,
        delLembretes,
        editLembrete,
    }
})