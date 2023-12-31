"use client"
import React, { useState, useEffect } from 'react'
import bg1 from "@/public/Reusable/bg1.webp"
import Image from 'next/image'
import Disclaimer from '@/components/TextComponents/Disclaimer'

const DisclaimerTextPage = () => {
    return (
        <div className='min-h-screen'>
            <section className='w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]'>
                <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover  ' src={"/Amusement/hero_background.webp"} alt="bacgkround img" width={2042} height={1029} />
                <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
                    <div className=" h-full w-full flex text-center justify-center items-center ">
                        <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl ">
                            Disclaimer
                        </div>
                    </div>
                </div>
                <div className="w-full h-full absolute flex ">
                    <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-md:hidden">
                        <Image src="/Rides/Ellipse1.webp" width={18} height={18} />
                    </div>
                    <div>
                        <Image src="/Rides/Ellipse2.webp" width={28} height={28} />
                    </div>
                    <div className="absolute bottom-[150px] right-[10rem] max-md:hidden ">
                        <Image src="/Rides/stars.webp" width={68} height={68} />
                    </div>
                    <div className="absolute bottom-[200px] left-[89px] max-xl:bottom-[10vw] max-lg:hidden">
                        <Image
                            src="/Rides/white-shape-banner1.webp"
                            width={141}
                            height={168}

                        />
                    </div>
                    <div className="absolute bottom-[165px] right-8 max-xl:bottom-[8vw] max-lg:hidden">
                        <Image
                            src="/Rides/white-shape-banner2.webp"
                            width={141}
                            height={148}
                        />
                    </div>
                </div>
            </section>
            <Disclaimer />
        </div>
    )
}

export default DisclaimerTextPage