import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import useAxios from "../hooks/useAxios";
import Skeleton from "./Skeleton";
import Coin from "./Coin";

export default function MarketsUpdate({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const { responce, loading } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );

  const items = useMemo(() => responce || [], [responce]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    setCurrentItems(currentItems);
    setPageCount(pageCount);
  }, [items, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    if (items) {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    }
  };

  if (loading) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    );
  }

  console.log(currentItems);

  return (
    <section id="market" className="wrapper-container scroll-mt-[180px]">
      <h2 className="text-4xl mb-8">Market Update</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 px-4 py-5 uppercase">
        <p>Coin</p>
        <p className="justify-self-end ">Price</p>
        <p className="justify-self-end ">24h</p>
        <p className="justify-self-end hidden sm:block">Market Cap</p>
      </div>

      <div className="border-b-2 border-[#251733]">
        {currentItems &&
          currentItems.map((coin) => <Coin key={coin.id} coin={coin} />)}
      </div>

      <ReactPaginate
        className="flex gap-2 justify-center mt-6"
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </section>
  );
}
