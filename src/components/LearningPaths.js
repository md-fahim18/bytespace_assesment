import { learningPaths } from "@/lib/data";

export default function LearningPaths() {
  return (
    <section id="creators" className="container-x pb-16 md:pb-24">
      <div className="mx-auto max-w-[800px] text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-[32px]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="section-copy mt-4">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
          various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {learningPaths.map(({ label, icon: Icon }) => (
          <li key={label}>
            <a
              href="#courses"
              className="flex h-[150px] flex-col items-center justify-center gap-4 rounded-[20px] border border-line bg-white text-sm font-medium text-ink transition hover:border-brand hover:shadow-card lg:h-[163px]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime/70 ring-1 ring-lime">
                <Icon size={20} aria-hidden="true" />
              </span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
