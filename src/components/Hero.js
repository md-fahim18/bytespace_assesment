import Image from "next/image";
import { Search } from "lucide-react";
import Navbar from "./Navbar";
import Deco from "./Deco";
import ProgressCard from "./ProgressCard";
import HappyStudentsCard from "./HappyStudentsCard";
import { assets } from "@/lib/assets";

export default function Hero() {
  const s = assets.shapes;
  return (
    <section className="bg-grid-blue relative overflow-hidden text-white">
      <Navbar />

      {/* 3D shapes (hidden on small screens to keep the hero clean) */}
      <Deco src={s.squiggleLime} className="left-[-70px] top-[250px] hidden w-[210px] lg:block" />
      <Deco src={s.squiggleWhite} className="left-[13%] top-[470px] hidden w-[110px] lg:block" />
      <Deco src={s.ring} className="left-[4%] top-[700px] hidden w-[190px] lg:block" />
      <Deco src={s.cone} className="right-[17%] top-[470px] hidden w-[140px] lg:block" />
      <Deco src={s.cylinderLime} className="right-[-50px] top-[250px] hidden w-[220px] lg:block" />
      <Deco src={s.squiggleLime} className="right-[4%] top-[700px] hidden w-[180px] rotate-[20deg] lg:block" />

      <div className="container-x relative z-10 pt-[130px] text-center md:pt-[190px]">
        <h1 className="mx-auto max-w-[900px] text-[38px] font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-[72px]">
          Get Access to Hundreds <br className="hidden sm:block" />
          Courses Available
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-sm text-white/80 md:mt-8 md:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          role="search"
          className="mx-auto mt-8 flex max-w-[500px] items-center gap-2 md:mt-10"
          action="#courses"
        >
          <label className="flex h-12 flex-1 items-center gap-2 rounded-full bg-white px-4 text-body md:h-[52px]">
            <Search size={16} aria-hidden="true" />
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-body"
            />
          </label>
          <button
            type="submit"
            className="h-12 rounded-full bg-lime px-6 text-sm font-semibold text-ink transition hover:brightness-95 md:h-[52px]"
          >
            Search
          </button>
        </form>
      </div>

      {/* hero art: circle, student and floating cards */}
      <div className="relative z-10 mx-auto mt-10 aspect-[760/500] w-full max-w-[760px] md:mt-14">
        <div className="absolute left-[4%] top-[18.6%] aspect-square w-[92%] rounded-full bg-lime" />
        <div className="absolute bottom-0 left-[17.5%] aspect-[500/480] w-[65%]">
          <Image
            src={assets.heroStudent}
            alt="Smiling student wearing headphones and holding a laptop"
            fill
            priority
            sizes="(min-width: 768px) 495px, 65vw"
            className="object-contain object-bottom"
          />
        </div>

        <div className="absolute left-[3%] top-[23%] w-[207px] origin-top-left scale-[.55] rounded-xl bg-white px-4 py-3 text-left text-ink shadow-float sm:scale-75 md:left-[8.3%] md:scale-100">
          <p className="text-sm font-semibold">UI/UX Design</p>
          <p className="mt-0.5 text-[10px] text-body">300 Courses &bull; 1000+ Students</p>
        </div>

        <ProgressCard className="absolute right-[2%] top-[26%] origin-top-right scale-[.55] sm:scale-75 md:left-[66.4%] md:right-auto md:scale-100" />

        <HappyStudentsCard className="absolute bottom-[3%] left-[1%] origin-bottom-left scale-[.55] sm:scale-75 md:bottom-auto md:left-[-1.4%] md:top-[63%] md:scale-100" />
      </div>
    </section>
  );
}
