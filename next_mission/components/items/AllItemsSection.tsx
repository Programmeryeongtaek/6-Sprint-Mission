import { useEffect, useState } from 'react';
import Button from '../common/Button';
import Dropdown from '../ui/Dropdown';
import ItemCard from './ItemCard';
import {
  Product,
  ProductListResponse,
  ProductSortOption,
} from '@/types/productTypes';
import useViewport from '@/hooks/useViewport';
import { getProducts } from '@/api/itemApi';

const getPageSize = (width: number) => {
  if (width < 768) {
    return 4;
  } else if (width < 1280) {
    return 6;
  } else {
    return 10;
  }
};

const AllItemsSection = () => {
  const [orderBy, setOrderBy] = useState<ProductSortOption>('recent');
  const [pageSize, setPageSize] = useState<number | null>(null);
  const [itemList, setItemList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const viewportWidth = useViewport();

  useEffect(() => {
    if (viewportWidth === 0) return;

    const newPageSize = getPageSize(viewportWidth);
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
    }
  }, [viewportWidth, pageSize]);

  useEffect(() => {
    if (pageSize === null) return;

    const fetchSortedData = async () => {
      setIsLoading;
      try {
        const data: ProductListResponse = await getProducts({
          orderBy,
          pageSize,
        });
        setItemList(data.list);
      } catch (error) {
        console.error('Error: ', (error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSortedData();
  }, [orderBy, pageSize]);

  return (
    <section className="flex flex-col gap-6 w-[1200px] m-auto">
      <div className="flex">
        <header>판매 중인 상품</header>
        <input type="text" />
        <Button>상품 등록하기</Button>
        <div>드랍다운 컴포넌트</div>
      </div>
      <div className="flex gap-10">
        {itemList?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>

      <div>페이지 네이션</div>
    </section>
  );
};

export default AllItemsSection;
