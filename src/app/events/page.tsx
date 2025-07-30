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

      <div className="bg-[#F5F5F5] md:px-20 px-5">
          <div className="md:pt-[150px] pt-[60px] ">

              {/* section 1 */}

              <div className="mb-[200px] px-4 text-center max-w-[1500px] mx-auto">
                <div className="mb-12 text-[#3C4A5A]">
                    <h2 className="md:text-[40px] text-[24px] font-bold mb-4 font-merriweather">
                      Moments of Impact
                    </h2>
                    <h3 className="text-[14px] md:text-lg" style={{ fontFamily: 'DM Sans' }}>
                      We visited charity homes to share love and kindness. <br />
                      Watch the moments we captured.
                    </h3>
                </div>
                <div className=''>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                      {[
                      { img: '/Images/events/moi_01.svg', date: '5th May, 2025' },
                      { img: '/Images/events/moi_02.svg', date: '15th May, 2025' },
                      { img: '/Images/events/moi_03.svg', date: '5th June, 2025' },
                      { img: '/Images/events/moi_04.svg', date: '17th June, 2025' },
                      ].map((item, index) => (
                      <div key={index} className="relative w-full aspect-[26/28] rounded-xl overflow-hidden shadow-md">
                          <Image
                            src={item.img}
                            alt={`MOI_${index + 1}`}
                            fill
                            className="object-cover"
                          />

                          {/* <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black bg-opacity-60 rounded-full p-3">
                              <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              >
                              <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                              </svg>
                          </div>
                          </div>

                          <div className="absolute bottom-2 left-2 text-sm text-white px-2 py-1 rounded-md font-medium">
                          {item.date}
                          </div> */}
                      </div>
                      ))}
                  </div>

                </div>
              </div>

              {/* section 2 */}

              <section className=' text-black max-w-[1500px] mx-auto text-center mb-[200px]'>
                  <div className=''>
                      <h2 className='md:mb-[80px] mb-[30px] md:text-[40px] text-2xl font-bold' style={{fontFamily:'Merriweather'}}>Upcoming Events</h2>
                      <div className='w-full'>
                        <Image src='/Images/events.svg' width={200} height={200} alt='Events' className='w-full object-fill lg:h-[300px] '></Image>  
                      </div>
                  </div>
              </section>

              {/* section3 */}

              <section className=" text-black mx-auto">
                  <div className="flex items-center flex-col-reverse justify-between md:flex-row  max-w-[1500px] bg-white rounded-lg">
                    <div className='flex flex-row md:flex-col gap-0 w-full'>
                      <div className="md:h-[142px] w-full relative">
                        <Image
                          src="/Images/events/giving_01.svg"
                          alt="Prayer session"
                          width={500}
                          height={140}
                          className="object-cover rounded-br-3xl rounded-bl-3xl w-full h-full"
                        />
                      </div>

                      <div className="md:h-[450px] w-full relative">
                        <Image
                          src="/Images/events/giving_02.svg"
                          alt="Prayer session"
                          width={500}
                          height={140}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="md:h-[142px] w-full relative">
                        <Image
                          src="/Images/events/giving_03.svg"
                          alt="Prayer session"
                          width={500}
                          height={140}
                          className="object-cover rounded-tr-3xl rounded-tl-3xl w-full h-full "
                        />
                      </div>

                    </div>
                    
                    <div className="w-full text-black h-full md:pt-[18px] flex flex-col justify-center md:pl-30 md:pr-10 mb-15">
                      <h3 className="mb-8 text-base font-medium uppercase text-[#3C4A5A]" style={{ fontFamily: 'DM Sans' }}>
                          GIVING
                      </h3>

                      <h2 className="mb-8 text-3xl md:text-{44px} font-bold leading-tight" style={{ fontFamily: 'Merriweather' }}>
                          Give from the Heart
                      </h2>

                      <p className="mb-8 text-lg text-[#3C4A5A] leading-relaxed" style={{ fontFamily: 'DM Sans' }}>
                          Every gift makes a difference. Your donation helps us reach more lives, bring smiles to charity homes, and share love where it's needed most. Together, we can do more.
                      </p>

                      <button className="px-6 py-3 bg-[#C83737] text-white rounded-full text-base font-medium w-[20%]" style={{ fontFamily: 'DM Sans', width:'30%' }}>
                          Donate
                      </button>
                    </div>
                  </div>
              </section>
          </div>
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