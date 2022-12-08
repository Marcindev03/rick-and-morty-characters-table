import { SkeletonCircle, SkeletonText, Td, Tr } from "@chakra-ui/react";
import { FC } from "react";

type SkeletonListProps = {
  noOfRows?: number;
};

export const SkeletonList: FC<SkeletonListProps> = ({ noOfRows = 20 }) => {
  const rows = [...Array(noOfRows).keys()];

  return (
    <>
      {rows.map((key) => (
        <Tr key={`skeleton_list_item${key}`}>
          <Td></Td>
          <Td>
            <SkeletonText />
          </Td>
          <Td>
            <SkeletonCircle />
          </Td>
          <Td>
            <SkeletonText />
          </Td>
          <Td>
            <SkeletonText />
          </Td>
          <Td>
            <SkeletonText />
          </Td>
        </Tr>
      ))}
    </>
  );
};
