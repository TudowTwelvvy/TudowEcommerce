import CategoryList from '@/components/CategoryList'
import ProductList from '@/components/ProductList'
import Skeleton from '@/components/Skeleton'
import Slider from '@/components/Slider'
import { WixClientContext } from '@/context/wixContext'
import { wixClientServer } from '@/lib/wixClientServer'
import { Suspense, useContext, useEffect } from 'react'

const HomePage = async () => {
  // TEST (FETCHING ON THE CLIENT COMPONENT)

  /**const wixClient = useContext(WixClientContext)

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find()

      console.log(res)
    }

    getProducts()
  }, [wixClient])**/

  // TEST (FETCHING ON THE SERVER COMPONENT)

  /**const wixClient = await wixClientServer()

  const res = await wixClient.products.queryProducts().find()

  console.log(res)**/

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 ">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>

      <div className="mt-24  ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 mb-12">Categories</h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 ">
        <h1 className="text-2xl">New Products</h1>
        <Suspense>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default HomePage
