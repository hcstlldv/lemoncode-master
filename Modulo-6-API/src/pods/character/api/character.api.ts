import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockGenders, mockCharacterCollection } from './character.mock-data';

export const getCharacter = async (id: number): Promise<Character> => {
  return mockCharacterCollection.find((h) => h.id === id);
};

export const getGenders = async (): Promise<Lookup[]> => {
  return mockGenders;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
