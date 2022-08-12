import React from 'react';
import { useParams } from 'react-router-dom';

const Menu = () => {
    const params = useParams();

  return (
    <div>
     {params.mode}
    </div>
  );
}

export default Menu;
