import { Item, Session } from '@prisma/client';
import { useSession } from 'next-auth/react';
import React from 'react';
import { InventoryList } from '~/components/Inventory';
import { SiteHeader } from '~/components/header';
import { Layout } from '~/layouts/Layout';
import { api } from '~/utils/api';

const Inventory = ({ items }: {items: Item[]}) => {
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

  const session = useSession();

  const inventory = api.inventory.getInventory.useQuery({ id: session.data?.user.id!});
  console.log(inventory.data)

  if(inventory.data) return (
    <Layout className='bg-gradient-to-br from-astroDark to-black'>
      <SiteHeader />
      <h2 className='text-2xl text-center'>Welcome to your Inventory, {session.data?.user.name?.split(' ')[0]}</h2>

      <InventoryList userItems={inventory.data.items} />
    </Layout>
  );
};

export default Inventory;
