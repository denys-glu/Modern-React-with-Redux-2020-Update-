import React, { useState } from 'react';

const Accordion = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = items.map((item, key) => {
    return <div key={key}>
      <div className={`title ${activeIndex === key ? "active" : ""}`} onClick={() => onTitleClick(key)}>
        <i className="dropdown icon"></i>
        {item.title}

      </div>
      <div className={`content ${activeIndex === key ? "active" : ""}`}>
        <p>
          {item.content}
        </p>
      </div>
    </div>
  })
  
  const onTitleClick = (idx) => {
    setActiveIndex(idx)
  }

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  )
}

export default Accordion
