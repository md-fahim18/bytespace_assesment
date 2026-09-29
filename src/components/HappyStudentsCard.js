import { Star } from "lucide-react";
import AvatarStack from "./AvatarStack";

export default function HappyStudentsCard({ className = "" }) {
  return (
    <div className={`w-[250px] rounded-2xl bg-white p-3 text-left shadow-float ${className}`}>
      <p className="text-sm font-semibold text-ink">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-[11px] text-body">
        4.5
        <span className="flex text-lime">
          {Array.from({ length: 4 }).map((_, i) => (
            <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
          ))}
        </span>
        <span className="text-brand">(2K reviews)</span>
      </p>
      <AvatarStack className="mt-2" count={7} size={30} extra="2K+" start={0} />
    </div>
  );
}
