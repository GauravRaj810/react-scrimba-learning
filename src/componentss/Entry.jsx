export default function Entry() {
  return (
      <article className="py-7">
        <div className="container flex ">
          <div className="w-[125px] h-[168px] overflow-hidden rounded-[5px] flex-shrink-0 mr-[19px]">
              <img 
                  className="w-full h-full object-cover"
                  src="https://scrimba.com/links/travel-journal-japan-image-url" 
                  alt="mount fuji" 
              />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
            <img 
                  className="w-[7px] mr-[4px]"
                  src="/marker.png" 
                  alt="map marker icon"
               />
                  <span className="uppercase text-[1rem] mr-[12px]">Japan</span>
             
              <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className="text-[#2B283A] text-[1rem] hover:text-[#918E9B]">View on Google Maps</a>
            </div>
              
              <h2 className="mt-[7px] mb-[12px] text-[2rem] font-medium">Mount Fuji</h2>
              <p className="font-bold text-[1rem]">12 Jan, 2021 - 24 Jan, 2021</p>
              <p className="text-[0.8rem] leading-[1.5] line-clamp-3">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
          </div>
          </div>
      </article>
  )
}
