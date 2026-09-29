import Image from "next/image";
import { assets } from "@/lib/assets";

export default function AvatarStack({ count = 5, size = 24, extra = "26+", start = 0, className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      {assets.avatars.slice(start, start + count).map((src, i) => (
        <span
          key={src}
          className="relative -ml-1.5 inline-block overflow-hidden rounded-full ring-2 ring-white first:ml-0"
          style={{ width: size, height: size, zIndex: count - i }}
        >
          <Image src={src} alt="" width={size * 2} height={size * 2} className="h-full w-full object-cover" />
        </span>
      ))}
      {extra && (
        <span
          className="-ml-1.5 inline-flex items-center justify-center rounded-full bg-lime text-[10px] font-bold text-ink ring-2 ring-white"
          style={{ height: size, minWidth: size + 4, paddingInline: 4 }}
        >
          {extra}
        </span>
      )}
    </div>
  );
}
