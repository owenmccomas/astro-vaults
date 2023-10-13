import { Item } from '@prisma/client';
import { useSession } from 'next-auth/react';
import React from 'react';
import { InventoryList } from '~/components/Inventory';
import { SiteHeader } from '~/components/header';
import { Layout } from '~/layouts/Layout';
import { api } from '~/utils/api';

const Inventory = ({ items }: { items: Item[] }) => {
  const session = useSession();

  const inventory = api.inventory.getInventory.useQuery({ id: session.data?.user.id! });
  console.log(inventory.data);

  if (inventory.data)
    return (
      <Layout className='bg-gradient-to-br from-astroDark to-black'>
        <SiteHeader />
        <div className='flex flex-col items-center p-4 space-y-4'>
          <h2 className='text-2xl text-center'>
            Welcome to your Inventory, {session.data?.user.name?.split(' ')[0]}
          </h2>

          <InventoryList userItems={inventory.data.items} />
        </div>
      </Layout>
    );
};

export default Inventory;
