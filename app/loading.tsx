function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-linear-to-b from-pink-50 to-sky-50">
      <style>{`
        @keyframes cute-bounce {
          0%, 100% { transform: translateY(0) scale(1, 1); }
          40% { transform: translateY(-28px) scale(0.95, 1.05); }
          60% { transform: translateY(-28px) scale(0.95, 1.05); }
        }
        @keyframes cute-squish {
          0%, 100% { transform: scaleX(1); opacity: 0.35; }
          50% { transform: scaleX(0.6); opacity: 0.2; }
        }
        @keyframes cute-wiggle {
          0%, 100% { transform: rotate(-6deg); }
          50% { transform: rotate(6deg); }
        }
      `}</style>

      {/* Bouncing blob friend */}
      <div className="relative flex flex-col items-center">
        <div
          className="relative h-24 w-24 rounded-[42%_58%_55%_45%/55%_45%_55%_45%] bg-linear-to-br from-pink-300 to-rose-400 shadow-lg"
          style={{ animation: "cute-bounce 1.2s ease-in-out infinite" }}
        >
          {/* eyes */}
          <span className="absolute left-6 top-9 h-2.5 w-2.5 rounded-full bg-white" />
          <span className="absolute right-6 top-9 h-2.5 w-2.5 rounded-full bg-white" />
          {/* blush */}
          <span className="absolute left-4 top-12 h-2 w-3 rounded-full bg-rose-200/70" />
          <span className="absolute right-4 top-12 h-2 w-3 rounded-full bg-rose-200/70" />
          {/* mouth */}
          <span className="absolute left-1/2 top-14 h-1.5 w-3 -translate-x-1/2 rounded-b-full bg-white/90" />
        </div>
        {/* shadow */}
        <div
          className="mt-3 h-2.5 w-20 rounded-full bg-rose-400/30 blur-[1px]"
          style={{ animation: "cute-squish 1.2s ease-in-out infinite" }}
        />
      </div>

      <div className="flex items-center gap-1 text-lg font-medium text-rose-500">
        <span
          className="inline-block"
          style={{ animation: "cute-wiggle 1.4s ease-in-out infinite" }}
        >
          Loading
        </span>
        <span className="inline-block animate-bounce [animation-delay:-0.3s]">.</span>
        <span className="inline-block animate-bounce [animation-delay:-0.15s]">.</span>
        <span className="inline-block animate-bounce">.</span>
      </div>
    </div>
  )
}

export default Loading
