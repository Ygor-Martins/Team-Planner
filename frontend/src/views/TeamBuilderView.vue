
<script setup lang="ts">
import PokemonList from '@/components/PokemonList.vue'
import TeamSlot from '@/components/TeamSlot.vue'
import { useTeamStore, MAX_TEAM_SIZE } from '@/stores/teamStore.ts'
const teamStore = useTeamStore()
</script>



<template>
    <main>
        <h1>Pokémon Team Planner</h1>

        <PokemonList />
        <section>
        <h2>My Team ({{ teamStore.team.length }}/{{ MAX_TEAM_SIZE }})</h2>
        <TeamSlot 
    v-for="i in MAX_TEAM_SIZE"
    :key="i"
    :pokemon="teamStore.team[i - 1]"
    @remove="teamStore.removePokemon"
    />       
        </section>
    </main>
</template>

