import Link from 'next/link';

export const compounds = [
 {slug:'bpc-157', name:'BPC-157', amount:'10MG', price:'$59.99', desc:'Premium research compound listing with documentation and COA access.'},
 {slug:'tb-500', name:'TB-500', amount:'10MG', price:'$59.99', desc:'Research-use compound with professional catalog presentation.'},
 {slug:'ghk-cu', name:'GHK-CU', amount:'50MG', price:'$59.99', desc:'Copper peptide research compound with COA documentation.'},
 {slug:'nad-plus', name:'NAD+', amount:'500MG', price:'$59.99', desc:'Research-use NAD+ listing with transparent documentation.'},
 {slug:'mots-c', name:'MOTS-C', amount:'10MG', price:'$59.99', desc:'Research compound page with product details and COA access.'},
 {slug:'cjc-1295-no-dac', name:'CJC-1295 NO DAC', amount:'10MG', price:'$59.99', desc:'Research-use compound listing with downloadable COA section.'}
];

export function Header(){
 return <header className="header">
  <Link href="/" className="logo"><div className="mark"></div><div className="logo-text">PEPHAUS<span>COMPOUNDS</span></div></Link>
  <nav className="nav">
   <Link href="/">HOME</Link><Link href="/shop">SHOP</Link><Link href="/coas">COA'S</Link><Link href="/about">ABOUT US</Link><Link href="/contact">CONTACT</Link>
  </nav>
 </header>
}
export function Footer(){return <footer className="footer">© 2026 Pephaus Compounds. For research use only. Not for human consumption.</footer>}
export function Vial(){return <div className="vial"></div>}
