import ContactClient from "./ContactClient";
import {meta} from "@/app/seo/metadat"

export const metadata = meta.contact;

export default function BlogsPage() {
  return <ContactClient />;
}
