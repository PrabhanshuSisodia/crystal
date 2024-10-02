import crystal from '../assets/fruit.png'

const BestPrice = () => {
  return (
      <>
          <div className="h-[900px] w-[1400px] mx-auto  bg-custom-gradient relative">
              <div className="absolute top-0 left-0 w-full">
                  <svg width="1440" height="900" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M780.5 719.289C996.132 691.392 1205.06 380.14 1440 254.604V-6.10352e-05H0V900C0 900 124.358 896.153 250 817.997C395.056 727.764 564.868 747.186 780.5 719.289Z" fill="white"/>
                    </svg>

              </div>
              <div className="mt-9 ml-[630px] h-full absolute"> 
                   <button className="w-[134px] h-[48px]  text-button-hover   border-2 border-button-hover rounded-[18px] hover:bg-button-hover hover:text-white transition duration-200">View All</button>
              </div>
              
              <div className="flex justify-evenly items-center mt-[150px] ml-[150px] absolute">
                    <div className="w-[542px] h-[444px]  flex flex-col items-end text-right"> {/* Use items-end to align everything to the right */}
                        <div className='w-full h-[123px] text-[#314A6D]'> {/* Use w-full for full width */}
                            <span className='font-normal text-[40px] leading-[65px]'>BEST PRICE</span>
                            <span className='font-bold text-[64px] leading-[65px]'><br />Agate Phone Grip</span>
                        </div>
                        <div className='w-full h-[89px] flex justify-end items-center mt-10'> {/* Ensure items are justified to the end */}
                            <span className='font-normal text-[24px] leading-[30px] text-[#41A0B7] line-through'>44.50$</span>
                            <span className='font-bold text-[70px] leading-[89.4px] text-[#E35B3E]'>19.50$</span>
                        </div>
                        <div className='font-normal text-base text-[#31546D] mt-6 w-full h-[96px]'> {/* Use w-full for full width */}
                            These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
                        </div>
                        <div className="mt-11"> 
                            <button className="w-[180px] h-[50px] text-white rounded-[18px] bg-button-hover">Buy Now</button>
                        </div>
                    </div>

                  <div className="h-[570px] w-[570px] ml-9 bg-white shadow-2xl rounded-full flex items-center justify-center">
                      <div className="h-[364px] w-[364px] bg-white rounded-full shadow-2xl flex items-center justify-center">
                          <img src={crystal} alt="" className="h-[248px] w-[248px] " />
                      </div>
                  </div>
              </div>
          </div>
      
    </>
  )
}

export default BestPrice
