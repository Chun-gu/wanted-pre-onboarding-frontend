import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <>
      <h1>로그인</h1>
      <form>
        <label htmlFor="email">이메일</label>
        <input type="text" name="" id="email" />
        <span></span>
        <label htmlFor="password">비밀번호</label>
        <input type="text" name="" id="password" />
        <span></span>
        <button>로그인</button>
      </form>
      <Link to={'/signup'}>회원가입</Link>
    </>
  );
}
