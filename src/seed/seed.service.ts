import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    //Primero borrar viejos datos para evitar error duplicado
    await this.pokemonModel.deleteMany();

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonsToInsert = [];

    data.results.forEach((poke) => {
      const segments = poke.url.split('/');

      const no = +segments[segments.length - 2];

      pokemonsToInsert.push({ name: poke.name, no });
    });

    await this.pokemonModel.insertMany(pokemonsToInsert);

    return 'Seeds Executed!!';
  }
}
