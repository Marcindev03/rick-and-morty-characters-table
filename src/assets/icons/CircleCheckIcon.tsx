import { createIcon } from "@chakra-ui/react";

export const CircleCheckIcon = createIcon({
  displayName: "Circle check icon",
  viewBox: "0 0 18 18",
  defaultProps: {
    fill: "none",
  },
  path: (
    <>
      <g clipPath="url(#clip0_528_46)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 12.9764 5.02355 16.2 9 16.2C12.9764 16.2 16.2 12.9764 16.2 9C16.2 5.02355 12.9764 1.8 9 1.8ZM0 9C0 4.02944 4.02944 0 9 0C13.9705 0 18 4.02944 18 9C18 13.9705 13.9705 18 9 18C4.02944 18 0 13.9705 0 9Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.336 6.56359C12.6875 6.91506 12.6875 7.48491 12.336 7.83638L8.73603 11.4364C8.38462 11.7878 7.81473 11.7878 7.46326 11.4364L5.66326 9.63641C5.31179 9.28492 5.31179 8.71505 5.66326 8.36356C6.01473 8.01212 6.58458 8.01212 6.93605 8.36356L8.09966 9.52718L11.0633 6.56359C11.4148 6.21212 11.9846 6.21212 12.336 6.56359Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_528_46">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </>
  ),
});
