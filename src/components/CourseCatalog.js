"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { categories, courses } from "@/lib/data";

export default function CourseCatalog() {
  const [active, setActive] = useState("Featured");

  return (
    <section id="courses" className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-[800px] text-center">
        <h2 className="section-title">
          Discover Your Passion, <br className="hidden sm:block" />
          Build Your Skills
        </h2>
        <p className="section-copy mt-5">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
          different fields, from technology to the arts, and make a difference in your career and life.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1050px] flex-wrap justify-center gap-2.5" role="tablist" aria-label="Course categories">
        {[...categories, "+ More"].map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => c !== "+ More" && setActive(c)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                isActive
                  ? "border-lime bg-lime text-ink"
                  : "border-line bg-white text-body hover:border-brand hover:text-brand"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <CourseCard key={course.id} course={course} priority={i < 3} />
        ))}
      </div>
    </section>
  );
}
