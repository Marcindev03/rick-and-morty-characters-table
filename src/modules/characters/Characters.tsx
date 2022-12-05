import { Heading, HStack, Skeleton } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useCharactersQuery } from "../../lib";
import { SPECIES } from "../../mocks";
import { CustomSearchbar } from "../common";
import { CustomSelect } from "../common/CustomSelect";
import { CharactersContainer } from "./CharactersContainer";
import { CharactersTable } from "./CharactersTable";

export const Characters: FC = () => {
  const { data, isLoading } = useCharactersQuery();

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

      <Skeleton isLoaded={!isLoading}>
        <CharactersTable characters={data?.results ?? []} />
      </Skeleton>
    </CharactersContainer>
  );
};
