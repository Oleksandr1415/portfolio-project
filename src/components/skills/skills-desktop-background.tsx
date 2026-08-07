export default function skillsDesktopBackground() {
  return (
    <div data-slot="skills-desktop-background-position-container" className="absolute inset-0">
      <div
        data-slot="skills-desktop-background-container"
        className="relative z-1 hidden aspect-square size-full h-[90vh] flex-col items-center overflow-hidden md:flex"
      >
        {/* <!--  SPACE BACKGROUND --> */}

        <div
          data-slot="spaceBackground"
          className="-p-20 absolute top-1/2 left-1/2 z-1 size-[300%] w-screen -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0f]"
        >
          {/* Fog-Layer */}
          <div
            className="bg-animate-pulse animation-duration-[4s] absolute inset-0 opacity-70 blur-3xl"
            style={{
              background: `
        radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.25), transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.20), transparent 50%),
        radial-gradient(circle at 50% 85%, rgba(139, 92, 246, 0.18), transparent 50%)
        `,
            }}
          ></div>
          {/* Stars-Layer */}
          <div
            className="animate-slow-spin absolute inset-0 opacity-50"
            style={{
              backgroundImage: `
    radial-gradient(1.5px 1.5px at 20px 30px, white, transparent),
    radial-gradient(1px 1px at 60px 70px, white, transparent),
    radial-gradient(1px 1px at 90px 40px, white, transparent),
    radial-gradient(1.5px 1.5px at 130px 110px, white, transparent),
    radial-gradient(1px 1px at 160px 20px, white, transparent),
    radial-gradient(1px 1px at 30px 150px, white, transparent)
    `,
              backgroundRepeat: 'repeat',
              backgroundSize: '180px 180px',
            }}
          ></div>
          <div
            className="animate-slow-spin shimmer-reverse absolute inset-0 opacity-50"
            style={{
              backgroundImage: `
    radial-gradient(1.5px 1.5px at 20px 30px, white, transparent),
    radial-gradient(1px 1px at 60px 70px, white, transparent),
    radial-gradient(1px 1px at 90px 40px, white, transparent),
    radial-gradient(1.5px 1.5px at 130px 110px, white, transparent),
    radial-gradient(1px 1px at 160px 20px, white, transparent),
    radial-gradient(1px 1px at 30px 150px, white, transparent)
    `,
              backgroundRepeat: 'repeat',
              backgroundSize: '180px 180px',
            }}
          ></div>
          <div
            className="animate-slow-spin shimmer-reverse absolute inset-0 opacity-50"
            style={{
              backgroundImage: `
    radial-gradient(1.5px 1.5px at 20px 30px, white, transparent),
    radial-gradient(1px 1px at 60px 70px, white, transparent),
    radial-gradient(1px 1px at 90px 40px, white, transparent),
    radial-gradient(1.5px 1.5px at 130px 110px, white, transparent),
    radial-gradient(1px 1px at 160px 20px, white, transparent),
    radial-gradient(1px 1px at 30px 150px, white, transparent)
    `,
              backgroundRepeat: 'repeat',
              backgroundSize: '100px 100px',
            }}
          ></div>
        </div>
        <div
          data-slot="skills-desktop-background-vignette"
          className="pointer-events-none absolute inset-0 z-2 size-full shadow-[inset_0_0_60px_30px_#000000]"
        ></div>
      </div>
    </div>
  );
}
