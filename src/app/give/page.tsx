/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {

    const gallery = ["/Images/01.svg", "/Images/02.svg", "/Images/03.svg", "/Images/04.svg", "/Images/05.svg", "/Images/06.svg", "/Images/07.svg", "/Images/08.svg", "/Images/09.svg", "/Images/10.svg"]

  return (
    <main className=''>

      <div className="banner relative">
        <div className='' >
          <Image className='opacity-50 w-full h-full object-cover' src='/Images/events/events_banner.svg' width={1100} height={500} alt='banner' ></Image>
        </div>

        {/* <div className="absolute inset-0 flex justify-center items-center h-[1440px] ">
          <div>
            <p className='' style={{fontFamily:'Great vibes'}}>Welcome to</p>
            <p>Elyon Life Ministry</p>
            <p>A place to grow in faith, find purpose, and encounter God.</p>
          </div>
        </div> */}

      </div>
            {/* md:pt-[150px] pt-[60px]  */}
      <div className="bg-[#F5F5F5] md:px-30 px-5">
        {/* md:-mt-[150px] -mt-[100px] */}
        <section className=" bg-white w-full rounded-2xl md:p-15 px-2 pt-15 pb-7 text-black md:-mt-[150px] -mt-[100px] z-10 ">
            <div className='mb-15 text-center'>
                <h3>Give Online</h3>
                <p>Every gift is a seed of faith, sown in love, grown by grace.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-4'>
                <div className='md:w-[45%] w-full bg-[#f5f5f5] p-6 rounded-lg'>
                    <div className="flex gap-4 mb-6 items-center">
                        <div className='w-[20px] h-[20px]' >
                            <Image src='/Images/give/UBA.png' alt='' height={100} width={100} className='w-full object-fill' />
                        </div>
                        <p className='font-bold'>United Bank for Africa</p>

                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p>Prince Esshiett</p>
                            <p className='font-bold'>2163691943</p>
                        </div>
                        <Image src='/Images/give/copy-01.png' alt='' width={50} height={50} className='w-[30px] h-[30px]'></Image>
                    </div>
                </div>

                <div className='md:w-[45%] w-full bg-[#f5f5f5] p-6 rounded-lg'>
                    <div className="flex gap-4 mb-6 items-center">
                        <div className='w-[20px] h-[20px]' >
                            <Image src='/Images/give/moniepoint.png' alt='' height={100} width={100} className='w-full object-fill' />
                        </div>
                        <p className='font-bold'>Moniepoint MFB</p>

                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p>Elyon Life Ministry</p>
                            <p className='font-bold'>8038128101</p>
                        </div>
                        <Image src='/Images/give/copy-01.png' alt='' width={50} height={50} className='w-[30px] h-[30px]'></Image>
                    </div>
                </div>
            </div>
        </section>
      </div>
    
      {/* Gallery */}

      <div className="bg-[#F5F5F5]">
        <section className="pt-[150px] px-4">
          <h3
            className="text-center text-3xl font-bold mb-8"
            style={{ fontFamily: 'Merriweather' }}
          >
            Memories
          </h3>

          {/* Masonry for small screens, grid for md and above */}
          <div className="columns-1 sm:columns-2 md:columns-1">
            <div className="hidden md:grid grid-cols-5 gap-4">
              {gallery.map((item, index) => (
                <div key={index} className="aspect-[26/28] w-full">
                  <Image
                    src={item}
                    alt="Gallery"
                    className="w-full h-full object-cover rounded-md shadow"
                    width={260}
                    height={280}
                  />
                </div>
              ))}
            </div>

            <div className="md:hidden space-y-4">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className="break-inside-avoid overflow-hidden rounded-md shadow"
                >
                  <Image
                    src={item}
                    alt="Gallery"
                    width={260}
                    height={280}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-2 bg-black text-white rounded"
              style={{ fontFamily: 'DM Sans' }}
            >
              View more
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Page