"use client";

import { Pagination } from "antd";
import useParams from "@/hooks/useParams";

type PaginationComponentProps = {
  total: number;
  pageSize?: number;
};

export default function PaginationComponent({
  total,
  pageSize = 10,
}: PaginationComponentProps) {
  const { get, updateSearchParams } = useParams();

  const currentPage = Number(get("page")) || 1;

  const handlePageChange = (page: number) => {
    updateSearchParams({ page: String(page) });

    window.scrollTo({
      top: 3000,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center mt-10">
      <Pagination
        current={currentPage}
        total={total}
        pageSize={pageSize}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </div>
  );
}
