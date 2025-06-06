import React from 'react'
import GetQuote from './GetQuote'
import Image from 'next/image'

const HowItWorks = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-start px-4 sm:px-8 md:px-16 py-12 md:py-20 gap-y-10 md:gap-[91px]">
            {/* Left Section */}
            <div className="w-full md:w-[65%]">
                <h1 className="text-black text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-medium leading-tight tracking-tight">
                    Creating Spaces You’ll Love to Call Home
                </h1>
                <p className="text-black text-base sm:text-lg mt-4 mb-6 max-w-[90%]">
                    We combine industry expertise with a deep understanding of your vision to create a home that reflects your lifestyle, needs, and aspirations. From planning to completion, we make the process smooth and stress-free.
                </p>
                <Image
                    src="/howitworks.png"
                    alt="house-image-2"
                    width={456}
                    height={585}
                    className="w-full"
                />
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[35%]">
                <GetQuote />
            </div>
        </div>
    )
}

export default HowItWorks