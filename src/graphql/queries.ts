// tslint:disable
// this is an auto generated file. This will be overwritten

export const getBreed = /* GraphQL */ `
  query GetBreed($id: ID!) {
    getBreed(id: $id) {
      id
      name
      description
      temperament
      origin
    }
  }
`;
export const listBreeds = /* GraphQL */ `
  query ListBreeds($filter: ModelBreedFilterInput, $limit: Int, $nextToken: String) {
    listBreeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        temperament
        origin
      }
      nextToken
    }
  }
`;
