import React from 'react';

const WorkItem = ({ item }) => {
  return (
    <div className="work__card">
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="worl__button">
        {item.link} <i className="bx bx-right-arrow-alt work__button-ion"></i>
      </a>
    </div>
  );
}

export default WorkItem;
