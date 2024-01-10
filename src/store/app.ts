// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue';
import Usuario from '@/classes/Usuario';

export const storeApp = defineStore('app', () => {
  const token = ref("");
  const link = "http://localhost:8095/api/v1";
  const usuario: Usuario | null = new Usuario();

  return {
    token,
    link,
    usuario
  }
})
