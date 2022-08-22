import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// API.interceptors.request.use(
//   (config) => {
//     const user = localStorage.getItem("profile");
//     config.headers = {
//       Authorization: user?.token,
//     };

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export const signIn = (formData) =>
//   API.post("/user/signin", formData).then((res) => {
//     API.interceptors.request.use((req) => {
//       // console.log(res.data.result);
//       // console.log(res.data.token);
//       localStorage.setItem("profile", JSON.stringify(res));
//       if (localStorage.getItem("profile")) {
//         req.headers.Authorization = `Bearer ${
//           JSON.parse(localStorage.getItem("profile")).token
//         }`;
//         return req;
//       }
//     });
//     return res.data.result;
//   });

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );

export const createPosts = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
