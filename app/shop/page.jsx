import Link from 'next/link';
import {Header, Footer, compounds, Vial} from '../components';

export default function Shop(){
 const featured = compounds[0];
 return <main className="page"><Header/>
  <section className="shell">
   <h1 className="glow-title"><span className="red">SHOP</span> RESEARCH <span className="blue">COMPOUNDS</span></h1>
   <div className="shop-layout">
    <aside className="sidebar panel">
     <h3>COMPOUNDS</h3>
     <input className="search" placeholder="Search compounds"/>
     {compounds.map(c=><Link className={`compound-link ${c.slug==='bpc-157'?'active':''}`} href={`/shop/${c.slug}`} key={c.slug}>{c.name}<small>{c.amount}</small></Link>)}
    </aside>
    <div className="detail panel">
     <div className="vial-wrap"><Vial/></div>
     <div>
      <p className="kicker">SELECTED COMPOUND</p>
      <h2 className="product-title">{featured.name}</h2>
      <h3 className="amount">{featured.amount}</h3>
      <p className="price">{featured.price}</p>
      <p className="muted">{featured.desc}</p>
      <p className="muted"><b>Research-use only.</b> Not for human consumption.</p>
      <Link className="btn" href={`/shop/${featured.slug}`}>VIEW PRODUCT</Link>
      <Link className="btn" href="/coas">VIEW COA</Link>
     </div>
    </div>
   </div>
  </section>
  <section className="shell panel" style={{padding:'28px'}}>
   <h2 className="glow-title"><span className="red">ALL</span> RESEARCH <span className="blue">COMPOUNDS</span></h2>
   <div className="product-grid">
    {compounds.map(c=><article className="product-card" key={c.slug}><Vial/><h3>{c.name}</h3><p>{c.amount}</p><p className="price">{c.price}</p><Link className="btn" href={`/shop/${c.slug}`}>VIEW PRODUCT</Link></article>)}
   </div>
  </section>
  <Footer/></main>
}
