import { getResource } from '../lib/api';
import { ContentCard } from './content-card';

type Props = { resource: string; title: string; description?: string };

export async function DirectoryPage({ resource, title, description }: Props) {
  let items: any[] = [];
  let error = false;
  try { items = (await getResource(resource)).data || []; } catch { error = true; }
  return <section className="container py-10">
    <p className="section-kicker">FENI CITY DIRECTORY</p>
    <h1 className="mt-2 text-3xl font-black md:text-4xl">{title}</h1>
    {description && <p className="muted mt-3 max-w-2xl">{description}</p>}
    {error ? <div className="card mt-8 p-10 text-center">তথ্য লোড করা সম্ভব হয়নি। কিছুক্ষণ পর আবার চেষ্টা করুন।</div> : items.length ? <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(x => <ContentCard key={x.id} item={x} resource={resource} />)}</div> : <div className="card mt-8 p-10 text-center muted">এই মুহূর্তে কোনো প্রকাশিত তথ্য পাওয়া যায়নি।</div>}
  </section>;
}
