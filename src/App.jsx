import BestPrice from "./components/BestPrice"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ProductsPage from "./components/ProductsPage"


function App() {
  return (
    <>
      <div className='overflow-x-hidden h-[3153px] w-full '>
        <Hero />
        <ProductsPage />
        <BestPrice />
        <Footer />
      </div>
    </>
  )
}

export default App
