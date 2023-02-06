import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();

  function handleEmailInput({ target: { value } }) {
    const emailPattern = /@/;
    const isEmailValid = emailPattern.test(value);

    setEmail(value);
    setIsEmailValid(isEmailValid);
  }

  return (
    <>
      <h1>로그인</h1>
      <form>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleEmailInput}
          data-testid="email-input"
        />
        {isEmailValid === false && <span>이메일 형식을 확인해주세요.</span>}

        <label htmlFor="password">비밀번호</label>
        <input type="text" name="" id="password" />
        <span></span>
        <button>로그인</button>
      </form>
      <Link to={'/signup'}>회원가입</Link>
    </>
  );
}
