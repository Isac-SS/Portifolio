"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ProjectsSlide from "../../Data/projects.json";
import Image from "next/image";
import { LanguagesIcon } from "lucide-react";

const Projetos = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div>
        <h2 className="text-[2.5rem] text-center font-bold">Projetos</h2>
        <h3 className="font-medium py-8 px-40 text-center text-lg">
          Principais projetos
        </h3>

        <Swiper
          className="h-auto py-8 relative"
          spaceBetween={40}
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {ProjectsSlide &&
            ProjectsSlide.map((item) => (
              <SwiperSlide
                key={item.id}
                className="w-[325px] rounded-lg overflow-hidden shadow-[0px 2px 4px rgba(0, 0, 0, 0.2);]"
              >
                <div>
                  <Image
                    className="w-full h-auto object-cover"
                    width={320}
                    height={427}
                    src={item.img}
                    alt={`Preview do Projeto`}
                    title={item.title}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-2xl">{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="flex justify-center items-center">
                    <div className="mt-[5px] ">
                      {Array.isArray(item.icons) &&
                        item.icons.map((iconName, index) => {
                          const iconComponent = LanguagesIcon[iconName];
                          return <iconComponent key={index} className="w-6 h-6 mr-2 text-gray-500 hover:text-[#9b2ff5]" />;
                        })}
                    </div>

                    <div className="rightBtn">
                      <button className="text-xs text-white bg-[linear-gradient(90deg, #9b2ff5 0%, #8837ee 100%);
    padding: 8px 15px;] border-none shadow-md rounde-[50px] transition-all duration-500 transform translate-y-0 flex flex-row items-center cursor-pointer">
                        Ver mais
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projetos;
