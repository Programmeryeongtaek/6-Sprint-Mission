import AllArticlesSection from '@/components/boards/AllArticlesSection';
import BestArticlesSection from '@/components/boards/BestArticlesSection';

export default function BoardsPage() {
  return (
    <div className="flex flex-col p-4 gap-10">
      <BestArticlesSection />
      <AllArticlesSection />
    </div>
  );
}
