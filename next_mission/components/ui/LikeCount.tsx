import HeartIcon from '@/public/images/icons/ic_heart.svg';

interface LickCountProps {
  count: number;
  iconWidth?: number;
  gap?: number;
  fontSize?: number;
  leading?: number;
}

const LikeCount: React.FC<LickCountProps> = ({
  count,
  iconWidth,
  fontSize,
  gap,
  leading,
}) => {
  const displayCount = count >= 10000 ? '9999+' : count.toString();

  return (
    <div className={`flex gap-[${gap}px] items-center text-[#6B7280]`}>
      <div>
        <HeartIcon width={iconWidth} height={iconWidth} alt="좋아요 아이콘" />
      </div>
      <span className={`text-[${fontSize}px] leading-[${leading}px]`}>
        {displayCount}
      </span>
    </div>
  );
};

export default LikeCount;
