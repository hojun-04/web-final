"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

export default function DashboardPage() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading... 페이지 로딩중입니다...</div>;
  }

  if (!isSignedIn) {
    return (
      <div>Sign in to view this page. 이 페이지를 보려면 로그인하세요.</div>
    );
  }
  return (
    <div>
      <h1 className='mb-5'>
        <p>use client 지시자 사용</p>
        <p>브라우저에서 useUser() 함수 이용</p>
        <p>
          Welcome, {user.firstName} {user.lastName}
        </p>
        <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
      </h1>
    </div>
  );
}
