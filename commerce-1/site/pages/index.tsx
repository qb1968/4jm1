import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
      images
    },
    revalidate: 60,
  }
}

const images = [
        "./categories/w.png",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div style={{ display:"flex",justifyContent:"center"}}><h1 style={{ fontSize: "72px"}}>Featured Items</h1></div>
      
       <Slide>
        <div className="each-slide-effect">
                <div>
              <a href='/search/badge-reel-and-buddy'><img src='./categories/w.png' style={{height:380}}/></a> 
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div >
                    <a href='/search/pens'><img src='./categories/jhgtf.png' style={{height:380}}/></a> 
                </div>
            </div>
            <div className="each-slide-effect">
                <div >
                    <a href='/search/apparel'><img src='./categories/soccer.png' style={{height:380}}/></a> 
                </div>
            </div>
        </Slide>
        
        
        
      
     
      <div style={{  marginTop:"10rem",display: "flex", justifyContent: "space-evenly"}}><h1 style={{ fontSize: "72px" }}>Sale Items</h1></div>
    
     <Grid layout="C" variant="filled" >
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              
              alt: product.name,
              width: i === 1 ? 1080 : 450,
              height: i === 1 ? 1080 : 440,
            }}
          />
        ))}
      </Grid>
      <div style={{  marginTop:"10rem",display: "flex", justifyContent: "space-evenly" }}><h1 style={{ fontSize: "72px" }}>Featured Items</h1></div>
    
     <Grid layout="C" variant="filled" >
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              alt: product.name,
              width: i === 1 ? 1080 : 450,
              height: i === 1 ? 1080 : 440,
            }}
          />
        ))}
      </Grid>

      
      {/* <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee> */}
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  )
}

Home.Layout = Layout
