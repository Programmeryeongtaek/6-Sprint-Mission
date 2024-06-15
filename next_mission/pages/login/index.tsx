import Link from 'next/link';
import Logo from '@/public/images/logo/logo.svg';
import Image from 'next/image';
import GoogleIcon from '@/public/images/social/google-logo.png';
import KakaoIcon from '@/public/images/social/kakao-logo.png';
import Input from '@/components/ui/Input';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col items-center">
      <Link href="/" aria-label="홈으로 이동">
        <Logo alt="판다마켓 로고" width="153" />
      </Link>

      <div className="flex flex-col gap-6 w-[640px]">
        <div className="flex flex-col gap-6">
          <Input
            id="email"
            label="이메일"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요"
            gap={10}
          />

          <Input
            id="password"
            label="비밀번호"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
            gap={10}
          />

          <button>로그인</button>
        </div>
        <div className="flex justify-between">
          <span>간편 로그인하기</span>
          <div className="flex gap-4">
            <a href="">
              <Image
                width={42}
                height={42}
                src={GoogleIcon}
                alt="구글 회원가입"
              />
            </a>
            <a href="">
              <Image
                width={42}
                height={42}
                src={KakaoIcon}
                alt="카카오 회원가입"
              />
            </a>
          </div>
        </div>
        <div className="flex gap-6">
          <span>판다마켓이 처음이신가요?</span>
          <Link href="/auth">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
