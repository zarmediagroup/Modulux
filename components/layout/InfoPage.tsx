import Link from "next/link";

type InfoPageProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  cta?: { label: string; href: string };
};

export default function InfoPage({ title, description, children, cta }: InfoPageProps) {
  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      <div className="bg-[#1C1C1C] pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8A97E] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            MODULUX
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-white/60 text-lg">{description}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)] space-y-4 text-[#2D2D2D] leading-relaxed">
          {children}
        </div>

        {cta && (
          <div className="mt-8 text-center">
            <Link
              href={cta.href}
              className="inline-block bg-[#C8A97E] text-[#1C1C1C] font-semibold px-8 py-3 rounded-full hover:bg-[#b89468] transition-colors"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
