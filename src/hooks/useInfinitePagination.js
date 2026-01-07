import { useEffect, useRef, useState } from "react";

/**
 * @param {Function} fetchFn - API function (page, pageSize) => Promise
 * @param {number} pageSize
 */
export default function useInfinitePagination(fetchFn, pageSize = 10) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);

  // Fetch data when page changes
  useEffect(() => {
    loadData();
  }, [page]);

  async function loadData() {
    if (loading) return;
    if (pageCount !== null && page > pageCount) return;

    setLoading(true);

    const res = await fetchFn(page, pageSize);

    setData((prev) => {
      const map = new Map(prev.map((item) => [item.id, item]));
      res.games.forEach((item) => map.set(item.id, item));
      return Array.from(map.values());
    });

    setPageCount(res.pagination.pageCount);

    setLoading(false);
  }

  // Intersection Observer logic
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !loading &&
          (pageCount === null || page < pageCount)
        ) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loading, page, pageCount]);

  return {
    data,
    loading,
    observerRef,
    hasMore: pageCount === null || page < pageCount,
  };
}
