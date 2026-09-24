<script setup lang="ts">
import { ref } from 'vue'
import PokemonCard from './PokemonCard.vue'
import { pokemonMock } from '@/data/pokemonMock.ts'
import type { Pokemon } from '@/types/pokemon'

const team = ref<Pokemon[]>([])


function handleAddPokemon(pokemon: Pokemon){


    if(team.value.length >= 6) {
        return
    }
    

    console.log('Pokemon adicionado:', pokemon)

    const alreadyExists = team.value.some(
    (teamPokemon) => teamPokemon.id === pokemon.id,
    )
    if(alreadyExists) {
    return
    }
        team.value.push(pokemon)
}
</script>

    <template>
        <section>
            <h2>Pokédex</h2>
            <div>
                <PokemonCard v-for="pokemon in pokemonMock" 
                :key="pokemon.id"
                :pokemon="pokemon"
                @add="handleAddPokemon"
                 />
            </div>
        </section>

        <section>
            <h2>Meu time</h2>
            <p v-if="team.length ===0">
                Seu time está vazio.
                
            </p>
                <ul v-else>
                    <li
                        v-for="pokemon in team"
                        :key="pokemon.id"
                    >
                        {{ pokemon.name }}
                    </li>
                </ul>
            
        </section>
    </template>