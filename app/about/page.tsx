'use client';
export default async function About() {
  return (
    <div className="relative">
      <div className="w-full h-[500px] overflow-hidden relative">
        <img
          src="./about/about.jpeg"
          alt="about"
          className="px-10 w-[1600px]"
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">
          About Ganga Paryavaran Solution{' '}
        </h1>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          Ganga Paryavaran Solution is a dynamic environmental initiative
          dedicated to fostering sustainable practices for a greener planet.
          Committed to addressing pressing ecological challenges, we blend
          innovation with community engagement. Our multifaceted approach
          includes pollution mitigation, habitat restoration, and advocating for
          policy reforms. Through educational programs, we empower individuals
          to become stewards of their environment. Paryavaran Solution envisions
          a harmonious coexistence between humanity and nature, working towards
          a resilient, ecologically balanced future. Join us in our journey to
          create positive environmental impact and shape a healthier, more
          sustainable world.
        </p>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          "Ganga Paryavaran Solution: Empowering communities, fostering
          innovation, and advocating for policy change to restore the Water to
          its pristine state. Join us in safeguarding this sacred waterway."
        </p>

        <h2 className="text-center text-4xl  sm:my-10 font-site">Our Goal</h2>
        <p className=" pb-20  mt-0 max-w-3xl text-sm text-center mx-auto">
          At Paryavaran Solution, our water treatment plant is more than just a
          facility; it's a beacon of sustainability and progress. Our primary
          goal is to purify water to the highest standards, ensuring it's safe
          for consumption and environmentally responsible. Through
          state-of-the-art technology and stringent quality control measures, we
          aim to treat wastewater and industrial effluents, mitigating pollution
          and preserving precious water resources. Beyond mere treatment, our
          plant serves as a model for sustainable water management practices,
          promoting circular economy principles and resource efficiency. We
          aspire to minimize our environmental footprint through innovative
          solutions like water reuse and energy recovery. Additionally, our
          plant fosters community engagement and education, raising awareness
          about the importance of water conservation and pollution prevention.
          Ultimately, our goal is to contribute to a cleaner, healthier
          environment and inspire others to follow suit in their water
          management endeavors. Join us in our mission to safeguard water
          resources for future generations.
        </p>
        <div className="flex flex-col sm:flex-row gap-12  h-44 mb-10 justify-between">
          <div className="text-center flex flex-col items-center gap-4">
            <img
              src="./about/water.png"
              alt="water"
              className="h-[100%] mx-10"
            />
          </div>
          <div className="text-center flex flex-col items-center gap-4">
            <img
              src="./about/recycle.png"
              alt="recycle"
              className="h-[100%] mx-10 "
            />
          </div>
          <div className="text-center flex flex-col items-center gap-4">
            <img
              src="./about/planet.png"
              alt="planet"
              className="h-[100%] mx-10"
            />
          </div>
        </div>
      </div>
      {/* Whatsapp section */}
      <div className="flex mt-4">
        <div className="whatsAppContainer">
          <a href="https://wa.me/9572072877">
            <img
              src="./images/whatsapp.png"
              alt="whatsapp"
              className="w-[80px] h-[75px] animate-bounce duration-1 mt-2 pb-1"
            />
          </a>
        </div>
        {/* ================= */}

        {/* phone section */}

        <div className="phonecontainer">
          <a href="tel:95720 72877">
            <img
              src="./images/phone.png"
              alt="phone"
              className="w-[60px] h-[60px] animate-bounce duration-1 md:ml-[1020px] ml-[263px] mt-1  "
            />
          </a>
        </div>
      </div>
      {/* ================= */}
    </div>
  );
}
