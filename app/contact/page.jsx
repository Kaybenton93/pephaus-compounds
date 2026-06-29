import {Header, Footer} from '../components';
export default function Contact(){
 return <main className="page"><Header/>
  <section className="shell panel" style={{padding:'34px'}}>
   <h1 className="glow-title">CONTACT</h1>
   <p className="muted">Email: info@pephauscompounds.com</p>
   <form className="form">
    <input placeholder="Your Name"/>
    <input placeholder="Your Email"/>
    <textarea placeholder="Message"></textarea>
    <button className="btn" type="button">SEND MESSAGE</button>
   </form>
  </section><Footer/></main>
}
