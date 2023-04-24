import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import ThemeSwitcher from '@components/ui/ThemeSwitcher'
import s from './Footer.module.css'
import refund from "../../../../4JM refund policy.pdf"

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName} style={{background:"#D188A3A8"}}>
      <Container>
      
        <div className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-center space-y-4 text-accent-6 text-sm">
          <div>
            <span style={{fontSize:24,display:"flex",justifyContent:"center",color:"black",fontWeight:"bold"}}>&copy; Jonathan Mark Allison 2023</span>
          </div>
          
       
         <div className="flex items-center text-primary text-sm">
            <span className="text-primary">
            <Link href="https://drive.google.com/file/d/1-t-VilATW7jNABpw03ccZawGUxjV7zus/view?usp=sharing" className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24}}>Refund Policy</Link>
             </span>
            
             
            
          </div>
         <div className="flex items-center text-primary text-sm">
            <span className="text-primary">
            <Link href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24}}>Terms of Service</Link>
             </span>
            
             
            
          </div>
         <div className="flex items-center text-primary text-sm">
            <span className="text-primary">
            <Link href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24}}>Privacy Policy</Link>
             </span>
            
             
            
          </div>
         <div className="flex items-center text-primary text-sm">
            <span className="text-primary">
            <Link href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24}}>Shipping Policy</Link>
             </span>
            
             
            
          </div>
        </div>
      </Container>
    </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
