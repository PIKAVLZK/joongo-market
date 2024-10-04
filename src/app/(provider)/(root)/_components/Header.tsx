import Link from "next/link";
import { PropsWithChildren } from "react";

function Header({ children }: PropsWithChildren) {
  return (
    <>
      <header className=" p-5 border-b border-black flex gap-5 items-center">
        <Link href={"/"}>
          <h1 className="font-bold text-2xl">중고마켓</h1>
        </Link>

        <nav>
          <ul className="flex gap-x-3">
            <li>구입하기</li>
            <li>
              <Link href={"/deals/create"}>판매하기</Link>
            </li>
            <li>내 판매글</li>
          </ul>
        </nav>

        <div className="ml-auto">
          <ul className="flex items-center gap-x-3">
            <li>
              <Link href={"/auth/sign-up"}>회원가입</Link>
            </li>
            <li>로그인</li>
          </ul>
        </div>
      </header>
      {children}
    </>
  );
}

export default Header;
