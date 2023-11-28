/* eslint-disable prettier/prettier */
import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    _id: ID!
    title: String!
    rating: Float!
    year: Int!
  }

  type Query {
    getMovies: [Movie],
    getMovie(id: ID!): Movie!
  }

  input AddMovie {
    title: String!, rating: Float!, year: Int!
    }

  type Mutation {
    createMovie(info: AddMovie): String
  }
`;