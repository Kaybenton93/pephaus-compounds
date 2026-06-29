import { Header, Footer, compounds } from '../components';

export default function Coas() {
  return <main className="page">
    <Header />
    <section className="shell panel" style={{padding:'28px'}}>
      <h1 className="title">CERTIFICATES OF ANALYSIS</h1>
      {compounds.map((c) => (
        <div className="row" key={c.slug}>
          <b>{c.name} {c.amount}</b>
          <a className="btn" href="#">DOWNLOAD COA</a>
        </div>
      ))}
    </section>
    <Footer />
  </main>
}
