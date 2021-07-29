import React, { Fragment } from 'react';

const BookItem = props => {
  const {book} = props;

  return (
    <Fragment>
      <img src={`https://placeimg.com/150/200/nature?id=${book.id}`} />
    </Fragment>
  );
};

export default BookItem;
