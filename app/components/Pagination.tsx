"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    return `${pathname}?${params.toString()}`;
  }

  return (
    <nav
      aria-label='Pagination'
      className='flex justify-between items-center py-6 mt-8 w-full max-w-lg mx-auto'
    >
      {/* 1. 왼쪽 버튼 영역 (고정 너비 확보로 좌우 대칭 유지) */}
      <div className='flex justify-start w-28'>
        {currentPage > 1 && (
          <Link
            href={createPageURL(currentPage - 1)}
            className='px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm'
          >
            Previous
          </Link>
        )}
      </div>

      {/* 2. 중앙 페이지 표시 (어떤 상황에서도 완벽한 정중앙 배치) */}
      <span className='text-sm text-gray-500 font-medium select-none'>
        <span className='text-gray-950 font-semibold'>{currentPage}</span>
        <span className='mx-1.5 text-gray-300'>/</span>
        <span className='text-gray-950 font-semibold'>{totalPages}</span>
      </span>

      {/* 3. 오른쪽 버튼 영역 (고정 너비 확보로 좌우 대칭 유지) */}
      <div className='flex justify-end w-28'>
        {currentPage < totalPages && (
          <Link
            href={createPageURL(currentPage + 1)}
            className='px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm'
          >
            Next
          </Link>
        )}
      </div>
    </nav>
  );
}
