import { Heading, Skeleton } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useCharactersQuery } from "../../lib";
import { CharactersContainer } from "./CharactersContainer";
import { CharactersTable } from "./CharactersTable";
import { PaginationControls } from "../common";
import { CharacterFilters } from "./CharacterFilters";
import { DEFAULT_FILTERS } from "../../mocks";

export const Characters: FC = () => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const { data, isLoading, refetch } = useCharactersQuery(filters);

  useEffect(() => {
    refetch();
  }, [filters]);

  const handlePageChange = (page: number) =>
    setFilters((filters) => ({ ...filters, page }));

  return (
    <CharactersContainer>
      <Heading fontSize={"2xl"}>Characters</Heading>

      <CharacterFilters filters={filters} setFilters={setFilters} />

      <Skeleton isLoaded={!isLoading}>
        <CharactersTable characters={data?.results ?? []} />
      </Skeleton>

      <PaginationControls totalPages={12} onPageChange={handlePageChange} />
    </CharactersContainer>
  );
};
