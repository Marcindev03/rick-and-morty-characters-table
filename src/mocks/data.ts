import { CharacterFilter } from "rickmortyapi/dist/interfaces";
import { Option } from "../types";

export const SPECIES: Option[] = [
  {
    label: "Human",
    value: "human",
  },
  {
    label: "Alien",
    value: "alien",
  },
  {
    label: "Humanoid",
    value: "humanoid",
  },
];

export const DEFAULT_FILTERS: CharacterFilter = {
  page: 1,
  name: "",
  species: "",
};
