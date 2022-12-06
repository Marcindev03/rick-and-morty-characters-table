import { FC } from "react";
import { Icon, Input, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { CustomInputGroup } from "./CustomInputGroup";

type CustomSearchbarProps = {
  value: string;
  onChange: (text: string) => void;
};

export const CustomSearchbar: FC<CustomSearchbarProps> = ({
  value,
  onChange,
}) => {
  return (
    <CustomInputGroup>
      <Input
        placeholder="Search"
        borderColor="secondaryBluePale.40"
        backgroundColor="primaryWhite.400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <InputRightElement>
        <Icon as={SearchIcon} color="secondaryBluePale.100" />
      </InputRightElement>
    </CustomInputGroup>
  );
};
