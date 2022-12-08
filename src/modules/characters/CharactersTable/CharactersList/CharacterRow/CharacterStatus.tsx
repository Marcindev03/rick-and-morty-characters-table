import { HStack, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { Character } from "rickmortyapi/dist/interfaces";
import {
  CircleCheckIcon,
  CircleExclamationIcon,
  CircleQuestionIcon,
} from "../../../../../assets";
import { MediumText } from "../../../../common";

type CharacterStatusProps = {
  status: Character["status"];
};

const StatusIcon: FC<CharacterStatusProps> = ({ status }) => {
  const textStyles = {
    fontSize: "sm",
  };

  if (status === "Alive") {
    return (
      <>
        <CircleCheckIcon color="brandGreen.400" />
        <MediumText {...textStyles}>Alive</MediumText>
      </>
    );
  }

  if (status === "Dead") {
    return (
      <>
        <CircleExclamationIcon color="saturatedRed.100" />
        <MediumText {...textStyles}>Dead</MediumText>
      </>
    );
  }

  return (
    <>
      <CircleQuestionIcon color={"secondaryBluePale.40"} />
      <MediumText {...textStyles} color="primaryAnthracite.70">
        unknown
      </MediumText>
    </>
  );
};

export const CharacterStatus: FC<CharacterStatusProps> = ({ status }) => {
  return (
    <HStack>
      <StatusIcon status={status} />
    </HStack>
  );
};
