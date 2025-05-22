"use client";
import { useEffect, useRef, useState } from "react";
import { Interacoes } from "./Interacoes";
import { clubooksApi } from "@/app/Service/clubooks-api";
import { Poster } from "@/app/interfaces/Poster";

export default function CardPost() {
  const [data, setData] = useState<Poster[]>([]);
  const [loading, setLoading] = useState(true);
  const skipRef = useRef(0);
  const loaderRef = useRef(null);
  const [hasMore, setHasMore] = useState(true);
  const [errorExist, setErrorExist] = useState(false);

  const handleData = async () => {
    try {
      if (errorExist) {
        return;
      }
      const response = await clubooksApi.getPosters(skipRef.current);
      setLoading(true);

      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...response.data]);
        skipRef.current += 10;
        window.scrollBy({
          top: -15,
          behavior: "auto",
        });
      }
    } catch (error) {
      setErrorExist(true);
      console.error("Error fetching data:", error);
    } finally {
      if (!errorExist) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && !loading && hasMore) {
          handleData();
        }
      },
      { threshold: 0.4 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    const currentLoaderRef = loaderRef.current;
    return () => {
      if (currentLoaderRef) observer.unobserve(currentLoaderRef);
    };
  }, [loading, hasMore]);

  const PostItem = ({ post }: { post: Poster }) => (
    <div className="font-oldStandard">
      <div
        className="h-[0.3px] bg-gray-200 w-[90%] mt-6 mx-auto"
        style={{ backgroundColor: "rgba(156, 163, 175, 0.5)" }}
      ></div>
      <div className="block bg-neutral-800 shadow-secondary-1 dark:bg-surface-dark m-8 mb-0 rounded-none p-4">
        <div className="px-1 py-4">
          <p className="text-gray-300 text-2xl px-8">
            &quot;{post.content || "No content available"}&quot;
            <span className="block text-right text-sm text-gray-400">
              @{post.author?.username || "Anonymous"}
            </span>
            <span className="block text-right text-sm text-gray-400">
              - {post.author?.name || "Unknown Author"}
            </span>
          </p>
          <span className="block text-center text-gray-400 mt-4 ml-0">
            #livro #clubook #aventura
          </span>
        </div>
      </div>
      <div className="flex justify-start ml-7">
        <Interacoes post={post} />
      </div>
    </div>
  );

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
        </div>
      ) : (
        data.map((post) => <PostItem key={post._id} post={post} />)
      )}

      <div ref={loaderRef} style={{ height: "10px" }} />

      {data.length === 0 && !loading && (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-400">Nenhum post encontrado.</p>
        </div>
      )}
    </>
  );
}
