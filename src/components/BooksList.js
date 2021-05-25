import React from 'react';
import { connect } from 'react-redux';

const BooksList = () => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
  </table>
);

export default connect()(BooksList);
