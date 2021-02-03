
const ApolloClient = require('apollo-boost').default;
const gql = require('graphql-tag');
const {createHttpLink} = require('apollo-link-http');
const fetch = require('node-fetch');

// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import { onError } from 'apollo-link-error';
// import { ApolloLink } from 'apollo-link';
//
// const client = new ApolloClient({
//   link: ApolloLink.from([
//     onError(({ graphQLErrors, networkError }) => {
//       if (graphQLErrors)
//         graphQLErrors.forEach(({ message, locations, path }) =>
//           console.log(
//             `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//           ),
//         );
//       if (networkError) console.log(`[Network error]: ${networkError}`);
//     }),
//     new HttpLink({
//       uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
//       credentials: 'same-origin'
//     })
//   ]),
//   cache: new InMemoryCache()
// });


const FEES = gql`
  query fees($prove: Boolean) {
    fees(prove: $prove) {
      fees {
        msg_type
        fee
        fee_for
        multi_transfer_fee
        lower_limit_as_multi
      }
      proof {
        root
        proof
      }

    }
  }
`;

const VALIDATORS = gql`
  query validators($prove: Boolean){
    validators(prove: $prove) {
      validators {
        address
        pub_key
        voting_power
        accum
      }
      proof {
        root
        proof
      }
    }
  }
`;


const QUERIES = {
  VALIDATORS,
  FEES
}

const AUDIT = function () {
  return true
};

var link = createHttpLink({
      uri: 'uri',
      fetch: fetch
    })

const GOOD_SUBGRAPH_CONSTRUCTION_VALUES = {
  name: "good-subgraph",
  client_uri: "uri",
  query: QUERIES,
  audit: AUDIT,
}

const BAD_SUBGRAPH_CONSTRUCTION_VALUES = {
  name: "bad-subgraph",
  client: "",
  query: "",
  audit: ""
}


module.exports = {
  QUERIES,
  GOOD_SUBGRAPH_CONSTRUCTION_VALUES,
  BAD_SUBGRAPH_CONSTRUCTION_VALUES
}
