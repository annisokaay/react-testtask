import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { asyncGetPosts } from '../../store/reducers/posts-reducer';
import Loader from '../Loader';
import Post from './Post';

const PostsContainer = (props: any) => {
  const { posts, getPosts, isFetching } = props;

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (!posts) return <div>Error</div>;

  return (
    <>
      {!isFetching ? (
        posts.map((post: any) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })
      ) : (
        <Loader />
      )}
    </>
  );
};

export default connect(
  (state: any) => ({
    posts: state.posts.posts,
    isFetching: state.posts.isFetching,
  }),
  (dispatch: any) => ({
    getPosts: () => {
      dispatch(asyncGetPosts());
    },
  })
)(PostsContainer);
