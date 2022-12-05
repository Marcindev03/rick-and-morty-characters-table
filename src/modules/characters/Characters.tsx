import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import { CharactersContainer } from "./CharactersContainer";

export const Characters: FC = () => {
  return (
    <CharactersContainer>
      <Heading fontSize={"2xl"}>Characters</Heading>
    </CharactersContainer>
  );
};
