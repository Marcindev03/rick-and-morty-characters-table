import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

type PaginationButtonProps = {
  isActive?: boolean;
} & ButtonProps;

export const PaginationButton: FC<PaginationButtonProps> = ({
  isActive,
  children,
  ...props
}) => {
  const commonButtonStyles = {
    borderWidth: "1px",
    borderColor: "secondaryBluePale.40",
    shadow: "md",
    fontWeight: "500",
    color: "primaryAnthracite.80",
  };

  const buttonStyles: ButtonProps = {
    ...commonButtonStyles,
    backgroundColor: "primaryWhite.400",
  };

  const activeButtonStyles: ButtonProps = {
    ...commonButtonStyles,
    backgroundColor: "secondaryBluePale.10",
  };

  const buttonProps = isActive ? activeButtonStyles : buttonStyles;

  return (
    <Button w="10" {...props} {...buttonProps}>
      {children}
    </Button>
  );
};
