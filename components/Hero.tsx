import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto">
      {/* Navigation bar would go here */}

      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Main content area - takes up 2/3 of the width on large screens */}
        <div className="lg:col-span-2 relative bg-slate-900 min-h-[500px] flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Next Fit"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-8">NextFit</h2>
              {/* <Button variant="outline" className="bg-white text-black hover:bg-gray-200 uppercase font-semibold px-8">
                Shop Now
              </Button> */}
            </div>
          </div>
        </div>

        {/* Sidebar - takes up 1/3 of the width on large screens */}
        <div className="lg:col-span-1 grid grid-rows-2 gap-4">
          {/* Top sidebar section */}
          <div className="relative bg-slate-800 min-h-[240px]">
            <Image
              src="/placeholder.svg?height=240&width=400"
              alt="Oysters"
              width={400}
              height={240}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">£1 Oysters</h2>
              <p className="mb-4">Enjoy at one of our three iconic London restaurants.</p>
              {/* <Button variant="outline" className="bg-white text-black hover:bg-gray-200 uppercase font-semibold">
                Book Now
              </Button> */}
            </div>
          </div>

          {/* Bottom sidebar section */}
          <div className="relative bg-slate-700 min-h-[240px]">
            <Image
              src="/placeholder.svg?height=240&width=400"
              alt="Rewards"
              width={400}
              height={240}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">Spend & Save</h2>
              <p className="mb-4">
                Create a WB rewards account to earn points on every item you buy to redeem on future purchases.
              </p>
              {/* <Button variant="outline" className="bg-white text-black hover:bg-gray-200 uppercase font-semibold">
                Login Now
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Hero