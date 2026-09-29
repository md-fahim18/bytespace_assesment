import { partnerLogos } from "@/lib/data";

export default function LogoStrip() {
  return (
    <section className="bg-surface" aria-label="Partners">
      <ul className="container-x flex flex-wrap items-center justify-center gap-x-14 gap-y-6 py-12 md:justify-between md:py-[72px]">
        {partnerLogos.map(({ name, icon: Icon }, i) => (
          <li key={i} className="flex items-center gap-2 text-[22px] font-semibold text-gray-500">
            <Icon size={28} strokeWidth={2.2} aria-hidden="true" />
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
