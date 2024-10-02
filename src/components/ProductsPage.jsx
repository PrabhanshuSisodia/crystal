import crystal from '../assets/fruit.png'

const ProductsPage = () => {
  return (
    <>
          <div className="h-[1084px] w-[1400px] mx-auto bg-slate-50">
              <h1 className="w-full h-[50px] font-bold text-[46px] leading-[50px] text-center text-[#31546D] pt-8">All products</h1>
              <div className="w-[58px] h-[4px] bg-slate-200 mx-auto mt-12"></div>


                <div className="flex justify-between w-[400px] h-[30px] mt-7 ml-6">
                    <div className="w-[169px] h-[30px] ">
                        <h4 className="flex justify-around items-center font-bold text-[16px] leading-[30px]"><span className="text-gray-400">Filter:</span> <span className="text-[#31546D]">  All Products </span> <span className="mt-1 transition-transform duration-200 hover:rotate-180"><svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z" fill="#31546D"/>
                            </svg>
                            </span>
                        </h4>
                    </div>
                
                    <div className="w-[157px] h-[30px] ">
                        <h4 className="flex justify-around items-center font-bold text-[16px] leading-[30px]"><span className="text-gray-400">Sort:</span> <span className="text-[#31546D]"> Best Selling </span> <span className="mt-1 transition-transform duration-200 hover:rotate-180"><svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z" fill="#31546D"/>
                            </svg>
                            </span>
                        </h4>
                    </div>
                </div>
              

          {/* Container for Products */}
        <div className="h-[854px] w-[1340px] mx-auto grid grid-cols-4 gap-4 mt-8">
          {/* Example Product Cards */}
          {Array.from({ length: 8 }, (_, index) => (
            <div
              key={index}
              className="bg-white p-4 border border-gray-200 rounded shadow transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col justify-center items-center"
            >
              <img src={crystal} alt={`Product ${index + 1}`} className="w-[198px] h-[198px] object-cover" />
              <h2 className="text-slate-500 font-normal text-[20px] leading-[24px]">CRYSTAL AGATE PHONE GRIP </h2>
              <p className="text-[#314A6D] font-bold text-[20px] leading-[24px]">18.99$ </p>
              <button className="w-[180px] h-[56px] mt-3 font-bold text-button-hover   border-4 border-button-hover rounded-[18px] hover:bg-button-hover hover:text-white transition duration-200">
                Buy Now
              </button>
            </div>
          ))}
        </div>
                
        </div>
    </>
  )
}

export default ProductsPage
