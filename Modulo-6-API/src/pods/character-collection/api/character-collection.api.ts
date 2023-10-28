import { CharacterEntityApi } from './character-collection.api-model';

/**
 * Lista de actores de la API Rest de Rick & Morty
 */
// const url = 'https://rickandmortyapi.com/api/character/?page=19';

// export const getCharacterCollection = async (): Promise<
//   CharacterEntityApi[]
// > => {
//   const response = await fetch(url);
//   if (response.ok) {
//     const data = await response.json();
//     return data.results;
//   } else {
//     throw Error(response.statusText);
//   }
// };

/**
 * Lista de actores del json server
 */
const url = '/api/characters';
export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
  return response.ok;
};
