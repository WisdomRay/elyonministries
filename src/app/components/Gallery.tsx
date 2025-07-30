"use client";
import Image from 'next/image';

export default function Gallery() {
    const gallery = ["/Images/01.svg", "/Images/02.svg", "/Images/03.svg", "/Images/04.svg", "/Images/05.svg", "/Images/06.svg", "/Images/07.svg", "/Images/08.svg", "/Images/09.svg", "/Images/10.svg"]
  return (
    
    <div>
      <div className="bg-[#F5F5F5] min-h-screen">
        <section className="pt-[150px] px-4 pb-16">
            <h3 className="text-center text-[24px] md:text-[44px] font-bold md:mb-12 mb-8 font-merriweather text-[#1A1A1A]">
                Memories
            </h3>

            {/* Desktop Grid Layout (md and above) */}
            <div className="hidden md:block max-w-7xl mx-auto">
                <div className="grid grid-cols-5 gap-4 lg:gap-6">
                {gallery.map((item, index) => (
                    <div key={index} className="aspect-[26/28] w-full">
                        <Image
                            src={item || "/placeholder.svg"}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            width={260}
                            height={280}
                        />
                    </div>
                ))}
                </div>
            </div>

            
            {/* Mobile Grid Layout - 3 columns, 5 rows */}
            <div className="md:hidden">
                <div className="grid grid-cols-3 grid-rows-5 gap-2 h-full">
                {/* Image 1 */}
                <div className="col-start-1 row-start-1 col-span-1 row-span-2">
                    <Image src={gallery[0]} alt="img1" className="w-full h-full object-cover rounded-sm" width={200} height={200}/>
                </div>

                {/* Image 2 */}
                <div className="col-start-2 row-start col-span-1 row-span-0">
                    <Image src={gallery[5]} alt="img2" className="w-full h-full object-cover rounded-sm" width={200} height={200}/>
                </div>

                {/* Image 3 */}
                <div className="col-start-3 row-start col-span-1 row-span-2">
                    <Image src={gallery[4]} alt="img3" className="w-full h-full object-cover rounded-sm" width={200} height={200}/>
                </div>

                {/* Image 4 */}
                <div className="col-start-1 row-start-3 col-span-1 row-span-2">
                    <Image src={gallery[1]} alt="img4" className="w-full h-full object-cover rounded-sm" width={200} height={200}/>
                </div>

                {/* Image 5 */}
                <div className="col-start-2 row-start-2 col-span-1 row-span-2">
                    <Image src={gallery[6]} alt="img5" className="w-full h-full object-cover rounded-sm" width={200} height={200}/>
                </div>

                {/* Image 6 */}
                <div className="col-start-3 row-start col-span-1 row-span-2">
                    <Image src={gallery[8]} alt="img6" className="w-full h-full object-cover rounded-sm" width={200} height={200}/>
                </div>

                {/* Image 7 */}
                <div className="col-start-1 row-start-5 col-span-1 row-span-0">
                    <Image src={gallery[2]} alt="img7" className="w-full h-full object-cover rounded-sm" width={200} height={200}/>
                </div>

                {/* Image 8 */}
                <div className="col-start-2 row-start-4 col-span-1 row-span-2">
                    <Image src={gallery[7]} alt="img8" className="w-full h-full object-cover rounded-sm" width={200} height={200}/>
                </div>

                {/* Image 9 */}
                <div className="col-start-3 row-start-5 col-span-1 row-span-0">
                    <Image src={gallery[9]} alt="img9" className="w-full h-full object-cover rounded-sm" width={200} height={200}/>
                </div>
                </div>
            </div>



            <div className="flex justify-center mt-12">
                <button
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                style={{ fontFamily: "DM Sans" }}
                >
                View more
                </button>
            </div>
        </section>
      </div>
    </div>
  )
}
