import Link from 'next/link';
import { Header, Footer, compounds, Vial } from '../components';

export default function Shop() {
  const selected = compounds[0];

  return (
    <main className="page">
      <Header />

      <section className="shell">
        <h1 className="title">
          <span className="red">SHOP</span> RESEARCH <span className="blue">COMPOUNDS</span>
        </h1>

        <div className="panel shop-layout">
          <aside className="sidebar">
            <h3>COMPOUNDS</h3>
            <input className="search" placeholder="Search compounds" />

            {compounds.map((c) => (
              <Link
                href={`/shop/${c.slug}`}
                key={c.slug}
                className={`compound-link ${c.slug === selected.slug ? 'active' : ''}`}
              >
                {c.name}
                <small>{c.amount}</small>
              </Link>
            ))}
          </aside>

          <div className="detail-panel">
            <p className="kicker">SELECTED COMPOUND</p>

            <div className="detail-inner">
              <div className="vial-wrap">
                <Vial />
              </div>

              <div>
                <h1 className="product-title">{selected.name}</h1>
                <h2 className="amount">{selected.amount}</h2>
                <p className="price">{selected.price}</p>

                <p className="muted">
                  {selected.desc} For research use only. Not for human consumption.
                </p>

                <Link className="btn" href={`/shop/${selected.slug}`}>
                  VIEW PRODUCT
                </Link>

                <Link className="btn" href="/coas">
                  VIEW COA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
