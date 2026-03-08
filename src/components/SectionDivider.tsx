interface SectionDividerProps {
  number: string;
  label: string;
}

export default function SectionDivider({ number, label }: SectionDividerProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-[10px] tracking-[0.16em] uppercase text-[#5a5550]">
        {number}
      </span>
      <div className="flex-1 h-px bg-[#2d2b28]" />
      <span className="text-[10px] tracking-[0.16em] uppercase text-[#5a5550]">
        {label}
      </span>
    </div>
  );
}
