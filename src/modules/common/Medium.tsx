import { FC } from "react";
import { TextProps, Text } from "@chakra-ui/react";

export const MediumText: FC<TextProps> = ({ children, ...props }) => (
  <Text fontWeight={"medium"} {...props}>
    {children}
  </Text>
);
