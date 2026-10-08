import { getExternalLinks } from '../lib/api';
import { ExternalLink } from 'lucide-react';

export async function ExternalLinkPage({ title, category, description }: { title: string; category: string; description?: string }) {
  let links: any[] = [];
  try { links = (await getExternalLinks(category)).data || []; } catch {}
  return <section className="container py-10">
    <p className="font-bold text-[#219EBC]">Feni City</p>
    <h1 className="mt-2 text-3xl font-black md:text-4xl">{title}</h1>
    {description && <p className="muted mt-3 max-w-2xl">{description}</p>}
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {links.map(link => <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="card p-6 transition hover:-translate-y-1">
        <div className="mb-4 inline-flex rounded-2xl bg-[#219EBC]/10 p-3 text-[#219EBC]"><ExternalLink size={22}/></div>
        <h2 className="text-lg font-bold">{link.title}</h2>
        {link.description && <p className="muted mt-2 text-sm">{link.description}</p>}
      </a>)}
    </div>
    {!links.length && <div className="card mt-8 p-10 text-center muted">এই মুহূর্তে কোনো লিংক প্রকাশিত হয়নি।</div>}
  </section>;
}
