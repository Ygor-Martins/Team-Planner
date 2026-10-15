import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service.js';

@Controller('pokemon')
export class PokemonController {
    constructor (private readonly pokemonService: PokemonService){}

    @Get()
    findAll(
        @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
        @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    ) {
        return this.pokemonService.findAll(limit, offset);
    }

    @Get(':name')
    findOne(@Param('name') name: string) {
        return this.pokemonService.findOne(name);
    }

}

