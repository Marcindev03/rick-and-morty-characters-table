import { Box } from "@chakra-ui/react";
import { FC } from "react";

type CharactersContainerProps = {
  children: React.ReactNode;
};

export const CharactersContainer: FC<CharactersContainerProps> = ({
  children,
}) => (
  <Box py="14" px="28">
    {children}
  </Box>
);
