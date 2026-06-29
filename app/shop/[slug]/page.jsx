import Link from 'next/link';
import {Header, Footer, compounds, Vial} from '../../components';

export function generateStaticParams(){return compounds.map(c=>({slug:c.slug}))}

export default function Product({params}){
 const p = compounds.find(c=>c.slug===params.slug) || compounds[0];
 return <main className="page"><Header/>
  <section className="shell panel">
   <Link className="btn" href="/shop">← BACK TO SHOP</Link>
   <div className="detail" style={{marginTop:'24px'}}>
    <Vial/>
    <div>
     <p className="red">RESEARCH COMPOUND</p>
     <h1 className="title">{p.name}</h1>
     <h2>{p.amount}</h2>
     <p className="price">{p.price}</p>
     <p className="muted">Dedicated product page with research-use documentation, COA access, and product details.</p>
     <p className="muted"><b>Disclaimer:</b> For research use only. Not for human consumption.</p>
     <a className="btn" href="/coas">VIEW COA</a>
     <button className="btn">ADD TO CART</button>
    </div>
   </div>
  </section><Footer/></main>
}
