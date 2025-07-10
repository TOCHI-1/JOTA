
import Logo from "./assets/logo.svg"
import Embark from "./assets/Embark.svg"

function App() {
  

  return (
    <container >
    <div className=" grid grid-cols-1 grid-rows-3 grid-rows-[300px_1fr_530px] bg-[#F5EBE0] ">
      <header className="" >
       <section className="grid grid-cols-2 grid-rows-2 bg-[#D4A373] p-[2em] grid-cols-[1.2fr_1fr] gap-[20px] h-[300px]  md:grid-cols-1 md:grid-rows-1  ">
        <div className="order-1  mt-[1em] md:mt-0">
          <img className="h-[90px] w-[90px] mx-auto" src={Logo} alt="" />
          <h1 className="w-fit mx-auto font-bold !text-[40px] mt-[-12px] md:mb-[2em] ">JOTA</h1>

        </div>
        <div className="order-3 mt-[2em] md:order-2 ">
          <p className="!text-[12px] text-center  md:w-[516px] mx-auto ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae .</p>
        </div>
        <div className=" row-span-2 order-2  flex flex-col justify-center gap-[20%] md:order-3  md:flex-row md:w-fit md:mx-auto md:gap-[10px] ">
          <button className="bg-[#F5EBE0] rounded-[50px] py-[.2em] md:w-[121px]  md:h-[32px] ">Sign Up</button>
          <button className="bg-[#A98467] rounded-[50px] py-[.2em] text-white  md:w-[121px]  md:h-[32px]">Log in</button>
        </div>

       </section>

      </header>
      <main className=" px-[30px]">
        <div className="text-center  mt-[2em] md:max-w-[516px] mx-auto">
          <h2 className="!text-[30px] ">Why JOTA ?</h2>
          <p className=""> Journaling is a practice that involves regularly expressing gratitude and appreciation for the positive aspects of life. This simple yet powerful habit has been associated with numerous positive effects on mental, emotional, and even physical well-being.</p>
        </div>
       
        <section className="grid grid-cols-1 grid-rows-4 mt-[2em] bg-[#E9EDC9]   md:grid-cols-2 md:bg-[#F5EBE0] md:gap-x-[10%] md:grid-cols-[45%_45%] md:w-[90%] lg:w-[80%] xl:w-[55%] mx-auto "> 
          <article className="bg-[#CCD5AE] items-center p-[1em] md:oder-1">
            <h3 className="!text-[15px] font-bold mt-[1em]">Enhanced Well-Being</h3>
            <p className="!text-[15px] mt-[1em] ">Gratitude journaling has been linked to increased overall well-being. By focusing on positive experiences and acknowledging them, individuals may experience a greater sense of life satisfaction.</p>
          </article>
          <div className="hidden md:block md:order-2 md:bg-[#E9EDC9]"></div>
          <div className="hidden md:block md:order-3 md:bg-[#E9EDC9]"></div>

          <article className="bg-[#CCD5AE] items-center p-[1em] mt-[1em] md:mt-0  md:order-4 ">
            <h3 className="!text-[15px] font-bold mt-[1em] text-right">Improved Mental Health</h3>
            <p className="!text-[15px] mt-[1em] text-right">Regularly expressing gratitude has been associated with a reduction in symptoms of depression and anxiety. It can contribute to a more positive mindset and help individuals cope with life's challenges.</p>
          </article>
            <article className="bg-[#CCD5AE] items-center p-[1em]  mt-[1em] md:mt-0 md:order-5 ">
            <h3 className="!text-[15px] font-bold mt-[1em]">Stress Reduction</h3>
            <p className="!text-[15px] mt-[1em] ">Gratitude journaling has the potential to alleviate stress. Reflecting on positive aspects of life may shift the focus away from stressors, promoting a more balanced and resilient mindset.</p>
          </article>
          <div className="hidden md:block md:order-6 md:bg-[#E9EDC9]"></div>
          <div className="hidden md:block md:order-7 md:bg-[#E9EDC9]"></div>
          <article className="bg-[#CCD5AE] items-center p-[1em] mt-[1em]  md:mt-0 md:order-8">
            <h3 className="!text-[15px] font-bold mt-[1em] text-right">Promotes Mindfulness</h3>
            <p className="!text-[15px] mt-[1em] text-right">Gratitude journaling encourages individuals to be present and mindful of the positive elements in their lives. This mindfulness can lead to a greater appreciation of the present moment.</p>
          </article>

        </section>
        
      </main>
      <footer className="bg-[#D4A373] mt-[2em] ">
        <div className=" md:max-w-[500px] mx-auto m-[4em]">
        <img src={Embark} className="h-[150px] mx-auto mt-[2.5em]" alt="" />
        <p className="!text-[16px] mt-[1em] text-center">"Embark on a transformative journey of self-discovery and positivity. Join us on GratitudeGrove, where each entry is a step toward a brighter, more grateful tomorrow. Start your journaling journey today and embrace the power of gratitude to uplift your spirit and enrich your life."</p>
        
        <button className="bg-[#F5EBE0] block rounded-[50px] py-[.2em] h-[30px]  w-[150px] mt-[2em] mx-auto">Get Started</button>
        </div>

      </footer>

    </div>
    </container>
  )
}

export default App
