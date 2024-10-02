import Navbar from './Navbar'
import crystal from '../assets/fruit.png'

const Hero = () => {
  return (
    <>
        <div className="h-[900px] w-[1400px] mx-auto bg-custom-gradient relative">
              <Navbar />
              <div className="absolute bottom-0 right-0 w-full">
                  <svg width="1440" height="604" viewBox="0 0 1440 604" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z" fill="white"/>
                  </svg>
                  
              </div>

              <div className="container py-16 sm:py-0">
                  <div className="flex ">
                      {/* text-content section */}
                      <div className='space-y-7 text-dark order-2 sm:order-1 w-[707px] h-[123px] mt-[210px] ml-[50px] text-white'>
                          <h1 className="font-sans font-normal text-[40px] leading-[65px]">Welcome to <span className="font-bold text-[64px] leading[65px]"><br />Pop Rock Crystal Shop! </span></h1>
                          <p className='w-[400px] h-[72px] text-gray-900 font-normal text-base'>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>
                          <div className="w-[283px] h-[56px] rounded-[18px] flex items-center justify-between">
                              <button className=" w-[180px] h-[56px] bg-white text-[#317189]  rounded-[18px] font-bold text-base">SHOP NOW</button>
                              <h3 className="text-[#317189] ">about us</h3>
                          </div>
                      </div>


                      {/* Image section */}
                      <div className=' z-30 order-1 sm:order-2'>
                          <div className="h-[554px] w-[569px] bg-white rounded-[50px] mt-[100px] ml-[50px] shadow-lg shadow-gray-200 relative">
                              <div className="absolute w-[362px] h-[454px] flex flex-col justify-between items-center ml-[100px] mt-[50px]">
                                  <img src={crystal} alt="" className="w-[362px] h-[362px]"/>
                                  <h3 className="text-gray-600 w-[350px] h-[24px] font-sans font-normal text-[20px] leading-[24px] items-center">CRYSTAL AGATE PHONE GRIP <span className="font-bold text-[20px] leading-[24px] ">- 18.99$</span></h3>
                              </div>
                          </div>

                          
                            <div className="mt-9 ml-48">
                              <svg width="260" height="36" viewBox="0 0 260 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_60)" filter="url(#filter0_d_1_60)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 2C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5L6 23C6 23.7956 6.31607 24.5587 6.87868 25.1213C7.44129 25.6839 8.20435 26 9 26H27C27.7956 26 28.5587 25.6839 29.1213 25.1213C29.6839 24.5587 30 23.7956 30 23V5C30 4.20435 29.6839 3.44129 29.1213 2.87868C28.5587 2.31607 27.7956 2 27 2H9ZM18.531 17.969C18.6718 18.1098 18.7509 18.3008 18.7509 18.5C18.7509 18.6992 18.6718 18.8902 18.531 19.031C18.3902 19.1718 18.1992 19.2509 18 19.2509C17.8008 19.2509 17.6098 19.1718 17.469 19.031L12.969 14.531C12.8992 14.4613 12.8437 14.3786 12.8059 14.2874C12.7681 14.1963 12.7487 14.0987 12.7487 14C12.7487 13.9013 12.7681 13.8037 12.8059 13.7125C12.8437 13.6214 12.8992 13.5387 12.969 13.469L17.469 8.969C17.5387 8.89927 17.6215 8.84395 17.7126 8.80621C17.8037 8.76848 17.9014 8.74905 18 8.74905C18.0986 8.74905 18.1963 8.76848 18.2874 8.80621C18.3785 8.84395 18.4613 8.89927 18.531 8.969C18.6007 9.03873 18.656 9.12152 18.6938 9.21262C18.7315 9.30373 18.7509 9.40138 18.7509 9.5C18.7509 9.59862 18.7315 9.69627 18.6938 9.78738C18.656 9.87848 18.6007 9.96127 18.531 10.031L15.3105 13.25H22.5C22.6989 13.25 22.8897 13.329 23.0303 13.4697C23.171 13.6103 23.25 13.8011 23.25 14C23.25 14.1989 23.171 14.3897 23.0303 14.5303C22.8897 14.671 22.6989 14.75 22.5 14.75H15.3105L18.531 17.969Z" fill="#8A93E5"/>
                                </g>
                                <g clipPath="url(#clip1_1_60)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M257 2C257.796 2 258.559 2.31607 259.121 2.87868C259.684 3.44129 260 4.20435 260 5V23C260 23.7956 259.684 24.5587 259.121 25.1213C258.559 25.6839 257.796 26 257 26H239C238.204 26 237.441 25.6839 236.879 25.1213C236.316 24.5587 236 23.7956 236 23V5C236 4.20435 236.316 3.44129 236.879 2.87868C237.441 2.31607 238.204 2 239 2H257ZM247.469 17.969C247.328 18.1098 247.249 18.3008 247.249 18.5C247.249 18.6992 247.328 18.8902 247.469 19.031C247.61 19.1718 247.801 19.2509 248 19.2509C248.199 19.2509 248.39 19.1718 248.531 19.031L253.031 14.531C253.101 14.4613 253.156 14.3786 253.194 14.2874C253.232 14.1963 253.251 14.0987 253.251 14C253.251 13.9013 253.232 13.8037 253.194 13.7125C253.156 13.6214 253.101 13.5387 253.031 13.469L248.531 8.969C248.461 8.89927 248.378 8.84395 248.287 8.80621C248.196 8.76848 248.099 8.74905 248 8.74905C247.901 8.74905 247.804 8.76848 247.713 8.80621C247.622 8.84395 247.539 8.89927 247.469 8.969C247.399 9.03873 247.344 9.12152 247.306 9.21262C247.268 9.30373 247.249 9.40138 247.249 9.5C247.249 9.59862 247.268 9.69627 247.306 9.78738C247.344 9.87848 247.399 9.96127 247.469 10.031L250.69 13.25H243.5C243.301 13.25 243.11 13.329 242.97 13.4697C242.829 13.6103 242.75 13.8011 242.75 14C242.75 14.1989 242.829 14.3897 242.97 14.5303C243.11 14.671 243.301 14.75 243.5 14.75H250.69L247.469 17.969Z" fill="#8A93E5"/>
                                </g>
                                <circle cx="61" cy="14" r="7" fill="#8A93E5"/>
                                <circle cx="85" cy="14" r="7" fill="#D7DBFF"/>
                                <circle cx="109" cy="14" r="7" fill="#D7DBFF"/>
                                <circle cx="133" cy="14" r="7" fill="#D7DBFF"/>
                                <circle cx="157" cy="14" r="7" fill="#D7DBFF"/>
                                <circle cx="181" cy="14" r="7" fill="#D7DBFF"/>
                                <circle cx="205" cy="14" r="7" fill="#D7DBFF"/>
                                <defs>
                                <filter id="filter0_d_1_60" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="3"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.576471 0 0 0 0 0.898039 0 0 0 0.15 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_60"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_60" result="shape"/>
                                </filter>
                                <clipPath id="clip0_1_60">
                                <rect width="24" height="24" fill="white" transform="translate(6 2)"/>
                                </clipPath>
                                <clipPath id="clip1_1_60">
                                <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 260 2)"/>
                                </clipPath>
                                </defs>
                                </svg>
                          </div>
                          
                          <div className="w-[121px] h-[38px] ml-[-120px] mt-[20px] flex justify-between items-center">
                              <svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 7C13.6906 7 13.3938 7.12291 13.175 7.3417C12.9562 7.5605 12.8333 7.85724 12.8333 8.16666V10.5C12.8333 10.8094 12.9562 11.1062 13.175 11.325C13.3938 11.5437 13.6906 11.6667 14 11.6667C14.3094 11.6667 14.6061 11.5437 14.8249 11.325C15.0437 11.1062 15.1666 10.8094 15.1666 10.5V8.16666C15.1666 7.85724 15.0437 7.5605 14.8249 7.3417C14.6061 7.12291 14.3094 7 14 7ZM14 2.33333C11.834 2.33333 9.75682 3.19374 8.22527 4.72529C6.69373 6.25684 5.83331 8.33406 5.83331 10.5V17.5C5.83331 19.6659 6.69373 21.7432 8.22527 23.2747C9.75682 24.8062 11.834 25.6667 14 25.6667C16.1659 25.6667 18.2431 24.8062 19.7747 23.2747C21.3062 21.7432 22.1666 19.6659 22.1666 17.5V10.5C22.1666 8.33406 21.3062 6.25684 19.7747 4.72529C18.2431 3.19374 16.1659 2.33333 14 2.33333ZM19.8333 17.5C19.8333 19.0471 19.2187 20.5308 18.1248 21.6248C17.0308 22.7187 15.5471 23.3333 14 23.3333C12.4529 23.3333 10.9692 22.7187 9.87519 21.6248C8.78123 20.5308 8.16665 19.0471 8.16665 17.5V10.5C8.16665 8.9529 8.78123 7.46917 9.87519 6.37521C10.9692 5.28124 12.4529 4.66666 14 4.66666C15.5471 4.66666 17.0308 5.28124 18.1248 6.37521C19.2187 7.46917 19.8333 8.9529 19.8333 10.5V17.5Z" fill="#307189"/>
                                <path d="M14.866 36.5C14.4811 37.1667 13.5189 37.1667 13.134 36.5L12.2679 35C11.883 34.3333 12.3642 33.5 13.134 33.5L14.866 33.5C15.6358 33.5 16.117 34.3333 15.7321 35L14.866 36.5Z" fill="#307189"/>
                              </svg>
                              <h4 className="w-[85px] h-[24px] font-medium text-base text-[#307189]">scroll down</h4>

                          </div>
                      </div>
                      
                  </div>
              </div>


            
        </div>
    </>
  )
}

export default Hero
