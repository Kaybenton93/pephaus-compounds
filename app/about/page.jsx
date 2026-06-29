import { Header, Footer } from '../components';

export default function About() {
  return <main className="page">
    <Header />
    <section className="shell panel" style={{padding:'34px'}}>
      <h1 className="title">ABOUT US</h1>
      <p className="muted">Pephaus Compounds is committed to premium research-focused presentation, transparency, and professional documentation.</p>
    </section>
    <Footer />
  </main>
}
