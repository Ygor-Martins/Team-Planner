<script setup lang="ts">
import PokemonCard from './PokemonCard.vue'
import { pokemonMock } from '@/data/pokemonMock.ts'
</script>

    <template>
        <section>
            <h2>Pokédex</h2>
            <div>
                <PokemonCard v-for="pokemon in pokemonMock" :key="pokemon.id" :pokemon="pokemon" />
            </div>
        </section>
    </template>