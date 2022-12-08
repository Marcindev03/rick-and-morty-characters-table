import { Tbody } from "@chakra-ui/react";
import { FC } from "react";
import { Character } from "rickmortyapi/dist/interfaces";
import { CharactersRow } from "./CharacterRow/CharactersRow";

type CharactersListProps = {
  characters: Character[];
};

export const CharactersList: FC<CharactersListProps> = ({ characters }) => (
  <Tbody>
    {characters.map((character) => (
      <CharactersRow key={character.name} character={character} />
    ))}
  </Tbody>
);
