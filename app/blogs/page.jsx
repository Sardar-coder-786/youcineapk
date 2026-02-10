import BlogsClient from "./BlogsClient";
import {meta} from "@/app/seo/metadat"

export const metadata = meta.blogs;

export default function BlogsPage() {
  return <BlogsClient />;
}
