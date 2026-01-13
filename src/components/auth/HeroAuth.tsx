import Link from "next/link";

export default function HeroAuth() {
  return (
    <div className="hidden md:flex flex-1 p-15 flex-col bg-white dark:bg-black transition-colors">
      <div className="max-w-150 animate-[fadeInUp_0.8s_ease-out]">
        {/* Header Section */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <Link
              href="/"
              className="font-['Cormorant_Garamond',serif] text-[56px] font-light tracking-[4px] text-black dark:text-white relative inline-block transition-colors"
            >
              JewelFx
            </Link>

            <div className="text-sm tracking-[3px] uppercase text-black/60 dark:text-white/60 font-light transition-colors">
              Design • Digitize • Deliver
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            {
              title: "Track Jobs",
              desc: "Real-time status updates, timestamps, and full job history in one place.",
            },
            {
              title: "Upload Files",
              desc: "Upload references, CAD/renders, and keep versions organized automatically.",
            },
            {
              title: "Role Access",
              desc: "Role-based views so customers, admins, QC and designers see only what they need.",
            },
            {
              title: "Secure",
              desc: "Protected accounts with clean authentication and controlled access to files.",
            },
            {
              title: "QC Review",
              desc: "Manager approval before anything is shared with the customer — fewer mistakes.",
            },
            {
              title: "Invoices & Payments",
              desc: "Centralized billing with payment links, invoice history, and due tracking.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group p-6 border rounded-xl 
                         border-black/10 dark:border-white/10
                         bg-white dark:bg-black
                         backdrop-blur
                         transition-all duration-300 
                         hover:border-black/25 dark:hover:border-white/25
                         hover:-translate-y-1
                         hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]
                         dark:hover:shadow-[0_18px_50px_rgba(255,255,255,0.08)]"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-3">
                <div className="text-sm font-semibold uppercase tracking-wider text-black dark:text-white transition-colors">
                  {feature.title}
                </div>

                {/* Small decorative indicator */}
                <div className="h-2 w-2 rounded-full bg-black/20 dark:bg-white/20 group-hover:bg-black/60 dark:group-hover:bg-white/60 transition-colors" />
              </div>

              {/* Description */}
              <div className="mt-3 text-[13px] text-black/60 dark:text-white/60 leading-relaxed transition-colors">
                {feature.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
