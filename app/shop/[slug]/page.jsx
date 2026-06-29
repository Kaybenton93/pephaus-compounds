import Link from 'next/link';
import { Header, Footer, compounds, Vial } from '../../components';

export function generateStaticParams() {
  return compounds.map((c) => ({ slug: c.slug }));
}

export default function Product({ params }) {
  const p = compounds.find((c) => c.slug === params.slug) || compounds[0];

  return (
    <main className="page">
      <Header />
      <section className="shell">
        <div className="panel shop-layout">
          <aside className="sidebar">
            <h3>COMPOUNDS</h3>
            {compounds.map((c) => (
              <Link href={`/shop/${c.slug}`} key={c.slug} className={`compound-link ${c.slug === p.slug ? 'active' : ''}`}>
                {c.name}<small>{c.amount}</small>
              </Link>
            ))}
          </aside>

          <div className="detail-panel">
            <p className="kicker">RESEARCH COMPOUND</p>
            <div className="detail-inner">
              <div className="vial-wrap"><Vial /></div>
              <div>
                <h1 className="product-title">{p.name}</h1>
                <h2 className="amount">{p.amount}</h2>
                <p className="price">{p.price}</p>
                <p className="muted">{p.desc} For research use only. Not for human consumption.</p>
                <Link className="btn" href="/shop">BACK TO SHOP</Link>
                <Link className="btn" href="/coas">VIEW COA</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
