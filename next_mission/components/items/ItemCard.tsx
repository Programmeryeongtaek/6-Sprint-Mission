import { Product } from '@/types/productTypes';
import Image from 'next/image';
import Link from 'next/link';
import LikeCount from '../common/LikeCount';

interface ItemCardProps {
  item: Product;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <Link href={`/items/${item.id}`}>
      <div className="relative w-[384px] h-[384px]">
        <Image
          fill
          src={item.images[0]}
          alt={`${item.name} 상품 썸네일`}
          className="absolute"
        />
      </div>
      <div>
        <h2>{item.name}</h2>
        <p>{item.price.toLocaleString()}원</p>
        <LikeCount count={item.favoriteCount} fontSize={12} />
      </div>
    </Link>
  );
};

export default ItemCard;
