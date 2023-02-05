export default function Todo() {
  return (
    <>
      <h1>할 일 목록</h1>
      <form>
        <label htmlFor="todo">할 일 작성</label>
        <input type="text" id="todo" />
        <button type="submit">추가</button>
      </form>
      <ul></ul>
    </>
  );
}
