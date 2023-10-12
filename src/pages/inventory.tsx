import React from 'react';

export type Item = {
  name: string;
  rarity: string;
};

interface InventoryProps {
  items: Item[];
}

const Inventory: React.FC<InventoryProps> = ({ items }) => {
  const getColorForRarity = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'text-gray-500';
      case 'uncommon':
        return 'text-green-500';
      case 'rare':
        return 'text-blue-500';
      case 'epic':
        return 'text-purple-500';
      case 'legendary':
        return 'text-yellow-500';
      default:
        return '';
    }
  };

  return (
    <div className="inventory">
      <h2>Your Inventory</h2>
      <ul>
        {items && items.map((item: Item, index: number) => (
          <li key={index}>
            {item.name} - <span className={getColorForRarity(item.rarity)}>{item.rarity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
