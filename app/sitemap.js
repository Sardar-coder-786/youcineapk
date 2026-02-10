export default async function sitemap() {
  const baseUrl = "https://youcineapk.app";
  const now = new Date();

  // 🔹 Static URLs
  const staticPaths = [
    "",
    "/en",

    "/youcine-apk-for-pc",
    "/en/youcine-apk-for-pc",

    "/youcine-apk-for-tv",
    "/en/youcine-apk-for-tv",

    "/youcine-apk-for-ios",
    "/en/youcine-apk-for-ios",

    "/about-us",
    "/en/about-us",

    "/contact-us",
    "/en/contact-us",

    "/termos-e-condicoes",
    "/politica-de-privacidade",
    "/politica-dmca",
    "/aviso-legal",

    "/blogs",
    "/category/solucoes-e-correcoes",
  ];

  const staticUrls = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" || path === "/en" ? 1.0 : 0.8,
  }));

  // 🔹 BLOGS (future ready — auto add)
  // Jab blogs dynamic ho jaen, yahan se data lao
  const blogs = []; 
  // example:
  // const blogs = [
  //   { slug: "youcine-nao-funciona-como-resolver", updatedAt: "2026-02-01" },
  // ];

  const blogUrls = blogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.updatedAt
      ? new Date(post.updatedAt)
      : now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}
