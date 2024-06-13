interface EmptyArticleListProps {
  text: string;
}

const EmptyArticleList: React.FC<EmptyArticleListProps> = ({ text }) => {
  return <div className="flex text-[#000000] text-lg font-bold">{text}</div>;
};

export default EmptyArticleList;
