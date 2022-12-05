import { InputGroup } from "@chakra-ui/react";
import { FC } from "react";

type CustomInputGroupProps = {
  children: React.ReactNode;
};

export const CustomInputGroup: FC<CustomInputGroupProps> = ({ children }) => (
  <InputGroup w="36">{children}</InputGroup>
);
