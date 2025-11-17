import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  return currPostList;
};

const PostlistProvider = (children) => {
  const [PostList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostlistProvider;
