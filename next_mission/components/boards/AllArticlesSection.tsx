import { Article } from '@/types/articleTypes';
import Button from '../common/Button';
import SearchBar from '../ui/SearchBar';
import { useRouter } from 'next/router';

interface AllArticlesSectionProps {
  initialArticles: Article[];
}

const AllArticlesSection: React.FC<AllArticlesSectionProps> = () => {
  const router = useRouter();

  const handleInputKeyword = (inputKeyword: string) => {
    const query = { ...router.query };
    if (inputKeyword.trim()) {
      query.q = inputKeyword;
    } else {
      delete query.q; // 객체이므로 삭제 가능
    }
    router.replace({
      pathname: router.pathname,
      query,
    });
  };

  return (
    <div className="flex flex-col gap-6 w-[1200px] m-auto">
      <div className="flex justify-between">
        <header>게시글</header>
        <Button>글쓰기</Button>
      </div>

      <div>
        <SearchBar onSearch={handleInputKeyword} />
      </div>
    </div>
  );
};

export default AllArticlesSection;
