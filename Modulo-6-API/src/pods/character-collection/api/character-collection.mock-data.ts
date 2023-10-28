import { CharacterEntityApi } from './character-collection.api-model';

export const mockCharacterCollection: CharacterEntityApi[] = [
  {
    id: 360,
    name: 'Toxic Morty',
    status: 'Dead',
    species: 'Humanoid',
    type: "Morty's toxic side",
    gender: 'Male',
    origin: {
      name: 'Detoxifier',
      url: 'https://rickandmortyapi.com/api/location/64',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/360.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/character/360',
    created: '2018-01-10T18:18:05.422Z',
  },
  {
    id: 361,
    name: 'Toxic Rick',
    status: 'Dead',
    species: 'Humanoid',
    type: "Rick's toxic side",
    gender: 'Male',
    origin: {
      name: 'Detoxifier',
      url: 'https://rickandmortyapi.com/api/location/64',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/character/361',
    created: '2018-01-10T18:20:41.703Z',
  },
];
