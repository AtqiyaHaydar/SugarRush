// pages/menu.js
import React from 'react';
import MenuCard from './components/menuCard';
import menuItems from './lib/menuItems';

const MenuPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <div className='h-full'>
          <MenuCard
            key={index}
            name={item.name}
            mainImage={item.mainimage}
            iconImage={item.iconimage}
          />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
