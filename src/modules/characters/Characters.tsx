import { Heading } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import {
  CHARACTERS_QUERY_KEY,
  queryClient,
  useCharactersQuery,
} from "../../lib";
import { CharactersContainer } from "./CharactersContainer";
import { CharactersTable } from "./CharactersTable";
import { PaginationControls } from "../common";
import { CharacterFilters } from "./CharacterFilters";
import { DEFAULT_FILTERS } from "../../mocks";

export const Characters: FC = () => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const { data, isLoading, refetch, isFetching } = useCharactersQuery(filters);

  useEffect(() => {
    const timeout = setTimeout(() => {
      refetch();
    }, 500);

    return () => {
      queryClient.cancelQueries({
        queryKey: [CHARACTERS_QUERY_KEY],
        exact: true,
      });
      clearTimeout(timeout);
    };
  }, [filters]);

  const handlePageChange = (page: number) =>
    setFilters((filters) => ({ ...filters, page }));

  return (
    <CharactersContainer>
      <Heading fontSize={"2xl"}>Characters</Heading>

      <CharacterFilters filters={filters} setFilters={setFilters} />

      <CharactersTable
        characters={data?.results ?? []}
        isLoading={isLoading || isFetching}
      />

      <PaginationControls
        totalPages={data?.info?.pages ?? 0}
        onPageChange={handlePageChange}
      />
    </CharactersContainer>
  );
};
