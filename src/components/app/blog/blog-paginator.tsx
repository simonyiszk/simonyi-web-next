import Link from 'next/link';

function PaginatorEntry({ page, isCurrentPage }: { page: number; isCurrentPage: boolean }) {
  return (
    <Link href={`/blog/?page=${page}`}>
      <div
        className={`flex-none w-14 h-14 p-4 flex items-center justify-center ${
          isCurrentPage ? 'bg-simonyi_zold' : 'bg-darkmode_regular'
        } rounded-md`}
      >
        {page}
      </div>
    </Link>
  );
}

export function BlogPaginator({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-4 w-full">
      {Array.from(Array(totalPages)).map((_, i) => {
        const actualPage = i + 1;
        //console.log(`actualPage: ${actualPage}, currentPage: ${currentPage}, isCurrentPage: ${currentPage === actualPage}`);
        return <PaginatorEntry key={actualPage} page={actualPage} isCurrentPage={currentPage === actualPage} />;
      })}
    </div>
  );
}
