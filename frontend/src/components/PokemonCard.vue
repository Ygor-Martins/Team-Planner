<script setup lang="ts">
import type { Pokemon } from '@/types/pokemon'

const props = defineProps<{
  pokemon: Pokemon
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
    </article>
</template>