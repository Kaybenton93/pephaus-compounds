import Link from 'next/link';
import {Header, Footer, compounds, Vial} from '../../components';

export function generateStaticParams(){return compounds.map(c=>({slug:c.slug}))}

export default function Product({params}){
 const p = compounds.find(c=>c.slug===params.slug) || compounds[0];
 return <main className="page"><Header/>
  <section className="shell">
   <Link className="btn" href="/shop">← BACK TO SHOP</Link>
   <div className="detail panel" style={{marginTop:'24px'}}>
    <div className="vial-wrap"><Vial/></div>
    <div>
     <p className="kicker">RESEARCH COMPOUND</p>
     <h1 className="product-title">{p.name}</h1>
     <h2 className="amount">{p.amount}</h2>
     <p className="price">{p.price}</p>
     <p className="muted">{p.desc}</p>
     <p className="muted"><b>Storage:</b> Store according to supplier documentation.</p>
     <p className="muted"><b>Disclaimer:</b> For research use only. Not for human consumption.</p>
     <Link className="btn" href="/coas">VIEW COA</Link>
     <button className="btn">ADD TO CART</button>
    </div>
   </div>
  </section><Footer/></main>
}
