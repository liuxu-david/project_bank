import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('mainData', () =>{
    const modelFlag = ref(false);
    const handleModel = () => {modelFlag.value = !modelFlag.value; };
    return {
        modelFlag,
        handleModel
    }
})