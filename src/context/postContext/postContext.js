import { createContext, useState } from "react";

export const PostsContext = createContext();

const PostsContextProvider = props => {
  // modal state for add news
  const [addPostModal, setAddPostModal] = useState(false);

  // state for add news modal animation
  const [addPostAnimation, setAddPostAnimation] = useState(false);

  return (
    <PostsContext.Provider
      value={{
        addPostModal,
        setAddPostModal,
        addPostAnimation,
        setAddPostAnimation
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
