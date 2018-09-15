import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import HomeTemplate from 'components/templates/HomeTemplate';
import BookCard from 'components/molecules/BookCard';

import { Book } from 'types/globals.types';

const SEARCH_BOOKS = gql`
  query SearchBooks($filter: String!) {
    searchBooks(filter: $filter) {
      id
      isbn10
      title
      description
      publishedDate
      thumbnail
    }
  }
`;

const DashboardPage: React.SFC<RouteComponentProps<{}>> = () => (
  <HomeTemplate>
    <h1>Dashboard Page</h1>
    <div>
      <Query
        query={SEARCH_BOOKS}
        fetchPolicy="network-only"
        variables={{ filter: 'Clean code' }}
      >
        {({ data, loading, error }) => {
          if (loading) {
            return <div>Loading...</div>;
          }
          if (error) {
            // tslint:disable-next-line:no-console
            console.log(error.message);

            return `GraphQL Error!`;
          }

          return (
            <Wrapper>
              {data.searchBooks.map((book: Book) => (
                <BookCard key={book.isbn10} book={book} />
              ))}
            </Wrapper>
          );
        }}
      </Query>
    </div>
  </HomeTemplate>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  > div {
    max-width: 320px;
    margin: 16px;
  }
`;

export default DashboardPage;
