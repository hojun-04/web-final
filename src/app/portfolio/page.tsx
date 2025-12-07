import React from "react";
import Link from "next/link";

const PortfolioPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-white text-black flex flex-col items-center px-6 py-16'>
      {/* 소개 */}
      <section className='max-w-3xl text-center mb-12'>
        <h1 className='text-4xl font-bold mb-4 text-red-400'>
          안녕하세요, 정호준입니다
        </h1>
        <p className='text-lg leading-relaxed mb-6'>
          23학번이고, 이번년도에 복학했습니다.
        </p>
      </section>

      {/* 프로젝트 섹션 */}
      <section className='max-w-5xl w-full'>
        <h2 className='text-2xl font-bold mb-8 text-center border-b border-black pb-3'>
          💻 내가 만든 웹 프로젝트
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {/* 프로젝트 박스 1 */}
          <Link
            href='https://clerk-app-lbjc.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gray-100 rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-2 hover:bg-gray-200 hover:shadow-2xl transition-all duration-300'
          >
            <h3 className='text-xl font-semibold mb-2 text-red-500'>클러커</h3>
            <p className='text-gray-700 text-sm'>
              중간고사 전 만들었던 웹입니다
            </p>
          </Link>

          {/* 프로젝트 박스 2 */}
          <Link
            href='https://webteam-final-qby5.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gray-100 rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-2 hover:bg-gray-200 hover:shadow-2xl transition-all duration-300'
          >
            <h3 className='text-xl font-semibold mb-2 text-red-500'>
              1학기 기말 팀페이지
            </h3>
            <p className='text-gray-700 text-sm'>
              활용부분의 코드들을 만들었습니다.
            </p>
          </Link>

          {/* 프로젝트 박스 3 */}
          <Link
            href='https://final-orpin-kappa-81.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gray-100 rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-2 hover:bg-gray-200 hover:shadow-2xl transition-all duration-300'
          >
            <h3 className='text-xl font-semibold mb-2 text-red-500'>
              To-Do List, 포트폴리오
            </h3>
            <p className='text-gray-700 text-sm'>
              1학기말 투두리스트와 포트폴리오 페이지입니다.
            </p>
          </Link>
        </div>
      </section>

      {/* 🧑‍💻 GitHub 주소 섹션 */}
      <footer className='mt-16 text-center text-gray-600'>
        <p className='text-sm'>© 2025 정호준. All rights reserved.</p>
        <a
          href='https://github.com/hojun-04'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mt-2 text-red-500 hover:text-red-600 font-medium transition-colors duration-200'
        >
          🌐 github.com/hojun-04
        </a>
      </footer>
    </div>
  );
};

export default PortfolioPage;
