import React from 'react';
import Inventory from "../pages/inventory"; // Import the Inventory component
import { Item } from '../utils/crateLogic';

interface InventoryPageProps {
  items: Item[]; // You can use the Item type from the Inventory component
}

const InventoryPage: React.FC<InventoryPageProps> = ({ items }) => {
  return (
    <div className="inventory-page">
      <h1>Your Inventory</h1>
      <Inventory items={items} /> {/* Pass the items as a prop to the Inventory component */}
    </div>
  );
};

export default InventoryPage;
