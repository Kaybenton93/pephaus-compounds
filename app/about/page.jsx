import {Header, Footer} from '../components';
export default function About(){
 return <main className="page"><Header/>
  <section className="shell panel" style={{padding:'34px'}}>
   <h1 className="glow-title">ABOUT PEPHAUS COMPOUNDS</h1>
   <p className="muted">Pephaus Compounds is committed to a premium research-focused presentation with transparency, documentation, and quality-focused branding.</p>
   <div className="feature-strip">
    <div className="feature"><b>LAB TESTED</b><span>Quality Assured</span></div>
    <div className="feature"><b>PREMIUM PURITY</b><span>Research Grade</span></div>
    <div className="feature"><b>COA AVAILABLE</b><span>Transparency</span></div>
    <div className="feature"><b>FAST & DISCREET</b><span>Shipping</span></div>
   </div>
  </section><Footer/></main>
}
