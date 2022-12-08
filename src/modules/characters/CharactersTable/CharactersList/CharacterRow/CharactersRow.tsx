import { Checkbox, Image, Td, Tr, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Character } from "rickmortyapi/dist/interfaces";
import { MediumText } from "../../../../common";
import { CharacterStatus } from "./CharacterStatus";

type CharactersRowProps = {
  character: Character;
};

export const CharactersRow: FC<CharactersRowProps> = ({
  character: { name, image, origin, gender, status, species },
}) => {
  const disableStyles = {
    tr: {
      bgColor: "secondaryBluePale.5",
    },
    text: {
      color: "primaryAnthracite.70",
    },
    speciesText: {
      color: "primaryAnthracite.50",
    },
  };

  const activeStyles = {
    tr: {},
    text: {
      color: "primaryAnthracite.100",
    },
    speciesText: {
      color: "primaryAnthracite.80",
    },
  };

  const styles = status === "Dead" ? disableStyles : activeStyles;

  return (
    <Tr {...styles.tr}>
      <Td>
        <Checkbox size="lg" />
      </Td>
      <Td>
        <MediumText {...styles.text}>{name}</MediumText>
        <Text {...styles.speciesText}>{species}</Text>
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
      <Td {...styles.text}>
        {origin.name === "unknown" ? (
          <Text color="primaryAnthracite.25">{origin.name}</Text>
        ) : (
          origin.name
        )}
      </Td>
      <Td {...styles.text}>{gender}</Td>
      <Td>
        <CharacterStatus status={status} />
      </Td>
    </Tr>
  );
};
