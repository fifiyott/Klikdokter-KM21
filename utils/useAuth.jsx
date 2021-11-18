import cookie from "cookie";

export function requireAuthentication(gssp) {
  return async (context) => {
    const { req } = context;

    let isLogin = false;

    if (req.headers.cookie) {
      const isTokenCorrect = cookie.parse(req.headers.cookie);

      if (isTokenCorrect.token) {
        isLogin = true;
      } else {
        isLogin = false;
      }
    }

    if (!isLogin) {
      // Redirect to login page
      return {
        redirect: {
          destination: "/",
          statusCode: 302,
        },
      };
    }

    return await gssp(context);
  };
}
