import Link from 'next/link';

export const compounds = [
  {slug:'bpc-157', name:'BPC-157', amount:'10MG', price:'$59.99'},
  {slug:'tb-500', name:'TB-500', amount:'10MG', price:'$59.99'},
  {slug:'ghk-cu', name:'GHK-CU', amount:'50MG', price:'$59.99'},
  {slug:'nad-plus', name:'NAD+', amount:'500MG', price:'$59.99'},
  {slug:'mots-c', name:'MOTS-C', amount:'10MG', price:'$59.99'},
  {slug:'cjc-1295-no-dac', name:'CJC-1295 NO DAC', amount:'10MG', price:'$59.99'}
];

export function Header(){
  return <header className="header">
    <Link href="/" className="brand">PEPHAUS<span>COMPOUNDS</span></Link>
    <nav className="nav">
      <Link href="/">HOME</Link>
      <Link href="/shop">SHOP</Link>
      <Link href="/coas">COA'S</Link>
      <Link href="/about">ABOUT US</Link>
      <Link href="/contact">CONTACT</Link>
    </nav>
  </header>
}

export function Footer(){
  return <footer className="footer">© 2026 Pephaus Compounds. For research use only. Not for human consumption.</footer>
}

export function Vial(){
  return <div className="vial"></div>
}
