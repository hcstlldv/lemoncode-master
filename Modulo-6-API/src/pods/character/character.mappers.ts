import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: String(character.id),
  name: character.name,
  status: character.status,
  sentences: character.sentences,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin,
  location: character.location,
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  ({
    ...character,
    id: String(character.id),
    name: character.name,
    status: character.status,
    sentences: character.sentences,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: character.origin,
    location: character.location,
    image: character.image,
    episode: character.episode,
    url: character.url,
    created: character.created,
  } as unknown as apiModel.Character);
