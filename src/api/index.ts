const API = {
  fetchPosts: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return data;
  },
  fetchPictures: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();

    return data;
  },
  fetchProfile: async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    const data = await response.json();

    return data;
  },
};

export default API;
