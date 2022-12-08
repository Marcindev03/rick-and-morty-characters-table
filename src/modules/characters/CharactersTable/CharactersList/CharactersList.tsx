import { Tbody } from "@chakra-ui/react";
import { FC } from "react";
import { Character } from "rickmortyapi/dist/interfaces";
import { CharactersRow } from "./CharacterRow/CharactersRow";
import { SkeletonList } from "./SkeletonList";

type CharactersListProps = {
  isLoading: boolean;
  characters: Character[];
};

export const CharactersList: FC<CharactersListProps> = ({
  characters,
  isLoading,
}) => (
  <Tbody>
    {isLoading ? (
      <SkeletonList />
    ) : (
      <>
        {characters.map((character) => (
          <CharactersRow key={character.name} character={character} />
        ))}
      </>
    )}
  </Tbody>
);
