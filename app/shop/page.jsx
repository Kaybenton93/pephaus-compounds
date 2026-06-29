import Link from 'next/link';
import {Header, Footer, compounds, Vial} from '../components';

export default function Shop(){
 const featured = compounds[0];
 return <main className="page"><Header/>
  <section className="shell panel">
   <h1 className="title"><span className="red">SHOP</span> RESEARCH <span className="blue">COMPOUNDS</span></h1>
   <div className="shop-layout">
    <aside className="sidebar">
     <h3>COMPOUNDS</h3>
     {compounds.map(c=><Link href={`/shop/${c.slug}`} key={c.slug}>{c.name}<br/><small>{c.amount}</small></Link>)}
    </aside>
    <div className="detail">
     <Vial/>
     <div>
      <p className="red">SELECTED COMPOUND</p>
      <h2>{featured.name}</h2>
      <h3>{featured.amount}</h3>
      <p className="price">{featured.price}</p>
      <p className="muted">Research-use catalog listing with product documentation and COA access.</p>
      <Link className="btn" href={`/shop/${featured.slug}`}>VIEW PRODUCT</Link>
      <a className="btn" href="/coas">VIEW COA</a>
     </div>
    </div>
   </div>
  </section>
  <section className="shell panel">
   <h2 className="title">ALL PRODUCTS</h2>
   <div className="grid">{compounds.map(c=><article className="card" key={c.slug}><Vial/><h2>{c.name}</h2><p>{c.amount}</p><p className="price">{c.price}</p><Link className="btn" href={`/shop/${c.slug}`}>VIEW PRODUCT</Link></article>)}</div>
  </section>
  <Footer/></main>
}
