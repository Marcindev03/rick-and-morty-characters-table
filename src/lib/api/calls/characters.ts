import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "rickmortyapi";
import { CharacterFilter } from "rickmortyapi/dist/interfaces";

export const CHARACTERS_QUERY_KEY = "characters";

export const useCharactersQuery = (filters?: CharacterFilter) =>
  useQuery({
    queryKey: [CHARACTERS_QUERY_KEY],
    queryFn: async () => {
      const { data, status, statusMessage } = await getCharacters(filters);

      if (status === 200) {
        return data;
      } else {
        throw new Error(`Status ${status}. ${statusMessage}`);
      }
    },
  });
