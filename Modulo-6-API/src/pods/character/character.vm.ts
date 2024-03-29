export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  sentences: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '0',
  name: '',
  status: '',
  species: '',
  sentences: '',
  type: '',
  gender: '',
  origin: { name: '', url: '' },
  location: { name: '', url: '' },
  image: '',
  episode: [],
  url: '',
  created: '',
});
