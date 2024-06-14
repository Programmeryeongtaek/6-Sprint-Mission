import { Product } from '@/types/productTypes';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ItemInfoSection from '@/components/items/ItemInfoSection';
import { useRouter } from 'next/router';
import { getProductDetail } from '@/api/itemApi';

const ItemPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { id } = router.query;

  const productId = Number(id);

  useEffect(() => {
    if (!router.isReady) return;

    async function fetchProduct() {
      if (!productId) {
        setError('상품 정보가 없습니다.');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const data = await getProductDetail(productId);
        if (!data) {
          throw new Error('상품의 데이터를 불러오는 데 실패했습니다.');
        }
        setProduct(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('알 수 없는 에러가 발생했습니다.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [productId, router.isReady]);

  if (error) {
    alert(`Error: ${error}`);
  }

  if (!id || !product) return null;

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="flex flex-col">
        <ItemInfoSection product={product} />
        <hr />
        <div>문의하기 / 댓글 작성</div>
        <div>댓글 부분</div>
        <button>목록으로 돌아가기</button>
      </div>
    </>
  );
};

export default ItemPage;
