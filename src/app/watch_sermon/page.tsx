/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
    const sermons = [
        { title: "God's Grace is Sufficient", date: "5th May, 2025" },
        { title: "God's Grace is Sufficient", date: "6th May, 2025" },
        { title: "God's Grace is Sufficient", date: "8th May, 2025" },
        { title: "God's Grace is Sufficient", date: "9th May, 2025" },
        { title: "God's Grace is Sufficient", date: "5th May, 2025" },
        { title: "God's Grace is Sufficient", date: "6th May, 2025" },
        { title: "God's Grace is Sufficient", date: "8th May, 2025" },
        { title: "God's Grace is Sufficient", date: "9th May, 2025" },
    ]

    const serviceTimes = ["6:30am", "8:00am", "9:30am"]

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
      <div className="bg-[#F5F5F5] md:px-20 px-5">
        <section className="md:pt-[150px] pt-[60px]">
                <div className="text-center mb-12">
                    <p className="text-sm text-blue-600 uppercase tracking-wider mb-2">YOU MIGHT ALSO LIKE</p>
                    <h2 className="text-3xl font-bold text-gray-900">Related Teachings</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {sermons.map((sermon, index) => (
                    <div key={index} className="overflow-hidden">
                        <div className="aspect-[26/28] relative">
                            <Image src="/images/random/watch_sermon.svg" alt="Worship service" fill className="object-cover" />
                        </div>
                        <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{sermon.title}</h3>
                        <p className="text-sm text-gray-600">{sermon.date}</p>
                        </div>
                    </div>
                    ))}
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