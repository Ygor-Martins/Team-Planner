import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Pokemon } from '@/types/pokemon';

export const MAX_TEAM_SIZE = 6;

export const useTeamStore = defineStore('team', () => {
    //state
    const team = ref<Pokemon[]>([]);

    //getters
    const isFull = computed(() => team.value.length >= MAX_TEAM_SIZE);

    //actions
    function isInTeam(id: number) {
        return team.value.some((p) => p.id ===id)
    }

    function addPokemon(pokemon: Pokemon){
        if (isFull.value || isInTeam(pokemon.id)) return;
        team.value.push(pokemon);
    }

    function removePokemon(id: number){
        team.value = team.value.filter((p) => p.id !== id);
    }
    return { team, isFull, isInTeam, addPokemon, removePokemon}
})