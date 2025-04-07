import Image from "next/image";
import React from "react";

const Supplier = () => {
  return (
    <section>
      <div className="text-center">
        <h1 className="text-4xl text-primary uppercase my-8 font-anton">
          The Best Online Fitness Gear Supplier
        </h1>
        <p className="font-rob w-[70%] mx-auto font-oswald font-semibold text-gray-600">
          We’ve equipped top-tier gyms and trainers with premium fitness
          products for over 20 years – now we’re bringing that same quality to
          your doorstep. Every day, we source the best gear from trusted
          manufacturers, then pack and ship it straight to your home. Get your
          gym essentials delivered fast – order today.
        </p>
      </div>

      <section className="flex gap-3 mb-20 mt-10">
        
        <div className="shadow-md rounded-md">
          <div className="w-full overflow-hidden rounded-t-md">
            <Image
            loading="lazy"
              src={"/images/gym-dumbel.jpg"}
              width={400}
              height={240}
              alt="gym dumbbell"
              className="w-full h-72 object-cover rounded-t-md hover:scale-110 transition-all duration-500"
            ></Image>
          </div>
          <div className="bg-blue-100 border-b rounded-b-md p-4 text-center font-anton">
            Shop by Category
          </div>
        </div>
        <div className="shadow-md rounded-md">
          <div className="w-full overflow-hidden rounded-t-md">
            <Image
            loading="lazy"
              src={"/images/delivery.jpg"}
              width={400}
              height={240}
              alt="gym dumbbell"
              className="w-full h-72 object-cover rounded-t-md hover:scale-110 transition-all duration-500"
            ></Image>
          </div>
          <div className="bg-blue-100 border-b rounded-b-md p-4 text-center font-anton">
           Fast Delivery
          </div>
        </div>
        <div className="shadow-md rounded-md">
          <div className="w-full overflow-hidden rounded-t-md">
            <Image
            loading="lazy"
              src={"/images/pros.jpg"}
              width={400}
              height={240}
              alt="gym dumbbell"
              className="w-full h-72 object-cover rounded-t-md hover:scale-110 transition-all duration-500"
            ></Image>
          </div>
          <div className="bg-blue-100 border-b rounded-b-md p-4 text-center font-anton">
            Trusted by Pros
          </div>
        </div>
        
      </section>
    </section>
  );
};

export default Supplier;
