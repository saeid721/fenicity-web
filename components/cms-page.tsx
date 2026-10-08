import { getPage } from '../lib/api';

export async function CmsPage({ slug, fallbackTitle }: { slug: string; fallbackTitle: string }) {
  let page: any = null;
  try { page = (await getPage(slug)).data; } catch {}
  return <section className="container py-10">
    <p className="font-bold text-[#219EBC]">Feni City</p>
    <h1 className="mt-2 text-3xl font-black md:text-4xl">{page?.title || fallbackTitle}</h1>
    {page?.excerpt && <p className="muted mt-3 max-w-3xl">{page.excerpt}</p>}
    <article className="prose prose-slate mt-8 max-w-none whitespace-pre-wrap">{page?.body || 'এই পেজের কনটেন্ট এখনো Admin Panel থেকে প্রকাশিত হয়নি।'}</article>
  </section>;
}
