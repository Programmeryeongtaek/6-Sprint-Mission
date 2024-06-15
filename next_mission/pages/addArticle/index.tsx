const addArticle = () => {
  return (
    <div className="flex flex-col w-[1200px] m-auto">
      <div className="flex justify-between">
        <header>게시글 쓰기</header>
        <button>등록</button>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h3>* 제목</h3>
          <input type="text" placeholder="제목을 입력해주세요" />
        </div>
        <div className="flex flex-col gap-3">
          <h3>* 내용</h3>
          <input type="text" placeholder="제목을 입력해주세요" />
        </div>
        <div className="flex flex-col gap-3">
          <h3>이미지</h3>
          <input type="file" />
        </div>
      </div>
    </div>
  );
};

export default addArticle;
