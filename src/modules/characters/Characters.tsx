import { Heading, HStack } from "@chakra-ui/react";
import { FC } from "react";
import { CustomSearchbar } from "../common";
import { CharactersContainer } from "./CharactersContainer";

export const Characters: FC = () => {
  return (
    <CharactersContainer>
      <Heading fontSize={"2xl"}>Characters</Heading>

      <HStack my="8" spacing="12">
        <CustomSearchbar />
      </HStack>
    </CharactersContainer>
  );
};
