// app/seo/posts.js
import { site } from "./site";
import { posts } from "../data/posts";

export function getPostMeta(slug) {
    
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) return null;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${site.domain}/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${site.domain}/${post.slug}`,
      siteName: site.name,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    robots: post.index
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}
