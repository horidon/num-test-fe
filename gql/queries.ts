import { gql } from '@apollo/client'

export const GET_WORDS = gql`
    query getWords($num: String!) {
        words(num: $num) {
            word
        }
    }
  `
export const GET_MATCH = gql`
    query getMatch($num: String!) {
        matches(num: $num) {
            match
        }
    }
  `