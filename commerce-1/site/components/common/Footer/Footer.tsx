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
import Blank from "./Blank"
import  Image  from "../../../public/assets/opt_1.png"

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
//     <footer className={rootClassName} style={{background:"#D188A3A8"}}>
//       <Container>
      
//         <aside className="pt-6 pb-10 flex flex-col md:flex-row justify-evenly items-center space-y-6 text-accent-6 text-sm"  style={{float:"left"}}>
//           <ul>
       
//         <li>
//             <span className="text-primary">
//                 <Link href={"https://drive.google.com/file/d/1-t-VilATW7jNABpw03ccZawGUxjV7zus/view?usp=sharing"} className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24,fontWeight:"700"}}>Refund Policy</Link>
//              </span>
            
             
            
//           </li>
//          <div className="flex items-center text-primary text-sm">
//             <span className="text-primary">
//             <Link href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24,fontWeight:"700"}}>Terms of Service</Link>
//              </span>
            
             
            
//           </div>
//          <div className="flex items-center text-primary text-sm">
//             <span className="text-primary">
//             <Link href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24,fontWeight:"700"}}>Privacy Policy</Link>
//              </span>
            
             
            
//           </div>
//          <div className="flex items-center text-primary text-sm">
//             <span className="text-primary">
//             <Link href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24,fontWeight:"700"}}>Shipping Policy</Link>
//              </span>
            
             
            
//             </div>
//           </ul>
//         </aside>
//         <aside className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-center space-y-6 text-accent-6 text-sm"
//         style={{float:"right"}}>
//           <ul>
       
//         <li>
//             <span className="text-primary">
//                 <Link href={"https://drive.google.com/file/d/1-t-VilATW7jNABpw03ccZawGUxjV7zus/view?usp=sharing"} className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24,fontWeight:"700"}}>Refund Policy</Link>
//              </span>
            
             
            
//           </li>
//          <div className="flex items-center text-primary text-sm">
//             <span className="text-primary">
//             <Link href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24,fontWeight:"700"}}>Terms of Service</Link>
//              </span>
            
             
            
//           </div>
//          <div className="flex items-center text-primary text-sm">
//             <span className="text-primary">
//             <Link href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24,fontWeight:"700"}}>Privacy Policy</Link>
//              </span>
            
             
            
//           </div>
//          <div className="flex items-center text-primary text-sm">
//             <span className="text-primary">
//             <Link href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150" style={{fontSize:24,fontWeight:"700"}}>Shipping Policy</Link>
//              </span>
            
             
            
//             </div>
//           </ul>
//         </aside>
        
//       </Container>
//       {/* <Container>
        
//           <div>
//             <span style={{fontSize:24,display:"flex",justifyContent:"center",color:"black",fontWeight:"bold"}}>&copy; Jonathan Mark Allison 2023</span>
//           </div>
//       </Container> */}
    
//             <span style={{fontSize:24,display:"flex",justifyContent:"center",color:"black",fontWeight:"bold"}}>&copy; Jonathan Mark Allison 2023</span>
     
//     </footer>
//   )
// }

// function usePages(pages?: Page[]) {
//   const { locale } = useRouter()
//   const sitePages: Page[] = []

//   if (pages) {
//     pages.forEach((page) => {
//       const slug = page.url && getSlug(page.url)
//       if (!slug) return
//       if (locale && !slug.startsWith(`${locale}/`)) return
//       sitePages.push(page)
//     })
//   }

//   return {
//     sitePages: sitePages.sort(bySortOrder),
//   }
// }

// // Sort pages by the sort order assigned in the BC dashboard
// function bySortOrder(a: Page, b: Page) {
//   return (a.sort_order ?? 0) - (b.sort_order ?? 0)
// }

    <footer className={rootClassName} style={{marginTop:"10rem",backgroundColor:"#D188A3A8"}}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accent-2 py-12 text-primary bg-primary transition-colors duration-150">
          <div className="col-span-1 lg:col-span-2">
            <Link
              href="/"
              className="flex flex-initial items-center font-bold md:mr-24"
            >
              <span className="rounded-full border border-accent-6 mr-2">
                
              </span>
             
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-7">
            <div className="grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col">
              {[...links, ...sitePages].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link
                    href={page.url!}
                    style={{fontSize:"24px",color:"black"}}
                    className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150"
                  >
                    {page.name}
                  </Link>
                </span>
              ))}
              <Link href="/about" style={{fontSize:"24px",color:"black"}}>About</Link>
              <Link href="/cart" style={{fontSize:"24px",color:"black"}}>Cart</Link>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 flex items-start lg:justify-end text-primary">
            <div className="col-span-1 lg:col-span-2">
              <ul>
              <li><a href="https://drive.google.com/file/d/1-t-VilATW7jNABpw03ccZawGUxjV7zus/view?usp=sharing" className={s.link} style={{fontSize:"24px",color:"black"}}>Refund Policy</a></li>
              <li><a href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className={s.link} style={{fontSize:"24px",color:"black"}}>Shipping Policy</a></li>
              <li><a href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className={s.link} style={{fontSize:"24px",color:"black"}}>Terms of Service</a></li>
              <li><a href="https://drive.google.com/file/d/1dxLEbrUCiZIeYvXZxj_05OfohwJX2Tkk/view?usp=sharing" className={s.link} style={{fontSize:"24px",color:"black",fontWeight:"500"}}>Privacy Policy</a></li>
             
             
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-10 flex flex-col md:flex-row justify-center items-center space-y-4 text-accent-6 text-sm">
          <div>
            <span style={{fontSize:"20px",color:"black"}}>&copy; 2023 Jonathan Mark Allison, Inc. All rights reserved.</span>
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
