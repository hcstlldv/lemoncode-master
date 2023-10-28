import { CharacterEntityApi } from './character-collection.api-model';

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

export const deleteCharacter = async (id: string): Promise<boolean> => {
  const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
  return response.ok;
};
