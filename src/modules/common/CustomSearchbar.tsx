import { FC } from "react";
import { Icon, Input, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { CustomInputGroup } from "./CustomInputGroup";

type CustomSearchbarProps = {};

export const CustomSearchbar: FC<CustomSearchbarProps> = () => {
  return (
    <CustomInputGroup>
      <Input
        placeholder="Search"
        borderColor="secondaryBluePale.40"
        backgroundColor="primaryWhite.400"
      />
      <InputRightElement>
        <Icon as={SearchIcon} color="secondaryBluePale.100" />
      </InputRightElement>
    </CustomInputGroup>
  );
};
