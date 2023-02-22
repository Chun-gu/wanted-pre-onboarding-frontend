import { useState } from 'react';
import { Link } from 'react-router-dom';

import { signIn } from '../apis';
import { AUTH_ACTION } from '../constants';
import { useAuth } from '../hooks';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState();
  const [, dispatch] = useAuth();

  const canSubmit = isEmailValid && isPasswordValid;

  function handleEmailInput({ target: { value } }) {
    const emailPattern = /@/;
    const isEmailValid = emailPattern.test(value);

    setEmail(value);
    setIsEmailValid(isEmailValid);
  }

  function handlePasswordInput({ target: { value } }) {
    const isPasswordValid = value.length >= 8;

    setPassword(value);
    setIsPasswordValid(isPasswordValid);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { isSuccess, data, error } = await signIn(email, password);

    if (isSuccess) {
      localStorage.setItem('token', data.access_token);
      dispatch({ type: AUTH_ACTION.signIn, token: data.access_token });
    } else if (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
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
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordInput}
          data-testid="password-input"
        />
        {isPasswordValid === false && (
          <span>비밀번호는 8자 이상이어야 합니다.</span>
        )}
        <button type="submit" disabled={!canSubmit} data-testid="signin-button">
          로그인
        </button>
      </form>
      <Link to={'/signup'}>회원가입</Link>
    </>
  );
}
