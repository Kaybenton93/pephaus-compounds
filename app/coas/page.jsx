import {Header, Footer, compounds} from '../components';
export default function Coas(){
 return <main className="page"><Header/>
  <section className="shell panel" style={{padding:'34px'}}>
   <h1 className="glow-title">CERTIFICATES OF ANALYSIS</h1>
   <p className="muted">View and download COA documentation for complete transparency.</p>
   {compounds.map(c=><div className="row" key={c.slug}><div><strong>{c.name}</strong><br/><span className="muted">{c.amount}</span></div><a className="btn" href="#">DOWNLOAD COA</a></div>)}
  </section><Footer/></main>
}
