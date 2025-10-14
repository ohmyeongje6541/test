import About from "../pages/RootPages/About";

const PATHS = {
  ROOT: {
    //  RootLayout의 기본 경로
    INDEX: "/",
    ABOUT: "/about",
    POSTS: "/posts",
    POST_DETAIL: "/post/:postId",
    PROFILE: "/profile"
  },

  AUTH: {
    INDEX: "/auth",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup"
  }
};

export default PATHS;
