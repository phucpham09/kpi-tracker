import React, { useState } from 'react';
import './selectTimeZone.css';

function SelectTimeZone() {
    const [selected, setSelected] = useState('24h');

  const handleToggle = (value) => {
    setSelected(value);
  };

  return (
    <div className="toggle-container">
      <div 
        className={`toggle-button ${selected === '24h' ? 'active' : ''}`}
        onClick={() => handleToggle('24h')}
      >
        24 Giờ
        {selected === '24h' && <div className="check-mark"></div>}
      </div>
      <div 
        className={`toggle-button ${selected === '12h' ? 'active' : ''}`}
        onClick={() => handleToggle('12h')}
      >
        12 Giờ
        {selected === '12h' && <div className="check-mark"></div>}
      </div>
    </div>
  );
}


export default SelectTimeZone;
