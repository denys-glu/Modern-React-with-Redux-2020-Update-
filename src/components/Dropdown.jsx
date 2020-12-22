import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {

  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const bodyClick = (e) => {
      if(ref.current && ref.current.contains(e.target)) {
        return;
      } else {
        setOpen(false);
      }
    }
    document.body.addEventListener('click', bodyClick);
    return () => {
      document.body.removeEventListener('click', bodyClick);
    }
  }, []);

  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }

    return (
      <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    )
  })

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Selec a color</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ?'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition': ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown
