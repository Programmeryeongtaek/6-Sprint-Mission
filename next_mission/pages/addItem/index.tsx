import Button from '@/components/common/Button';
import Input from '@/components/ui/Input';
import TagInput from '@/components/ui/TagInput';
import { useState } from 'react';

const addItemPage: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const addTag = (tag: string) => {
    if (!tag.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const isSubmitDisabled = !name || !description || !price || !tags.length;

  return (
    <form className="flex flex-col gap-3" onSubmit={}>
      <header>
        <h1>상품 등록하기</h1>
        <Button href="/" type="submit" disabled={isSubmitDisabled}>
          등록
        </Button>
      </header>

      <Input
        id="name"
        label="상품명"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="상품명을 입력해주세요."
      />

      <Input
        id="description"
        label="상품 소개"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="상품 소개를 입력해주세요"
        isTextArea
      />

      <Input
        id="price"
        label="판매 가격"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="판매 가격을 입력해주세요"
      />

      <TagInput tags={tags} onAddTag={addTag} onRemoveTag={removeTag} />
    </form>
  );
};

export default addItemPage;
