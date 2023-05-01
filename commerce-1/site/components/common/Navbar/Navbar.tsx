import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container clean className="mx-auto max-w-8xl px-6">
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/" className={s.logo} aria-label="Logo">
            <img style={{ height: 150,backgroundColor:"white" }}src="https://cdn.shopify.com/s/files/1/0614/7840/4319/files/opt_1_250x.png?v=1673795539" />
          </Link>
          {/* <nav className={s.navMenu}>
            <div style={{ display:"flex",justifyContent:"space-evenly"}}>
            <Link href="/" className={s.link} style={{fontSize:"24px",color:"black",}}>
            Home
            </Link>
            <Link href="/" className={s.link} style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>
            Home
            </Link>
            <Link href="/" className={s.link} style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>
            Home
            </Link>
            <Link href="/" className={s.link} style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>
            Home
            </Link>
            <Link href="/" className={s.link} style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>
            Home
            </Link>
            <Link href="/" className={s.link} style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>
            Home
            </Link>
            <Link href="/" className={s.link} style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>
            Home
            </Link>
            <Link href="/" className={s.link} style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>
            Home
            </Link>
            <Link href="/" className={s.link} style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>
            Home
            </Link>
            <Link href="/" className={s.link} style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>
            Home
            </Link>
            <Link href="/search" className={s.link} style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>
             About
            </Link>
            </div>
          </nav> */}
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div>
        )}
        <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
           
        </div>
        
      )}
    </Container>
    <Container clean className="mx-auto max-w-8xl px-6">
       <nav className={s.navMenu}>
            <div style={{ display:"flex",justifyContent:"space-evenly"}}>
            <Link href="/" className={s.link} style={{fontSize:"24px",color:"black",}}>
            Home
            </Link>
            <Link href="/search/stationary" className={s.link} style={{fontSize:"24px",color:"black",}}>
            Stationary
            </Link>
            <Link href="/search/apparel" className={s.link} style={{fontSize:"24px",color:"black",}}>
            Apparel
            </Link>
            <Link href="/search/badge-reel-buddy" className={s.link} style={{fontSize:"24px",color:"black",}}>
            Badge Reel & Buddy
            </Link>
            <Link href="/search/tumblers-cups" className={s.link} style={{fontSize:"24px",color:"black",}}>
            Tumblers/Cups
            </Link>
            <Link href="/search/pens" className={s.link} style={{fontSize:"24px",color:"black",}}>
            Pens
            </Link>
            <Link href="/search/keychains" className={s.link} style={{fontSize:"24px",color:"black",}}>
            Keychains
            </Link>
            <Link href="/search/car-coaster" className={s.link} style={{fontSize:"24px",color:"black",}}>
           Car Coaster
            </Link>
            <Link href="/search/gift-sets" className={s.link} style={{fontSize:"24px",color:"black",}}>
            Gift Sets
            </Link>
            <Link href="/search/custom-orders" className={s.link} style={{fontSize:"24px",color:"black",}}>
            Custom Orders
            </Link>
            <Link href="/about" className={s.link} style={{fontSize:"24px",color:"black",}}>
             About
            </Link>
            </div>
          </nav> 
    </Container>
  </NavbarRoot>
)

export default Navbar
