import { Link } from "../../../navigation";

function PaginatorEntry({ page, isCurrentPage }: { page: number; isCurrentPage: boolean }) {
  return (
    <Link href={`/blog/?page=${page}`}>
      <div
        className={`flex h-14 w-14 flex-none items-center justify-center p-4 ${
          isCurrentPage ? "bg-primary" : "bg-darkmode_regular"
        } rounded-md`}
      >
        {page}
      </div>
    </Link>
  );
}

export function BlogPaginator({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  return (
    <div className="flex w-full flex-row flex-wrap justify-center gap-4">
      {Array.from(Array(totalPages)).map((_, i) => {
        const actualPage = i + 1;
        //console.log(`actualPage: ${actualPage}, currentPage: ${currentPage}, isCurrentPage: ${currentPage === actualPage}`);
        return <PaginatorEntry key={actualPage} page={actualPage} isCurrentPage={currentPage === actualPage} />;
      })}
    </div>
  );
}
