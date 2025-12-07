<script setup>
import { ref } from 'vue'

const props = defineProps({
  odabranaPizza: {
    type: Object,
    required: true
  }
})

const odabranaVelicina = ref('srednja')
const kolicina = ref(1)
const emit = defineEmits(['close'])

function povecajKolicinu() {
  kolicina.value++
}

function smanjiKolicinu() {
  if (kolicina.value > 1) {
    kolicina.value--
  }
}
</script>

<template>
  <div v-if="odabranaPizza" class="fixed bottom-0 left-0 right-0 bg-slate-800 text-white shadow-lg p-4">
      
    <button class="absolute top-2 right-2 text-slate-300 hover:text-white text-xl font-bold
cursor-pointer" @click="emit('close')">×</button>
    
    <div class="max-w-5xl mx-auto flex items-center justify-between gap-4">
      

      <div class="flex items-center gap-4">
        <img 
          :src="odabranaPizza.slika_url" 
          :alt="odabranaPizza.naziv" 
          class="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover shadow-md shadow-black/40" 
        />
        <div>
          <h3 class="font-bold tracking-wide text-base sm:text-lg text-orange-400">
            {{ odabranaPizza.naziv }}
          </h3>
          <p class="text-sm text-slate-300">{{ odabranaPizza.sastojci.join(', ') }}</p>
        </div>
      </div>

    
      <div class="flex items-center justify-center sm:justify-start flex-wrap gap-2 w-full sm:w-auto">
        <button
          v-for="(cijena, velicina) in odabranaPizza.cijene"
          :key="velicina"
          @click="odabranaVelicina = velicina"
          class="px-3 py-1 cursor-pointer rounded-lg border border-slate-500 bg-slate-600/40 hover:bg-orange-500 hover:border-orange-400 hover:text-white transition-all text-sm sm:text-base"
        >
          {{ velicina }} – €{{ cijena }}
        </button>
      </div>

  
      <div class="flex items-center gap-3">
        <button @click="smanjiKolicinu" class="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-full">-</button>
        <span class="font-bold text-xl">{{ kolicina }}</span>
        <button @click="povecajKolicinu" class="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-full">+</button>
      </div>

      
      <div class="flex items-center gap-4">
        <div class="text-right">
          <p class="text-sm text-slate-300">Ukupno</p>
          <p class="font-bold text-2xl">€{{ (odabranaPizza.cijene[odabranaVelicina] * kolicina).toFixed(2) }}</p>
        </div>
        <button class="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-bold">
          Dodaj u košaricu
        </button>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
</style>