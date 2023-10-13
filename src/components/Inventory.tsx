import { type Item } from "@prisma/client";
import Image from "next/image";

function getColorForRarity(rarity: string) {
  switch (rarity) {
    case "common":
      return "bg-gray-500";
    case "uncommon":
      return "bg-green-500";
    case "rare":
      return "bg-blue-500";
    case "epic":
      return "bg-purple-500";
    case "legendary":
      return "bg-yellow-500";
    default:
      return "bg-gray-500"; // Default to gray for unknown rarities
  }
}

function getTextColorForRarity(rarity: string) {
  switch (rarity) {
    case "common":
      return "text-gray-500";
    case "uncommon":
      return "text-green-500";
    case "rare":
      return "text-blue-500";
    case "epic":
      return "text-purple-500";
    case "legendary":
      return "text-yellow-500";
    default:
      return "text-gray-500"; // Default to gray for unknown rarities
  }
}


export const InventoryList = ({ userItems }: {userItems?: Item[]}) => {

  function compareRarity(a: Item, b: Item) {
    const rarityOrder = {
      "COMMON": 1,
      "UNCOMMON": 2,
      "RARE": 3,
      "EPIC": 4,
      "LEGENDARY": 5,
    };
  
    const rarityA = rarityOrder[a.rarity];
    const rarityB = rarityOrder[b.rarity];
  
    return rarityB - rarityA; // Sort in descending order (from legendary to common)
  }
  
  // Sort the userItems array by rarity
  if(userItems)
  userItems.sort(compareRarity);

    if (userItems ) return (
        <div className="grid grid-cols-4 gap-5 p-10 cursor-pointer">
            {userItems.map((item: Item, index: number) => (
                <InventoryItem key={index} item={item} />
            ))}
        </div>
    );
    else {
      return (
        <>
        <p>Nothing</p>
        </>
      )
    }
};

interface InventoryItemProps {
  item: Item;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ item }) => {
  return (
    <div className={`p-5 aspect-square bg-opacity-10 h-72 rounded-xl transition-colors hover:bg-opacity-80 duration-700 flex flex-col gap-2 justify-center items-center  ${getColorForRarity(item.rarity.toLocaleLowerCase())}`}>
      {item.image && <img className="h-40 w-40 mx-auto rounded-lg" alt={item.name} src={item.image} />}
      <p className="text-white">{item.name}</p>
      <p className={`${getTextColorForRarity(item.rarity)} text-center uppercase`}>{item.rarity}</p>
    </div>
  );
};
