<script setup lang="ts">
import PokemonCard from './PokemonCard.vue'
import { pokemonMock } from '@/data/pokemonMock.ts'
import { useTeamStore } from '@/stores/teamStore.ts'
const teamStore = useTeamStore()
</script>

    <template>
        <section>
            <h2>Pokédex</h2>
            <div>
                <PokemonCard v-for="pokemon in pokemonMock" 
                :key="pokemon.id"
                :pokemon="pokemon"
                @add="teamStore.addPokemon"
                 />
            </div>
        </section>
    </template>
