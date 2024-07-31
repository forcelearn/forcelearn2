import React from 'react';
import PropTypes from 'prop-types';

const TableOfContents = ({ items }) => {
  return (
    <div className="table-of-contents">
      <h2>Table of Contents</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className={item.tagName === 'H3' ? 'sub-item' : ''}>
              <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

TableOfContents.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      tagName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableOfContents;
