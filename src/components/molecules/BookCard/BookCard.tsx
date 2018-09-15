import React from 'react';
import styled from 'styled-components';

import Paper from 'components/atoms/Paper';

import { colors } from '../../../components/tokens';
import { Book } from 'types/globals.types';

interface Props {
  book: Book;
}

const BookCard: React.SFC<Props> = ({ book }) => (
  <Paper>
    <Title>Title: {book.title}</Title>
    <div>ISBN: {book.isbn10}</div>
    <img src={book.thumbnail} alt="" />
  </Paper>
);

const Title = styled.div`
  color: ${colors.text.blue};
`;

export default BookCard;
