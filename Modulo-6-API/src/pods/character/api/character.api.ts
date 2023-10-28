import { Character } from './character.api-model';
import { Lookup } from 'common/models';

const characterListUrl = '/api/characters';
const gendersListUrl = '/api/genders';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`${characterListUrl}/${id}`);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const getGenders = async (): Promise<Lookup[]> => {
  const response = await fetch(gendersListUrl);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    // Update
    await fetch(`${characterListUrl}/${character.id}`, {
      method: 'PUT',
      body: JSON.stringify(character),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    // Insert
    await fetch(characterListUrl, {
      method: 'POST',
      body: JSON.stringify(character),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  return true;
};
