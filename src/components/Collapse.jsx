// Collapse.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../style/Collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapseToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-title" onClick={handleCollapseToggle}>
        <h3>{title}</h3>
        <div className="collapse-arrow">
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {content}
        </div>
      )}
    </div>
  );
}

export default Collapse;
