import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
      <h1>회원가입</h1>
      <form>
        <label htmlFor="email">이메일</label>
        <input type="text" name="" id="email" />
        <span></span>
        <label htmlFor="password">비밀번호</label>
        <input type="text" name="" id="password" />
        <span></span>
        <label htmlFor="password-confirm">비밀번호 확인</label>
        <input type="text" name="" id="password-confirm" />
        <span></span>
        <button type="button">회원가입</button>
      </form>
      <Link to={'/signin'}>로그인</Link>
    </>
  );
}
