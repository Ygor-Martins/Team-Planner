import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { PokemonDto } from './dto/pokemon.dto.js';
import type { PokeApiList, PokeApiPokemon } from './Pokeapi.types.js';

const POKEAPI_URL = 'https://pokeapi.co/api/v2';

@Injectable()
export class PokemonService {
    async findOne(nameOrId: string): Promise<PokemonDto> {
        const response = await fetch(`${POKEAPI_URL}/pokemon/${nameOrId.toLowerCase()}`);

        if (response.status === 404)    {
            throw new NotFoundException(`pokemon "${nameOrId}" não encontrado`);
        }
        if (!response.ok) {
            throw new BadGatewayException('Erro ao consultar a PokeAPI');
        }
        const data = (await response.json()) as PokeApiPokemon;
        return this.toDto(data);
    }   

    async findAll(limit: number, offset: number): Promise<PokemonDto[]> {
        const response = await fetch(`${POKEAPI_URL}/pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) {
            throw new BadGatewayException('Erro ao consultar a PokeAPI');
        }
        const list = (await response.json()) as PokeApiList;
         // a lista só traz nome + url, então os detalhes em paralelo
         return Promise.all(list.results.map((p) => this.findOne(p.name)));
    }
    private toDto(data: PokeApiPokemon): PokemonDto {
        return {
            id: data.id,
            name: data.name,
            types: data.types.sort((a,b) => a.slot - b.slot).map((t) => t.type.name),
            sprite: data.sprites.front_default ?? '',
        };
    }
}