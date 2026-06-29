import Link from 'next/link';
import { Header, Footer, compounds, Vial } from '../components';

export default function Shop() {
  return (
    <main className="page">
      <Header />
      <section className="shell panel">
        <h1 className="title"><span className="red">SHOP</span> RESEARCH <span className="blue">COMPOUNDS</span></h1>
        <div className="product-grid">
          {compounds.map((c) => (
            <article className="card" key={c.slug}>
              <Vial />
              <h2>{c.name}</h2>
              <p className="amount">{c.amount}</p>
              <p className="price">{c.price}</p>
              <Link className="btn" href={`/shop/${c.slug}`}>VIEW PRODUCT</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="shell panel sidegrid">
        <aside className="side">
          <h3>COMPOUNDS</h3>
          {compounds.map((c) => <Link href={`/shop/${c.slug}`} key={c.slug}>{c.name}<br/><small>{c.amount}</small></Link>)}
        </aside>
        <div className="info">
          <h2><span className="red">COMPOUND</span> DETAILS</h2>
          <p className="muted">Select any compound to view details, COA access, and product information. For research use only. Not for human consumption.</p>
          <Link className="btn" href="/coas">VIEW ALL COA'S</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
