import Image from "next/image";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-community">
      <div className="container-x py-16 md:py-24">
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="max-w-[460px] text-[34px] font-semibold leading-[1.15] tracking-tight text-ink md:text-[40px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="section-copy">
            At ByteSpace, our vibrant community and creators are at the heart of what we do. Hear directly from those
            who have experienced the transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-[20px] border border-line bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="relative h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                  <Image src={t.image} alt="" fill sizes="56px" className="object-cover" />
                </span>
              </div>
              <figcaption className="mt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-brand">{t.role}</p>
              </figcaption>
              <blockquote className="mt-4 text-sm leading-relaxed text-body">&ldquo;{t.quote}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
