import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, HStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { cssHideScrollbar } from "../../../styles";
import { PaginationButton } from "./PaginationButton";

type PaginationControlsProps = {
  totalPages: number;
  onPageChange: (pageIndex: number) => void;
};

export const PaginationControls: FC<PaginationControlsProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [...Array(totalPages).keys()].map((value) => value + 1);

  const handlePageChange = (indexPage: number) => {
    if (indexPage > totalPages) {
      return;
    }

    if (indexPage < 1) {
      return;
    }

    setCurrentPage(indexPage);
    onPageChange(indexPage);
  };

  const iconStyles = {
    h: 10,
  };

  return (
    <>
      {totalPages !== 0 ? (
        <Flex w="full" justifyContent={"flex-end"}>
          <HStack mt="12" w="20%">
            <PaginationButton onClick={() => handlePageChange(currentPage - 1)}>
              <ChevronLeftIcon {...iconStyles} />
            </PaginationButton>

            <Flex w="90%" overflow={"auto"} css={cssHideScrollbar}>
              <HStack>
                {pages.map((page) => (
                  <PaginationButton
                    key={page}
                    isActive={page === currentPage}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationButton>
                ))}
              </HStack>
            </Flex>

            <PaginationButton onClick={() => handlePageChange(currentPage + 1)}>
              <ChevronRightIcon {...iconStyles} />
            </PaginationButton>
          </HStack>
        </Flex>
      ) : null}
    </>
  );
};
