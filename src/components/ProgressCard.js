export default function ProgressCard({ className = "" }) {
  return (
    <div className={`w-[225px] rounded-2xl bg-white p-4 text-left shadow-float ${className}`}>
      <p className="text-[11px] text-body">Learning Progress</p>
      <p className="mt-1 text-[40px] font-bold leading-none text-ink">55%</p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-[55%] rounded-full bg-lime" />
      </div>
    </div>
  );
}
