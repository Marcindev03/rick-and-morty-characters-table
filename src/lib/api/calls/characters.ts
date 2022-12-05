import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "rickmortyapi";

export const CHARACTERS_QUERY_KEY = "characters";

export const useCharactersQuery = () =>
  useQuery({
    queryKey: [CHARACTERS_QUERY_KEY],
    queryFn: async () => {
      const { data, status, statusMessage } = await getCharacters();

      if (status === 200) {
        return data;
      } else {
        throw new Error(`Status ${status}. ${statusMessage}`);
      }
    },
  });
