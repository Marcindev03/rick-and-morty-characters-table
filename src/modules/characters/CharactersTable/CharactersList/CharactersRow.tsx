import { Checkbox, Image, Td, Tr, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Character } from "rickmortyapi/dist/interfaces";

type CharactersRowProps = {
  character: Character;
};

export const CharactersRow: FC<CharactersRowProps> = ({
  character: { name, image, origin, gender, status, species },
}) => (
  <Tr>
    <Td>
      <Checkbox />
    </Td>
    <Td>
      <Text>{name}</Text>
      <Text>{species}</Text>
    </Td>
    <Td>
      <Image src={image} rounded="15" height={50} />
    </Td>
    <Td>{origin.name}</Td>
    <Td>{gender}</Td>
    <Td>{status}</Td>
  </Tr>
);
