import { defineStore } from 'pinia'
import { ref } from 'vue'
import http from '@/services/http.js'

export const useConsulta = defineStore('useConsulta', () => {
    const consultas = ref()
    const consulta = ref()

    async function setConsultas() {
        try {
            const { data } = await http.get('/consultas')
            consultas.value = data
        } catch (error) {
            console.log(error)
        }
    }

    async function getConsulta(id) {
        try {
            const { data } = await http.get(`/consulta/${id}`)
            consulta.value = data
        } catch (error) {
            console.log(error)
        }
    }

    async function delConsultas(id) {
        try {
            await http.delete(`/consulta/${id}`)
            await setConsultas()
        } catch (error) {
            console.log(error)
        }
    }

    async function editConsulta(newValue) {
        const body = {
            especialidade: newValue.especialidade,
            data: newValue.data,
            hora: newValue.hora,
            realizada: 0
        }
        try {
            await http.put(`/consulta/${newValue.id}`, body)
            await setConsultas()
        } catch (error) {
            console.log(error)
        } 
    }
    return {
        consultas,
        consulta,
        setConsultas,
        getConsulta,
        delConsultas,
        editConsulta
    }
})