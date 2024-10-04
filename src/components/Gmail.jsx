import Gmailimg from "../assets/gmail.png";
import Starfish2 from "../assets/starfish2.svg";
import Bars from "../assets/3bars.svg";

const Gmail = () => {
  return (
    <div
      id="contact"
      className="relative w-[100%] flex justify-center items-center"
    >
      <div className="w-[100%] sm:w-[80%] flex flex-col gap-3 md:gap-4 justify-center items-center bg-white px-4 py-16 border-[2px] md:border-[4px] border-black rounded-[2px] md:rounded-[8px] drop-shadow-[6px_6px_0px_rgba(0,0,0,0.4)]">
        <h3 className="text-[18px] font-semibold sm:text-[28px] md:text-[32px]">
          Let&apos;s start building your project
        </h3>
        <p className="text-[14px] text-center md:text-[20px]">
          Want to see how to transform your brand into a unique style. Send me a
          message
        </p>
        <div className="relative flex gap-0 justify-center mt-8">
          <a
            href="mailto:austen.dezigns.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="flex gap-2 items-center bg-[#BAE6FF] text-black px-6 py-3 rounded-full border-4 border-black"
              style={{ fontFamily: "helvetica-R" }}
            >
              <img src={Gmailimg} className="w-[30px]" alt="gmail" />
              <p className="text-[14px] md:text-[20px]">Send Message</p>
            </button>
          </a>
          <img
            src={Bars}
            alt=""
            className="absolute top-[70%] left-[95%] -mb-14"
          />
        </div>
      </div>
      <div>
        <img
          src={Starfish2}
          alt="starfish"
          className="absolute top-0 md:left-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 md:scale-[1.5]"
        />
      </div>
    </div>
  );
};

export default Gmail;
