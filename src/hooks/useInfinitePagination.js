import { useEffect, useRef, useState } from "react";

export default function useInfinitePagination(fetchFn, pageSize = 10) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);
  const isFetchingRef = useRef(false);

  // Fetch data
  useEffect(() => {
    loadData();
  }, [page]);

  async function loadData() {
    if (isFetchingRef.current) return;
    if (pageCount !== null && page > pageCount) return;

    isFetchingRef.current = true;
    setLoading(true);

    const res = await fetchFn(page, pageSize);

    setData((prev) => {
      const map = new Map(prev.map((i) => [i.id, i]));
      res.games.forEach((i) => map.set(i.id, i));
      return Array.from(map.values());
    });

    setPageCount(res.pagination.pageCount);

    setLoading(false);
    isFetchingRef.current = false;
  }

  // Infinite scroll observer
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isFetchingRef.current &&
          (pageCount === null || page < pageCount)
        ) {
          setPage((p) => p + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [page, pageCount]);

  return {
    data,
    loading,
    observerRef,
    hasMore: pageCount === null || page < pageCount,
  };
}
