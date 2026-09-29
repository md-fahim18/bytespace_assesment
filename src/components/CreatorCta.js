import Deco from "./Deco";
import { assets } from "@/lib/assets";

export default function CreatorCta() {
  const s = assets.shapes;
  return (
    <section className="bg-grid-blue relative overflow-hidden py-20 text-center text-white md:py-[104px]">
      <Deco src={s.squiggleLime} className="left-[3%] top-[12%] hidden w-[130px] md:block lg:left-[6%] lg:w-[170px]" />
      <Deco src={s.coneLime} className="right-[8%] top-[8%] hidden w-[130px] md:block" />
      <Deco src={s.cone} className="-left-4 bottom-[-6%] hidden w-[130px] md:block" />
      <Deco src={s.cylinderWhite} className="-right-16 bottom-[-12%] hidden w-[260px] md:block" />

      <div className="container-x relative z-10">
        <h2 className="mx-auto max-w-[700px] text-[32px] font-medium leading-tight tracking-tight text-lime-soft md:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-6 max-w-[860px] text-sm leading-relaxed text-white/85">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Join as a Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-lime px-7 text-sm font-semibold text-ink transition hover:brightness-95"
        >
          Join as Creator
        </a>
      </div>
    </section>
  );
}
