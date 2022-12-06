import { Heading, HStack, Skeleton } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useCharactersQuery } from "../../lib";
import { SPECIES } from "../../mocks";
import { CustomSearchbar } from "../common";
import { CustomSelect } from "../common/CustomSelect";
import { CharactersContainer } from "./CharactersContainer";
import { CharactersTable } from "./CharactersTable";
import { PaginationControls } from "../common";

export const Characters: FC = () => {
  const [species, setSpecies] = useState("");
  const [page, setPage] = useState(0);

  const { data, isLoading, refetch } = useCharactersQuery({
    page,
    species,
  });

  const handlePageChange = (page: number) => {
    setPage(page);
    refetch();
  };

  return (
    <CharactersContainer>
      <Heading fontSize={"2xl"}>Characters</Heading>

      <HStack my="8" spacing="12">
        <CustomSearchbar />
        <CustomSelect
          placeholder="Species"
          availableOptions={SPECIES}
          value={species}
          onChange={setSpecies}
        />
      </HStack>

      <Skeleton isLoaded={!isLoading}>
        <CharactersTable characters={data?.results ?? []} />
      </Skeleton>

      <PaginationControls totalPages={12} onPageChange={handlePageChange} />
    </CharactersContainer>
  );
};
