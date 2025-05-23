export function TimelineSteps() {
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-36 lg:bottom-0 w-1 translate-x-1/2 z-0"></div>

      {/* Step 1 */}
      <div className="flex flex-col md:flex-row items-start mb-8 md:mb-12 relative z-10">
        <div className="flex items-center w-full md:w-full justify-start md:justify-end pr-0 md:pr-16 pl-16 md:pl-0 mb-4 md:mb-0">
          <div className="bg-black/20 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20 w-full max-w-md">
            <h3 className="text-2xl text-white font-semibold mb-3">
              Step 1: Export Chat
            </h3>
            <p className="text-white">
              Open WhatsApp, go to your group chat, tap the three dots menu, and
              select "Export chat" (without media).
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 shadow-lg absolute left-6 md:left-[95%] -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2">
          <span className="text-white font-bold">1</span>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col md:flex-row-reverse items-start mb-8 md:mb-12 relative z-10">
        <div className="flex items-center w-full md:w-full justify-start md:justify-start pr-0 pl-16 md:pl-16 mb-4 md:mb-0">
          <div className="bg-black/20 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/30 w-full max-w-md">
            <h3 className="text-2xl text-white font-semibold mb-3">
              Step 2: Upload Chat
            </h3>
            <p className="text-white">
              Save the exported chat file to your device, then click on the
              upload area above to analyze it.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 shadow-lg absolute left-6 md:left-0 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2">
          <span className="text-white font-bold">2</span>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col md:flex-row items-start relative z-10">
        <div className="flex items-center w-full md:w-full justify-start md:justify-end pr-0 md:pr-16 pl-16 md:pl-0 mb-4 md:mb-0">
          <div className="bg-black/20 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20 w-full max-w-md">
            <h3 className="text-2xl text-white font-semibold mb-3">
              Step 3: Enjoy Wrapped
            </h3>
            <p className="text-white">
              View beautiful visualizations and insights about your group
              conversation - see who talks the most, peak activity times, and
              more!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 shadow-lg absolute left-6 md:left-[95%] -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2">
          <span className="text-white font-bold">3</span>
        </div>
      </div>
    </div>
  );
}
