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
  {
    label: "unknown",
    value: "unknown",
  },
  {
    label: "Poopybutthole",
    value: "poopybutthole",
  },
  {
    label: "Mythological Creature",
    value: "mythological creature",
  },
  {
    label: "Animal",
    value: "animal",
  },
  {
    label: "Robot",
    value: "robot",
  },
  {
    label: "Cronenberg",
    value: "cronenberg",
  },
  {
    label: "Disease",
    value: "disease",
  },
];

export const DEFAULT_FILTERS: CharacterFilter = {
  page: 1,
  name: "",
  species: "",
};
