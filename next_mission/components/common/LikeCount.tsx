import HeartIcon from '@/public/images/icons/ic_heart.svg';

interface LickCountProps {
  count: number;
  iconWidth?: number;
  gap?: number;
  fontSize?: number;
}

const LikeCount: React.FC<LickCountProps> = ({
  count,
  iconWidth = 16,
  fontSize = 16,
  gap = 4,
}) => {
  const displayCount = count >= 10000 ? '9999+' : count.toString();

  return (
    // Todo : gap, fontSize를 동적으로 표현
    <div className="flex text-base items-center text-[#6B7280]">
      <HeartIcon width={iconWidth} alt="좋아요 아이콘" />
      {displayCount}
    </div>
  );
};

export default LikeCount;
