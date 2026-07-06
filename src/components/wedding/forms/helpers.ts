/* eslint-disable prettier/prettier */
import { v5 as uuid } from "uuid";
import { getCurrentInstance } from "vue";

export const DEFAULT_NAMESPACE = import.meta.env.VITE_UUID_DEFAULT_NAMESPACE || "env-not-set";

export enum WEDDING_EVENTS {
  KHMER_CEREMONY = "Cérémonie Cambodgienne",
  CHURCH_CEREMONY = "Cérémonie Eglise",
  CELEBRATION = "Réception Domaine",
  BRUNCH = "Brunch",
}

export enum WEDDING_SCOPES {
  // ALL = "All",
  // KHMER_ONLY = "Khmer only",
  // CHURCH_AND_CELEBRATION = "Church + Celebration",
  // CELEBRATION_AND_BRUNCH = "Celebration + Brunch",
  // CHURCH_AND_CELEBRATION_AND_BRUNCH = "Church + Celebration + Brunch",
  ALL = "7699ef15-5a82-51ee-bc3b-287972dd9ebb",
  KHMER_ONLY = "9d585115-b842-57ac-9b85-b6dfc95f334d",
  CHURCH_AND_CELEBRATION = "0c764e9c-7036-53e5-bffb-049554ba5bcf",
  CELEBRATION_AND_BRUNCH = "ba2cc9cc-6339-537a-9e98-5251be2f5729",
  CHURCH_AND_CELEBRATION_AND_BRUNCH = "04897575-51ac-5590-acfa-16909e20cfd9",
}

export const weddingChoicesEventsMapping: Record<
  WEDDING_SCOPES,
  WEDDING_EVENTS[]
> = {
  [WEDDING_SCOPES.ALL]: [
    WEDDING_EVENTS.KHMER_CEREMONY,
    WEDDING_EVENTS.CHURCH_CEREMONY,
    WEDDING_EVENTS.CELEBRATION,
    WEDDING_EVENTS.BRUNCH,
  ],
  [WEDDING_SCOPES.CHURCH_AND_CELEBRATION]: [
    WEDDING_EVENTS.CHURCH_CEREMONY,
    WEDDING_EVENTS.CELEBRATION,
  ],
  [WEDDING_SCOPES.CELEBRATION_AND_BRUNCH]: [
    WEDDING_EVENTS.CELEBRATION,
    WEDDING_EVENTS.BRUNCH,
  ],
  [WEDDING_SCOPES.CHURCH_AND_CELEBRATION_AND_BRUNCH]: [
    WEDDING_EVENTS.CHURCH_CEREMONY,
    WEDDING_EVENTS.CELEBRATION,
    WEDDING_EVENTS.BRUNCH,
  ],
  [WEDDING_SCOPES.KHMER_ONLY]: [WEDDING_EVENTS.KHMER_CEREMONY],
};

export const weddingEventsIconsMapping: Record<WEDDING_EVENTS, string> = {
  [WEDDING_EVENTS.KHMER_CEREMONY]: "fas fa-praying-hands",
  [WEDDING_EVENTS.CHURCH_CEREMONY]: "fas fa-church",
  [WEDDING_EVENTS.CELEBRATION]: "fas fa-glass-cheers",
  [WEDDING_EVENTS.BRUNCH]: "fa-solid fa-utensils",
};

export const mealPreferences = [
  "Végétarien",
  "Vegan",
  "Sans gluten",
  "Kasher",
  "Pas de porc",
];

////////////////////////////////////////////////////////////////

export const familyListScope_ALL: Record<string, string[]> = {
  // Friends and Family list
  "6cd71050-6335-59d3-a8eb-2361be550579": ["guest1"],
};

export const familyListScope_KHMER_ONLY: Record<string, string[]> = {
  // Friends and Family list
};

export const familyListScope_CHURCH_AND_CELEBRATION: Record<string, string[]> =
  {
    // Friends and Family list
  };

export const familyListScope_CELEBRATION_AND_BRUNCH: Record<string, string[]> =
  {
    // Friends and Family list
  };

export const familyListScope_CHURCH_AND_CELEBRATION_AND_BRUNCH: Record<
  string,
  string[]
> = {
  // Friends and Family list
};

export const scopesFamiliesMapping: Record<
  WEDDING_SCOPES,
  Record<string, string[]>
> = {
  [WEDDING_SCOPES.ALL]: familyListScope_ALL,
  [WEDDING_SCOPES.KHMER_ONLY]: familyListScope_KHMER_ONLY,
  [WEDDING_SCOPES.CHURCH_AND_CELEBRATION]:
    familyListScope_CHURCH_AND_CELEBRATION,
  [WEDDING_SCOPES.CELEBRATION_AND_BRUNCH]:
    familyListScope_CELEBRATION_AND_BRUNCH,
  [WEDDING_SCOPES.CHURCH_AND_CELEBRATION_AND_BRUNCH]:
    familyListScope_CHURCH_AND_CELEBRATION_AND_BRUNCH,
};

////////////////////////////////////////////////////////////////

export const KEY_QUERY_PARAM = "key";

export const generateUniqueUUID = (key: string) => {
  return uuid(key, DEFAULT_NAMESPACE);
};

export const getQueryParam = (key: string): WEDDING_SCOPES | null => {
  const vm = getCurrentInstance();
  if (vm?.proxy?.$route.query) {
    return (vm.proxy.$route.query[key] as WEDDING_SCOPES) ?? null;
  }
  return null;
};
