import Image from "next/image";
import { Star, ChartNoAxesColumn } from "lucide-react";
import AvatarStack from "./AvatarStack";

export function LevelChip({ level }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-2 py-1 text-[10px] font-medium text-body">
      <ChartNoAxesColumn size={11} aria-hidden="true" />
      {level}
    </span>
  );
}

export default function CourseCard({ course, className = "", priority = false }) {
  return (
    <article className={`rounded-[20px] border border-line bg-white p-3 ${className}`}>
      <div className="relative aspect-[1.75] overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={course.image}
          alt={`${course.title} course thumbnail`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
        />
        {/* <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1.5 bg-gradient-to-t from-black/45 to-transparent p-2.5 pt-8">
          {[course.lessons, course.duration, course.comments].map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div> */}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <h3 className="truncate text-[15px] font-semibold text-ink">{course.title}</h3>
        <span className="flex shrink-0 items-center gap-1 text-xs text-body">
          {course.rating}
          <Star size={12} className="text-gray-300" fill="currentColor" strokeWidth={0} aria-hidden="true" />
        </span>
      </div>
      <p className="mt-0.5 text-[11px] text-brand">by {course.author}</p>

      <div className="mt-3 flex items-center gap-3">
        <LevelChip level={course.level} />
        <AvatarStack count={4} size={22} extra="26+" start={2} />
      </div>

      <p className="mt-3">
        <span className="text-xl font-bold text-brand">{course.price}</span>
        <span className="text-[10px] text-body">{course.priceNote}</span>
      </p>
    </article>
  );
}
