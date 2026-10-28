import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import Deco from "./Deco";
import ProgressCard from "./ProgressCard";
import HappyStudentsCard from "./HappyStudentsCard";
import { LevelChip } from "./CourseCard";
import { assets } from "@/lib/assets";
import { courses, stats, creatorBenefits } from "@/lib/data";

function GrowthRow() {
  const course = courses[0];
  return (
    <div className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
      <div>
        <h2 className="max-w-[520px] text-[34px] font-semibold leading-[1.15] tracking-tight text-ink md:text-[44px]">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="section-copy mt-6 max-w-[480px]">
          Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
          journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
          career path entirely, we have the resources you need.
        </p>
        <dl className="mt-8 flex gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="text-[28px] font-semibold text-ink">{s.value}</dd>
              <dt className="text-xs text-body">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      {/* composite: mini course card + student + progress card */}
      <div className="relative mx-auto aspect-[560/440] w-full max-w-[560px]">
        <div className="absolute left-0 top-[2%] z-0 w-[46%] rounded-[18px] border border-line bg-white p-2.5 shadow-card">
          <div className="relative aspect-[1.6] overflow-hidden rounded-xl">
            <Image src={course.image} alt="" fill sizes="260px" className="object-cover" />
          </div>
          <h3 className="mt-2 truncate text-sm font-semibold">Learn Figma from Basic</h3>
          <p className="text-[10px] text-brand">by {course.author}</p>
          <div className="mt-2"><LevelChip level={course.level} /></div>
          <p className="mt-2 text-lg font-bold text-brand">
            {course.price}
            <span className="text-[10px] font-normal text-body">{course.priceNote}</span>
          </p>
        </div>

        <div className="absolute bottom-0 left-[24%] z-10 aspect-[500/480] w-[74%]">
          <Image
            src={assets.growthStudent}
            alt="Student holding a laptop"
            fill
            sizes="420px"
            className="object-contain object-bottom"
          />
        </div>
        <ProgressCard className="absolute right-[-2%] top-[42%] z-20 origin-right scale-[.8] sm:scale-100" />
        <Deco src={assets.shapes.squiggleLime} className="right-[-5%] top-[-4%] z-0 w-[22%]" />
      </div>
    </div>
  );
}

function CreateRow() {
  return (
    <div className="container-x grid items-center gap-12 pb-16 md:pb-24 lg:grid-cols-2">
      <div className="relative mx-auto aspect-[520/520] w-full max-w-[520px]">
        <Deco src={assets.shapes.squiggleLime} className="right-[2%] top-[4%] w-[30%]" />
        <div className="absolute bottom-0 left-[14%] z-10 aspect-[460/560] w-[70%]">
          <Image
            src={assets.creatorWoman}
            alt="Course creator wearing a headset"
            fill
            sizes="360px"
            className="object-contain object-bottom"
          />
        </div>

        <div className="absolute left-0 top-[2%] z-20 w-[150px] rounded-xl bg-brand p-3 text-white shadow-float">
          <p className="text-[11px] text-white/80">Total Revenue</p>
          <p className="text-[9px] text-white/60">July 1-31</p>
          <p className="mt-1 text-xl font-bold">$120.29</p>
        </div>
        <div className="absolute left-[1%] top-[24%] z-20 w-[150px] rounded-xl bg-brand p-3 text-white shadow-float">
          <p className="text-[11px] text-white/80">Year to Date</p>
          <p className="text-[9px] text-white/60">2023</p>
          <p className="mt-1 flex items-center gap-2 text-xl font-bold">
            $1,200.38
            <span className="rounded-full bg-lime px-1.5 py-0.5 text-[9px] font-bold text-ink">+1.98</span>
          </p>
        </div>
        <HappyStudentsCard className="absolute bottom-[6%] right-0 z-20 origin-bottom-right scale-[.85] sm:scale-100" />
      </div>

      <div>
        <h2 className="text-[34px] font-semibold leading-[1.15] tracking-tight text-ink md:text-[44px]">
          Create &amp; Manage <br className="hidden sm:block" />
          Courses Easily.
        </h2>
        <p className="section-copy mt-6 max-w-[520px]">
          <strong className="font-semibold text-ink">ByteSpace</strong> supports individuals or entities in the
          creation, publication, and administration of educational courses.
        </p>
        <ul className="mt-6 space-y-3">
          {creatorBenefits.map((b) => (
            <li key={b} className="flex items-center gap-3 text-sm font-medium text-ink">
              <BadgeCheck size={20} className="text-brand" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function GrowthSection() {
  return (
    <section className="bg-growth overflow-hidden">
      <GrowthRow />
      <CreateRow />
    </section>
  );
}
