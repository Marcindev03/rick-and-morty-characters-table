import { Heading, HStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { SPECIES } from "../../mocks";
import { CustomSearchbar } from "../common";
import { CustomSelect } from "../common/CustomSelect";
import { CharactersContainer } from "./CharactersContainer";

export const Characters: FC = () => {
  const [selectedSpecies, setSelectedSpecies] = useState("");

  return (
    <CharactersContainer>
      <Heading fontSize={"2xl"}>Characters</Heading>

      <HStack my="8" spacing="12">
        <CustomSearchbar />
        <CustomSelect
          placeholder="Species"
          availableOptions={SPECIES}
          value={selectedSpecies}
          onChange={setSelectedSpecies}
        />
      </HStack>
    </CharactersContainer>
  );
};
