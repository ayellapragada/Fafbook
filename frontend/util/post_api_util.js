export const allPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts'
  });
};

export const getFeed = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/feed/${id}`
  });
};

export const createPost = post => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: { post }
  });
};

export const getPost = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`
  });
};

export const updatePost = post => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post }
  });
};

export const deletePost = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`,
  });
};
