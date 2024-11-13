import style from "./style.module.css";
import flower from "../../assets/flower.png";

function Hero() {
  return (
    <section className={`${style.hero} pt-[108px]`}>
      {/* inner data */}
      <div
        className={`max-w-[1320px] mx-auto flex items-center pt-[130px] pb-[160px] justify-center relative`}
      >
        {/* left content */}
        <aside>
          <div
            className={`${style.heading_bg} translate-x-[13%] -translate-y-14 relative z-10`}
          >
            {/* heading */}
            <h1 className={`${style.heading}`}>
              Taste the authentic Saudi cuisine
            </h1>
          </div>

          {/* description */}
          <p>
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>

          <button>Explore Menu</button>
        </aside>

        {/* right content */}
        <aside>
          <figure className="flex items-center relative -translate-x-[15%]">
            {/* image */}
            <div className={`${style.image}`}></div>

            {/* offer */}
            <figcaption
              className={`w-[120px] h-[120px] rounded-full bg-Yellow pr-[6.79px] pt-[6.79px] pl-[7.55px] pb-[7.55px] absolute bottom-0 right-0 translate-x-1/2 ${style.shadow}`}
            >
              <h1 className="border border-dashed w-full h-full rounded-full border-[#bd1f17] text-Text_Primary text-[36px] font-bold leading-9 font-bebas flex items-center justify-center text-center">
                Today
                <br />
                Offer
              </h1>
            </figcaption>

            {/* flower image */}
            <img
              className="w-[45px] h-[45px] absolute top-0 right-0 -translate-y-[75%] translate-x-[60%]"
              src={flower}
              alt="flower image"
            />
          </figure>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
