<script setup lang="ts">
import type { Pokemon } from '@/types/pokemon'

const props = defineProps<{
  pokemon: Pokemon
}>()

const emit = defineEmits<{
    add:[pokemon: Pokemon]
}>()
</script>
<template>
    <article class="Pokemon-card">
        <img
            :src="pokemon.sprite"
            :alt="pokemon.name"
        
        />

        <h2>{{ pokemon.name }}</h2>

        <div>
         <span
             v-for="type in pokemon.types"
             :key="type"
        >
        
             {{ type }}


         </span>
        </div>

<button
  type="button"
  @click="emit('add', pokemon)"
>
  Adicionar
</button>
    </article>
</template>