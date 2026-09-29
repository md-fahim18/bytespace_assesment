import CourseCard from "./CourseCard";
import HappyStudentsCard from "./HappyStudentsCard";
import Deco from "./Deco";
import { assets } from "@/lib/assets";
import { courses } from "@/lib/data";

/* Decorative course-card cluster reused from the hero, restyled for the auth panel. */
export default function AuthDeco({ className = "" }) {
  const s = assets.shapes;
  const [backCourse, frontCourse] = [courses[1], courses[2]];

  return (
    <div className={`relative aspect-[600/560] w-full max-w-[600px] ${className}`}>
      <Deco src={s.ringLime} className="left-0 top-0 w-[19%]" />

      <CourseCard
        course={backCourse}
        className="absolute left-0 top-[27%] w-[62%] -rotate-2 shadow-card"
        priority
      />

      <CourseCard
        course={frontCourse}
        className="absolute left-[24%] top-0 w-[64%] shadow-float"
        priority
      />

      <Deco src={s.squiggleWhite} className="right-[2%] top-[46%] w-[17%] rotate-[10deg]" />

      <Deco src={s.coneLime} className="left-[-2%] top-[66%] w-[30%]" />

      <HappyStudentsCard className="absolute bottom-0 right-0 origin-bottom-right scale-[.9]" />
    </div>
  );
}
