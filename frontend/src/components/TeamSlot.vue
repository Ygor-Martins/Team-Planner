<script setup lang="ts">
import type { Pokemon } from '@/types/pokemon'

defineProps<{
  pokemon?: Pokemon        // o "?" deixa o slot vazio ser válido
}>()

const emit = defineEmits<{
  remove: [id: number]
}>()
</script>

<template>
  <div class="team-slot">
    <template v-if="pokemon">
      <img :src="pokemon.sprite" :alt="pokemon.name" />
      <span>{{ pokemon.name }}</span>
      <button type="button" @click="emit('remove', pokemon.id)">Remover</button>
    </template>

    <span v-else>Vazio</span>
  </div>
</template>