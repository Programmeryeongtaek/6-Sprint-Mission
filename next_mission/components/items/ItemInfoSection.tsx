import { Product } from '@/types/productTypes';
import Image from 'next/image';

interface ItemInforSectionProps {
  product: Product;
}

const ItemInfoSection: React.FC<ItemInforSectionProps> = ({ product }) => {
  return (
    <div className="flex gap-6">
      <Image
        width={486}
        height={486}
        src={product.images[0]}
        alt={`${product.name} 상품 대표 사진`}
        className="object-cover"
      />
      <div className="h-[486px] flex flex-col">
        <div className="flex flex-col">
          <h1>{product.name} 팔아요</h1>
          <h2>{product.price.toLocaleString()}원</h2>
        </div>
        <hr />
        <div className="flex flex-col gap-6">
          <h3>상품 소개</h3>
          <p>{product.description}</p>
        </div>

        <div>
          <h3>상품 태그</h3>
          태그
        </div>
        <div>좋아요 버튼</div>
      </div>
    </div>
  );
};

export default ItemInfoSection;
