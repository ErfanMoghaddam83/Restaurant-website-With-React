// MySectionComponent.jsx
import React from 'react';

/* import About from './component/About'; */

const MySectionComponent = React.forwardRef(({ title }, ref) => (
  <div ref={ref}>
    <h2>{title}</h2>
  </div>
));

export default MySectionComponent;
