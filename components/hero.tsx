// import {} from "react-icons/fc"
import styles from "./hero.module.css";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex flex-col gap-2 md:gap-3 items-center">
      <div className="flex gap-8 justify-center items-center"></div>
      <h1 className="sr-only">Krivan Digital agency home page.</h1>

      <div className="relative w-full lg:w-4/5 h-[400px] p-0">
        <div
          className={`w-20 h-8 bg-pink-500 rounded-tl-xl ${styles.slantedEdge}`}
        ></div>
        <div
          className={`absolute bottom-6 right-0 w-20 h-8 bg-violet-500 rounded-br-xl ${styles.slantedEdge2}`}
        ></div>
        <p className="absolute top-1 left-[5rem] px-1 uppercase text-muted-foreground text-xs/6 ">
          &#10687; Branding, Strategy, video marketing
        </p>

        <div className="flex justify-center items-center w-full h-80 bg-gradient-to-r from-pink-500 to-violet-500 rounded-r-xl rounded-b-xl">
          <div className="flex flex-col text-white !leading-tight mx-auto max-w-xl text-center">
            <span className="text-3xl lg:text-4xl font-bold tracking-tight ">
              We support the
            </span>
            <span className="text-6xl lg:text-8xl font-extrabold text-orange-500 font-stretch-125% tracking-wider">
              growth
            </span>
            <span className="text-3xl lg:text-4xl font-bold tracking-tight">
              of your business
            </span>
          </div>
        </div>
      </div>
      <p className="text-lg !leading-tight gap mx-auto max-w-xl mt-6 text-muted-foreground text-center">
        We focus on good communication and understanding your business
      </p>

      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
