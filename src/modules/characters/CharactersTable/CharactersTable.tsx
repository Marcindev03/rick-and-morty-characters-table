import {
  Checkbox,
  Table,
  TableContainer,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";
import { Character } from "rickmortyapi/dist/interfaces";
import { CharactersList } from "./CharactersList";

const columnsHeadings = [
  {
    label: <Checkbox size="lg" />,
  },
  {
    label: "Name",
  },
  {
    label: "Avatar",
  },
  {
    label: "Origin",
  },
  {
    label: "Gender",
  },
  {
    label: "Status",
  },
];

type CharactersTableProps = {
  characters: Character[];
};

export const CharactersTable: FC<CharactersTableProps> = ({ characters }) => {
  return (
    <TableContainer backgroundColor={"primaryWhite.400"}>
      <Table>
        <Thead color="primaryAnthracite.80">
          <Tr>
            {columnsHeadings.map(({ label }, index) => (
              <Td key={`thead_item_${index}`} fontSize="sm">
                {label}
              </Td>
            ))}
          </Tr>
        </Thead>
        <CharactersList characters={characters} />
      </Table>
    </TableContainer>
  );
};
