import { useState } from "react";

const plans = [
  {
    name: "Starter",
    desc: "For individuals just getting started.",
    price: "₱99",
    features: [
      "5 GB storage",
      "10 projects",
      "Basic support"
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    desc: "For professionals who need more power.",
    price: "₱299",
    features: [
      "100 GB storage",
      "50 projects",
      "Advanced features",
      "Priority support"
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    desc: "For teams requiring ultimate performance.",
    price: "₱599",
    features: [
      "500 GB storage",
      "Unlimited projects",
      "Advanced features",
      "Priority support",
    ],
    highlighted: false,
  }
];

function TiltingCard({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) {
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -14;
    const rotateY = ((x - rect.width / 2) / rect.width) * 14;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`cursor-pointer ${className}`}
      style={{ transform, transition: "transform 0.15s ease-out", ...style }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-screen flex flex-col items-center">
      <div className="mb-20 text-center max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] leading-[1.1] md:leading-[1.05] font-medium tracking-tighter text-gray-900 dark:text-[#f4f4f5] mb-5">
          Choose your Pricing Plan
        </h1>
        <p className="text-[16px] sm:text-[17px] md:text-[19px] text-gray-500 dark:text-[#8a8f98] font-medium leading-relaxed sm:leading-snug max-w-xl">
          Get started with our flexible pricing plans designed to scale with your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative rounded-3xl p-8 flex flex-col ${plan.highlighted ? 'bg-white dark:bg-[#161616] border border-black/10 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.05)] md:-translate-y-4' : 'bg-transparent border border-black/5 dark:border-white/5'}`}
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#f4f4f5] mb-2">{plan.name}</h3>
              <p className="text-[14px] text-gray-500 dark:text-[#8a8f98] font-medium h-10">{plan.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 dark:text-[#f4f4f5]">{plan.price}</span>
                <span className="text-[14px] text-gray-500 dark:text-[#8a8f98] font-medium">/month</span>
              </div>
            </div>

            <button className={`w-full py-3 px-6 rounded-full text-[14px] font-semibold mb-8 hover:scale-[0.98] active:scale-95 cursor-pointer transition-all duration-300 ${plan.highlighted ? 'bg-black dark:bg-[#f4f4f5] text-white dark:text-black hover:opacity-90 shadow-md' : 'bg-transparent border border-black/20 dark:border-white/20 text-gray-900 dark:text-[#f4f4f5] hover:bg-black/5 dark:hover:bg-white/5'}`}>
              Get Started
            </button>

            <ul className="flex flex-col gap-4 mt-auto">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3">
                  <svg className="w-5 h-5 shrink-0 text-black dark:text-white opacity-60" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span className="text-[14px] text-gray-700 dark:text-[#a1a1aa] font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* NFC Card Section */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-12 mb-10 py-10 px-4">
        {/* Left: Text */}
        <div className="flex flex-col items-start max-w-sm">
          <span className="text-[12px] font-semibold tracking-widest uppercase text-gray-400 dark:text-[#8a8f98] mb-4">NFC Card</span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter text-gray-900 dark:text-[#f4f4f5] mb-4 leading-[1.1]">
            Your identity,<br />in your pocket.
          </h2>
          <p className="text-[15px] text-gray-500 dark:text-[#8a8f98] font-medium leading-relaxed mb-6">
            Get your personalized Credens NFC Card — tap to share your verified profile instantly. Available as an add-on.
          </p>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 dark:text-[#f4f4f5]">₱350</span>
            <span className="text-[14px] text-gray-500 dark:text-[#8a8f98] font-medium">one-time</span>
          </div>
          <button className="bg-black dark:bg-[#f4f4f5] text-white dark:text-black px-6 py-3 rounded-full text-[14px] font-semibold hover:opacity-90 hover:scale-[0.98] active:scale-95 cursor-pointer transition-all duration-300 shadow-md">
            Order Now
          </button>
        </div>

        {/* Right: Stacked tilting cards */}
        <div className="relative w-full max-w-sm h-64 flex-shrink-0">
          {/* Back card — offset top-right */}
          <TiltingCard
            src="/card/back.png"
            alt="Credens Card Back"
            className="absolute w-64 sm:w-72"
            style={{ top: "0px", right: "0px", rotate: "6deg", zIndex: 1 }}
          />
          {/* Front card — offset bottom-left */}
          <TiltingCard
            src="/card/front.png"
            alt="Credens Card Front"
            className="absolute w-64 sm:w-72"
            style={{ bottom: "-20px", left: "0px", rotate: "-4deg", zIndex: 2 }}
          />
        </div>
      </div>

    </div>
  );
}
