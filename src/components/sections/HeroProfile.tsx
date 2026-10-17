import Image from "next/image";
import LensPanel from "@/components/ui/glass/LensPanel";

export default function HeroProfile() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[420px] xl:mr-0 xl:ml-auto xl:max-w-[500px]">
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.26),rgba(94,234,212,0.1)_55%,transparent_75%)] blur-3xl"
      />
      <LensPanel
        radius={40}
        tint="rgba(14, 17, 32, 0.5)"
        className="w-full"
      >
        <div className="p-2.5">
          <div className="sheen relative overflow-hidden rounded-[30px] ring-1 ring-white/15">
            <div className="relative aspect-[4/5]">
              <Image
                src="/Profile.jpeg"
                alt="Portrait of Md Ehtesham"
                fill
                priority
                sizes="(min-width: 1280px) 460px, (min-width: 640px) 420px, 92vw"
                className="object-cover brightness-[0.92] saturate-[0.85]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0b0e1e]/70 via-[#0b0e1e]/10 to-transparent"
              />
            </div>
          </div>
        </div>
      </LensPanel>
    </div>
  );
}
