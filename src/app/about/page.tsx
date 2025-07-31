/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from 'next/image';
import Link from 'next/link';
import Gallery from '../components/Gallery';

const Page = () => {
    const gallery = ["/Images/01.svg", "/Images/02.svg", "/Images/03.svg", "/Images/04.svg", "/Images/05.svg", "/Images/06.svg", "/Images/07.svg", "/Images/08.svg", "/Images/09.svg", "/Images/10.svg"]

  return (
    <main className=''>

      <div className="banner relative">
        <div className='' >
          <Image className='opacity-50 w-full h-full object-cover' src='/Images/about/banner.svg' width={1100} height={500} alt='banner' ></Image>
        </div>

        {/* <div className="absolute inset-0 flex justify-center items-center h-[1440px] ">
          <div>
            <p className='' style={{fontFamily:'Great vibes'}}>Welcome to</p>
            <p>Elyon Life Ministry</p>
            <p>A place to grow in faith, find purpose, and encounter God.</p>
          </div>
        </div> */}

      </div>

      <div className="bg-[#F5F5F5] md:px-20 px-5 text-[#1A1A1A]">

        <div className="md:pt-[150px] pt-[60px] ">

          {/* section 1 */}

        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1500px] border border-e-amber-500 w-full mx-auto px-4 mb-[140px] gap-8 md:gap-12">
          {/* Left Text Section */}
          <div className="w-full md:w-[60%] text-black">
            <h3 className="mb-2 text-sm font-medium uppercase text-[#3C4A5A] tracking-wider" style={{ fontFamily: 'DM Sans' }}>
              MEET OUR PASTOR
            </h3>

            <h2 className="mb-2 text-3xl md:text-[40px] font-bold leading-tight" style={{ fontFamily: 'Merriweather' }}>
              PRINCE ESSHIETT
            </h2>

            <h3 className="mb-4 font-semibold" style={{ fontFamily: 'DM Sans' }}>
              General Overseer
            </h3>

            <p className="text-base md:text-lg text-[#3C4A5A] leading-relaxed" style={{ fontFamily: 'DM Sans' }}>
                Prince Esshiett is a servant of God who has been in the ministry for a couple of years. He spends his time being used by God to minister to people of all works of life irrespective of age, color, or race etc., in order to effect positive changes in their lives by the power of the Holy Ghost. Being one who has dedicated his life solely to the things of God, he believes in the total positive transformation of man by the power of God, and is passionate about touching lives through charitable works like Jesus did. Apart from being a servant of God, he&rsquo;s also a husband and a father of two.    </p>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-[40%] max-w-[400px] h-auto self-start">
            <div className="p-2">
              <Image
                src="/Images/about/prince.svg"
                width={400}
                height={500}
                alt="Pastor Prince"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>



        

          {/* section2 */}

          <section className=" text-black mx-auto  md:mb-[140px] max-w-[1500px] bg-white rounded-2xl ">
            <div className="flex flex-col justify-between md:flex-row gap-16 mx-auto items-start border border-green-900 ">
              {/* Text Content */}
              <div className="text-left pt-[80px] md:pl-20 md:w-[50%]">
                <h3 className="font-medium text-sm tracking-wider mb-6 text-gray-600" style={{ fontFamily: "DM Sans" }}>
                  WHO ARE WE
                </h3>
                <h2
                  className="font-bold text-[40px] md:text-[48px] leading-[1.1] mb-8 text-gray-900"
                  style={{ fontFamily: "Merriweather" }}
                >
                  Our Story
                </h2>
                <div className="space-y-6 text-[#3C4A5A] md:text-[18px] text-[14px] leading-relaxed font-medium font-sans">
                  <p>
                    A divine movement began in May 2017, geared towards the spiritual emancipation, restoration, and divine
                    awakening of God&rsquo;s people. This movement, also known as Light and Fire Renaissance Commission (LFRC), was
                    used mightily by God to touch lives, save souls, and liberate God&rsquo;s people from all forms of darkness and
                    spiritual captivity.
                  </p>
                  <p>
                    Today, Light and Fire Renaissance Commission has metamorphosed into Elyon Life Ministry, a vision with a
                    greater mandate from God, to take the glorious gospel of Jesus Christ to the ends of the earth and
                    transform lives positively through the victorious light of God.
                  </p>
                  <p>
                    Welcome to Elyon Life Ministry, a place where God lives, a place where the Spirit of God reigns, a place
                    of Power and divine authority, a place of favour, grace and blessings, a place where God&rsquo;s love takes
                    centre stage, and a place of God&rsquo;s light, where darkness is annihilated and the peace of God is enthroned
                    in every aspect of our lives.
                  </p>
                </div>
              </div>

              {/* Image Stack */}
              <div className="flex md:flex-col gap-4 md:w-[250px] w-full border border-amber-600">
                <div className="relative h-[142px] w-full">
                  <Image
                    src="/Images/about/our_story_01.svg?height=140&width=500"
                    alt="Prayer session"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative md:h-[700px] overflow-x-auto w-full">
                  <Image
                    src="/Images/about/our_story_02.svg?height=280&width=500"
                    alt="Speaker at ministry event"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative h-[142px] w-full">
                  <Image
                    src="/Images/about/our_story_03.svg?height=140&width=500"
                    alt="Worship moment"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
      
          {/* section 3 */}

          <section className='text-center m-auto text-black mb-[120px] '>
            <div>
              <h3 className='font-medium text-base mb-4' style={{fontFamily:'Dm sans'}}>LOCATE US</h3>
              <h2 className='font-medium text-2xl mb-8' style={{fontFamily:'Dm sans'}}>Come Experience <br />Elyon Life Ministry</h2>
            </div>

            <div className='w-full'>
              <Image src='/Images/about/experience.svg' alt='Experience' width={200} height={200} className='object-cover'></Image>
            </div>

          </section>

          {/* section 4 */}
          <section className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1500px] m-auto '>
              <div className='flex flex-col h-full justify-center text-black'>
                <h2 className='mb-8 font-medium font-sans text-[12px] md:text-base text-[#3C4A5A]'>GET DIRECTIONS</h2>
                <h3 className='mb-8 font-bold font-merriweather text-[#1A1A1A] md:text-[40px] text-[24px]'>Need help finding us?</h3>
                <p className='font-medium font-sans text-[14px] md:text-[20px] text-[#3C4A5A]'> Use the map to find your way. We’ll be here to welcome you when you arrive!</p>
              </div>
              <div>
                <Image src='/Images/about/map.svg' alt='Map' height={200} width={300} className='object-cover w-full'></Image>
              </div>
            </div>

          </section>

        </div>
      </div>
      
      {/* Gallery */}

      <Gallery />
      


    </main>
  )
}

export default Page