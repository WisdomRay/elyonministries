/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from 'next/image';
import Link from 'next/link';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const Page = () => {
    const services = [
      {
        title: "Sunday Worship Service",
        image: "/Images/sunday_service.svg",
      },
      {
        title: "Healing and Deliverance Service",
        image: "/Images/healing_service.svg",
      },
      {
        title: "Communion Service",
        image: "/Images/communion_service.svg",
      },
    ];
    const stories = [
      {
        name: "Johnny Wills",
        text: "I came to Elyon Life Ministry feeling depressed, fearful, and lost. Through the love, worship, and teachings at the church, God healed her, restored her sense of purpose, and empowered her to live in freedom and serve others.",
      },
      {
        name: "Esther James",
        text: "I came to Elyon Life Ministry feeling depressed, fearful, and lost. Through the love, worship, and teachings at the church, God healed her, restored her sense of purpose, and empowered her to live in freedom and serve others.",
      },
      {
        name: "Johnny Wills",
        text: "I came to Elyon Life Ministry feeling depressed, fearful, and lost. Through the love, worship, and teachings at the church, God healed her, restored her sense of purpose, and empowered her to live in freedom and serve others.",
      },
    ];

  return (
    <main className=''>

        <div className="banner relative">
          <div className='' >
            <Image className='opacity-50 w-full h-full object-cover' src='/Images/demo_banner.svg' width={1100} height={500} alt='banner' ></Image>
          </div>

          {/* <div className="absolute inset-0 flex justify-center items-center h-[1440px] ">
            <div>
              <p className='' style={{fontFamily:'Great vibes'}}>Welcome to</p>
              <p>Elyon Life Ministry</p>
              <p>A place to grow in faith, find purpose, and encounter God.</p>
            </div>
          </div> */}

        </div>
      <div className="bg-[#F5F5F5] md:px-10 p-2 text-[#1A1A1A]">

        <div className="md:pt-[150px] pt-[60px]">

          {/* section 1 */}

          <div className="flex flex-col-reverse gap-5 md:flex-row items-stretch justify-between mb-[140px]">
            {/* Left Image Section */}
            <div className="md:w-1/2 w-full">
              <Image
                src="/Images/love.svg"
                width={600}
                height={400}
                alt="love"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Right Text Section */}
            <div className="md:w-1/2 w-full py-6 text-black flex flex-col justify-center">
              <div>
                <h3 className="mb-4 text-sm md:text-base font-medium uppercase text-[#3C4A5A] font-sans">
                  Our Mission
                </h3>

                <h2 className="mb-4 text-2xl md:text-[44px] font-bold font-merriweather sharing">
                  Sharing God&rsquo;s Love <br />and Changing Lives
                </h2>

                <p className="mb-6 text-base md:text-lg text-[#3C4A5A] font-sans">
                  Since 1997, God has been the author of our journey, guiding us to reach the lost, transform lives through the power of the Gospel, and raise faithful disciples for Christ across the globe.
                </p>

                <button className="px-6 py-3 bg-[#C83737] text-white rounded-full text-sm md:text-[18px] font-medium font-sans">
                  Read more
                </button>
              </div>
            </div>
          </div>

        

          {/* section2 */}

          <div className='text-center mb-[140px] font-sans px-8 text-pre-line'>
            <p className='md:text-[28px] text-[16px] font-semibold text-black mb-[12px]'>“And they that shall be of thee shall build the old waste places: thou shalt raise up the foundations of many generations; and thou shalt be called, The repairer of the breach, The restorer of paths to dwell in.”</p>
            <p className='md:text-2xl text-[16px] text-[#C83737] '>— Isaiah 58:12 (KJV)</p>
          </div>

          {/* section 3 */}

          <section className='bg-[#fff] text-center m-auto text-black pt-[80px] pb-[80px] mb-[100px] rounded-2xl'>
            <h3 className='font-medium mb:text-base text-[12px] md:mb-8 mb-5 font-sans'>FELLOWSHIP WITH US</h3>
            <h3 className='font-bold md:text-[44px] text-[24px] leading-[1] mb-[80px] font-merriweather'>Join Us for Worship, <br />Fellowship, and Growth</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-6">
              {services.map((service, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden text-white w-full ">
                  <Image
                    src={service.image}
                    width={400}
                    height={300}
                    alt={service.title}
                    className="w-full object-cover"
                  />
                  <p
                    className="absolute bottom-0 left-0 w-full text-white text-center text-lg font-medium p-4 font-sans"
                  >
                    {service.title}
                  </p>
                </div>
              ))}
            </div>

          </section>

          {/* section 4 */}

          <section className='bg-[#fff] height-[500px] text-center m-auto text-black rounded-2xl flex flex-col justify-between py-[80px] overflow-x-auto mb-[120px] font-sans '>
            <h3 className='font-medium text-base mb-4'>OUR STORIES</h3>
            <h2 className='font-medium text-2xl mb-8'>Every testimony is a reminder that <br /> God is still working.</h2>
            <div className="flex gap-8 overflow-x-auto px-4 py-6 scrollbar-hide justify-evenly">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="rounded-2xl max-w-[500px] bg-[#f5f5f5] px-[15px] py-[30px]  flex-shrink-0"
                >
                  <p
                    className="font-medium md:text-[18px] text-[14px] text-center font-sans"
                  >
                    {story.text}
                  </p>
                  <p
                    className="md:text-[32px] text-2xl text-center mt-4"
                    style={{fontFamily: 'Great Vibes'}}
                  >
                    {story.name}
                  </p>
                </div>
              ))}
            </div>

          </section>

          {/* section 5 */}

          <section className='flex justify-between gap-8 flex-col md:flex-row text-black'>
            <div className='w-full md:w-[60%]'>
              <h2 className='mb-[30px] md:text-[40px] text-2xl font-bold font-merriweather'>Upcoming Events</h2>
              <div className='md:h-[500px]'>
                <Image src='/Images/events.svg' width={400} height={400} alt='Events' className='w-full h-full rounded-2xl  object-cover'></Image>  

              </div>
            </div>
            <div className='md:w-[40%] w-[90%] mx-auto md:pt-0 pt-10'>
              <p className='md:mb-[30px] mb-[25px] md:text-[18px] text-[14px] font-sans'>Hear God&rsquo;s Word <br /> Spoken to Your Heart.</p>
              <div className="relative md:h-[500px]">
                  <Image src='/Images/watch_sermon.svg' width={300} height={480} alt='Watch Sermon' className='w-full h-full object-cover rounded-2xl' ></Image>
                  <div className='absolute bottom-0 left-0 w-full text-white p-4'>
                    <p className='fonts-sans font-medium text-[12px] mb-6'>SERMONS</p>
                    <p className='font-bold font-merriweather text-[24px] mb-5'>God&rsquo;s Word</p>
                    <button className="px-6 py-3 bg-[#C83737] text-white rounded-full text-sm md:text-[18px] font-medium font-sans">
                      Watch Now
                    </button>
                  </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Gallery />

      <Footer />
    </main>
  )
}

export default Page