import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../apis';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState();

  const canSubmit = isEmailValid && isPasswordValid;

  const navigate = useNavigate();

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

    const { data, error } = await signUp(email, password);
    if (data) {
      alert('가입되었습니다.');
      navigate('/signin');
    } else if (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <h1>회원가입</h1>
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

        <button type="submit" disabled={!canSubmit} data-testid="signup-button">
          회원가입
        </button>
      </form>
      <Link to={'/signin'}>로그인</Link>
    </>
  );
}
