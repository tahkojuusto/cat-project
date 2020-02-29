/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export enum Temperament {
  Skittish = "Skittish",
  Outgoing = "Outgoing",
  Dominant = "Dominant",
  Spontaneous = "Spontaneous",
  Friendly = "Friendly",
}


export type ModelBreedFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  temperament?: ModelTemperamentInput | null,
  origin?: ModelStringInput | null,
  and?: Array< ModelBreedFilterInput | null > | null,
  or?: Array< ModelBreedFilterInput | null > | null,
  not?: ModelBreedFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTemperamentInput = {
  eq?: Temperament | null,
  ne?: Temperament | null,
};

export type GetBreedQueryVariables = {
  id: string,
};

export type GetBreedQuery = {
  getBreed:  {
    __typename: "Breed",
    id: string,
    name: string,
    description: string | null,
    temperament: Temperament | null,
    origin: string | null,
  } | null,
};

export type ListBreedsQueryVariables = {
  filter?: ModelBreedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBreedsQuery = {
  listBreeds:  {
    __typename: "ModelBreedConnection",
    items:  Array< {
      __typename: "Breed",
      id: string,
      name: string,
      description: string | null,
      temperament: Temperament | null,
      origin: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};
