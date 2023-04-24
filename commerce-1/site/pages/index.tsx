import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero } from '@components/ui'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

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
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div style={{ height: "300px" ,display:"flex",justifyContent:"center"}}><h1 style={{ fontSize: "72px"}}>FEATURED ITEMS</h1></div>
      <Marquee variant="secondary" >
        
      <a href='/search/pens'><img style={{ width: 375, height: 375 }} src="https://cdn.chec.io/merchants/51390/assets/d9RGU2qZ6Ctkemwx%7Cjhgtf%20(1)%20-%20Copy.png" /></a>
        
       <a href='/search/apparel'> <img style={{ width: 375, height: 375 }} src="https://cdn.chec.io/merchants/51390/assets/qav9dKP9qTjKHGna%7Cmama3.png" /></a>
        
        <a href='/search/badge-reel-buddy'><img style={{ width: 375, height: 375 }} src="https://cdn.chec.io/merchants/51390/assets/iWuxbkecwsqAqKrJ%7Cs.png" /></a>
      <a href='/search/pens'><img style={{ width: 375, height: 375 }} src="https://cdn.chec.io/merchants/51390/assets/d9RGU2qZ6Ctkemwx%7Cjhgtf%20(1)%20-%20Copy.png" /></a>
        
       <a href='/search/apparel'> <img style={{ width: 375, height: 375 }} src="https://cdn.chec.io/merchants/51390/assets/qav9dKP9qTjKHGna%7Cmama3.png" /></a>
        
        <a href='/search/badge-reel-buddy'><img style={{ width: 375, height: 375 }} src="https://cdn.chec.io/merchants/51390/assets/iWuxbkecwsqAqKrJ%7Cs.png" /></a>
        
        
      </Marquee>
     
      <div style={{ height: "100px", display: "flex", justifyContent: "space-evenly",marginTop:"10rem" }}><h1 style={{ fontSize: "72px" }}>SALE ITEMS</h1></div>
    
      <Grid  >
       
      
        
        
         <a> <img src="https://cdn.chec.io/merchants/51390/assets/Vchf4BexaGegmGdl%7Ccandycanesnow.png"/></a>
       
          <a> <img src="https://cdn.chec.io/merchants/51390/assets/FcoqW1wKOeHDSU4C%7Cdfgbn_882ce8cd-bff8-48cc-a4d8-997384fee846%20-%20Copy.png"/></a>
        
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
