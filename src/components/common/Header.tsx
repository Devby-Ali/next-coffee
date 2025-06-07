import Icon from "../Icon";

function Header() {
  return (
    <section className="home relative h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-[url(../../public/images/headerBgMobile.webp)] md:bg-[url(../../public/images/headerBgDesktop.webp)] bg-no-repeat bg-cover bg-[center_top]">
      <div className="container 2xl:px-28 relative h-full md:min-h-screen flex justify-end items-center overflow-y-hidden">
        <div className="text-white">
          <h2 className="font-morabba font-bold text-2xl md:text-6xl/[62px] mb-0.5 md:mb-2">
            قهوه عربیکا تانزانیا
          </h2>
          <span className="font-morabba font-light text-xl md:text-5xl/[64px]">یک فنجان بالانس!</span>
          <span className="block w-25 h-px md:h-0.5 bg-orange-300 my-3 md:my-8"></span>
          <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl">
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف
            کمربند قهوه کشت میشود.
          </p>
        </div>
        {/* <!-- Circle --> */}
        <div className="circle circle--main circle--lg">
          <div className="circle circle--md">
            <div className="circle circle--sm"></div>
          </div>
        </div>
      </div>

      {/* <!-- Curve --> */}
      <Icon name="curve" className="absolute bottom-0 right-0 left-0 mx-auto hidden md:inline-block w-25 h-5.5 text-gray-100 dark:text-zinc-800"/>

      {/* <!-- Arrow Circle --> */}
      <div className="absolute bottom-0 right-0 left-0 mx-auto translate-y-1/2 hidden md:flex-center w-7.5 h-7.5 border-2 border-orange-300 rounded-full">
        <Icon name="chevron-down-mini" className="w-5 h-5 text-zinc-700 dark:text-white"/>
      </div>
    </section>
  );
}

export default Header;
