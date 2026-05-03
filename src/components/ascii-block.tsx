export function AsciiBlock() {
  return (
    <div className="text-center px-6 md:px-10 py-20 relative z-10">
      <pre className="text-[7px] sm:text-[9px] md:text-[10px] leading-[1.2] text-neutral-600 font-[var(--font-mono)] whitespace-pre inline-block tracking-wide">
        <span className="text-[#14F195]">{"  ██████╗ ██╗  ██╗ █████╗ ██╗███╗   ██╗███████╗██╗    ██╗"}</span>
{"  ██╔════╝ ██║  ██║██╔══██╗██║████╗  ██║██╔════╝██║    ██║"}
{"  ██║      ███████║███████║██║██╔██╗ ██║█████╗  ██║ █╗ ██║"}
{"  ██║      ██╔══██║██╔══██║██║██║╚██╗██║██╔══╝  ██║███╗██║"}
        <span className="text-[#14F195]">{"  ╚██████╗ ██║  ██║██║  ██║██║██║ ╚████║███████╗╚███╔███╔╝"}</span>
{"   ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝ "}
      </pre>
      <p className="text-[11px] text-neutral-600 tracking-widest mt-4">
        ship on ethereum — idea to launch
      </p>
    </div>
  );
}
