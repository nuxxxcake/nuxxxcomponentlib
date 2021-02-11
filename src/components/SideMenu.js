import React, { useState } from 'react';
import { Icon } from './index';

export default ({ onIconClick, children, onActive }) => {
  const [active, setActive] = useState(false);

  const handleOnIconClick = () => {
    setActive(!active);
    onActive(!active);
    onIconClick && onIconClick();
  };

  const computedClassName = `side-info ${active ? 'active' : ''} ${children ? '' : 'dnone'}`;

  return (
    <div className={computedClassName}>
      <div className="side-info__main">
        {children}
      </div>
      <div className="side-info__button">
        <Icon iconType="arrow" onClick={handleOnIconClick}/>
      </div>
    </div>
  );
};