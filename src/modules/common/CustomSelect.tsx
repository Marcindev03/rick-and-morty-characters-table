import { Select, SelectProps } from "@chakra-ui/react";
import { FC } from "react";
import { CustomInputGroup } from "./CustomInputGroup";
import { Option } from "../../types";

type CustomSelectProps = {
  availableOptions: Option[];
  value: string;
  onChange: (value: string) => void;
} & Omit<SelectProps, "value" | "onChange">;

export const CustomSelect: FC<CustomSelectProps> = ({
  availableOptions,
  value,
  onChange,
  ...props
}) => (
  <CustomInputGroup>
    <Select
      borderColor="secondaryBluePale.40"
      backgroundColor="primaryWhite.400"
      onChange={(e) => onChange(e.target.value)}
      {...props}
    >
      {availableOptions.map(({ label, value }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </Select>
  </CustomInputGroup>
);
