export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Only proxy /ppc and all nested paths
    if (url.pathname.startsWith("/ppc")) {
      // Remove /ppc prefix
      const path = url.pathname.replace("/ppc", "");

      // Build target Vercel URL
      const target = new URL("https://tritorc-ppc.vercel.app" + path);
      target.search = url.search; // keep query params

      // Proxy request to Vercel
      return fetch(target.toString(), {
        method: request.method,
        headers: request.headers,
        body: request.method !== "GET" && request.method !== "HEAD"
          ? request.body
          : null
      });
    }

    // Everything else goes to your normal origin
    return fetch(request);
  }
};
