import React, { useState, useEffect } from "react";
import { PostFilter } from "../../components/PostFilter";
import { PostForm } from "../../components/PostForm";
import { PostList } from "../../components/PostList";
import { Button } from "../../../../UI/Button";
import { Modal } from "../../../../UI/Modal";
import { getPostsReq } from "../../../../api/api.posts";
import { Content } from "../../../../UI/LoadingAtom";
import { getPageCount } from "../../../../utils/pages";
import { Pagination } from "../../../../UI/Pagination";
import { usePosts } from "../../hooks/usePosts";

export const Posts = () => {
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const loadPosts = async () => {
    try {
      setLoading(true);
      const response = await getPostsReq(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPage(getPageCount(totalCount, limit));
      setLoading(false);
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    loadPosts();
  }, [page]);
  const sortedAndSearchPost = usePosts(posts, filter.sort, filter.query);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div
      style={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Button onClick={() => setVisible(true)}>Create post</Button>
      <PostFilter filter={filter} setFilter={setFilter} />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Content />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchPost}
          remove={removePost}
          title="Post list"
        />
      )}

      <Modal visible={visible} setVisible={setVisible}>
        <PostForm
          create={createPost}
          remove={removePost}
          setVisible={setVisible}
        />
      </Modal>
      <Pagination setPage={setPage} totalPage={totalPage} page={page} />
    </div>
  );
};
