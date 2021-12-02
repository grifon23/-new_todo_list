import { useMemo } from "react";

export const useSortPosts = (posts, sort) => {
  // useMemo кеширує результат виконання функції і використовує його, якщо одна із залежностей змінилася то функція запускається знову
  const sortedPost = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPost;
};
export const usePosts = (posts, sort, query) => {
  const sortedPost = useSortPosts(posts, sort);
  const sortedAndSearchPost = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPost]);
  return sortedAndSearchPost;
};
