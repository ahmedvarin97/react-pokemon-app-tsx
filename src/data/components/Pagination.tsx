// Pagination.tsx
import { useCenterData } from "../actions/DataSource";

export const Pagination = () => {
  const { page, handlePageChange } = useCenterData();

  return (
    <div className="flex flex-row gap-4 items-center justify-center mt-6">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-[#e4e6ef] hover:bg-[#304594] text-[#282828] hover:text-white rounded-full cursor-pointer disabled:opacity-50"
      >
        Prev
      </button>
      <span className="text-[#282828]">Page {page}</span>
      <button
        onClick={() => handlePageChange(page + 1)}
        className="px-4 py-2 bg-[#e4e6ef] hover:bg-[#304594] text-[#282828] hover:text-white rounded-full cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};
