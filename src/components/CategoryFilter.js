import React from 'react';
import PropTypes from 'prop-types';
import categories from '../utils/categories';

const CategoryFilter = (props) => {
  const { handleFilterChange } = props;

  return (
    <div className="m-auto w-[1200px] mb-8">
      <select
        name="filterCategory"
        id="filterCategory"
        onChange={handleFilterChange}
      >
        <option key="All" value="All">
          All
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
