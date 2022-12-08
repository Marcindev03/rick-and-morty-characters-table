import { Checkbox, Image, Td, Tr, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Character } from "rickmortyapi/dist/interfaces";
import { CharacterStatus } from "./CharacterStatus";

type CharactersRowProps = {
  character: Character;
};

export const CharactersRow: FC<CharactersRowProps> = ({
  character: { name, image, origin, gender, status, species },
}) => (
  <Tr>
    <Td>
      <Checkbox size="lg" />
    </Td>
    <Td>
      <Text fontWeight={"500"} color="primaryAnthracite.100">
        {name}
      </Text>
      <Text color="primaryAnthracite.80">{species}</Text>
    </Td>
    <Td>
      <Image
        border="2px dashed"
        borderColor="secondaryBluePale.15"
        shadow="md"
        src={image}
        rounded="15"
        height={50}
      />
    </Td>
    <Td>{origin.name}</Td>
    <Td>{gender}</Td>
    <Td>
      <CharacterStatus status={status} />
    </Td>
  </Tr>
);
