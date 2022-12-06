import { HStack } from "@chakra-ui/react";
import { FC } from "react";
import { CharacterFilter } from "rickmortyapi/dist/interfaces";
import { SPECIES } from "../../../mocks";
import { CustomSearchbar } from "../../common";
import { CustomSelect } from "../../common/CustomSelect";

type CharacterFiltersProps = {
  filters: CharacterFilter;
  setFilters: React.Dispatch<React.SetStateAction<CharacterFilter>>;
};

export const CharacterFilters: FC<CharacterFiltersProps> = ({
  filters: { species, name },
  setFilters,
}) => {
  return (
    <HStack my="8" spacing="12">
      <CustomSearchbar
        value={name!}
        onChange={(name) => setFilters((filters) => ({ ...filters, name }))}
      />
      <CustomSelect
        placeholder="Species"
        availableOptions={SPECIES}
        value={species!}
        onChange={(newSpecies) =>
          setFilters((filters) => ({ ...filters, species: newSpecies }))
        }
      />
    </HStack>
  );
};
