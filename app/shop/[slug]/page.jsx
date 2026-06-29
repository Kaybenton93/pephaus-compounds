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
      <section className="shell panel detail">
        <Vial />
        <div>
          <h1>{p.name}</h1>
          <h2>{p.amount}</h2>
          <p className="price">{p.price}</p>
          <p className="muted">Research-use product listing with documentation and COA access.</p>
          <p className="muted">For research use only. Not for human consumption.</p>
          <Link className="btn" href="/shop">BACK TO SHOP</Link>
          <Link className="btn" href="/coas">VIEW COA</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
