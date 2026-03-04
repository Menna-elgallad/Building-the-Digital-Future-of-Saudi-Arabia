<template>
  <section
    class="bg-cream border-t border-cream-border grid grid-cols-1 md:grid-cols-3 min-w-0"
  >
    <!-- Left: Content -->
    <div
      class="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 col-span-2 order-1 md:order-1"
      data-aos="fade-right"
      data-aos-duration="600"
    >
      <span
        class="inline-flex items-center gap-2 border border-gray-300 text-xs px-3 py-1 uppercase tracking-wide mb-4 w-fit"
      >
        🔧 In Development
      </span>

      <h2 class="text-4xl md:text-5xl font-bold text-ink mb-4">
        Daily Report Tool
      </h2>
      <p class="text-gray-600 leading-relaxed mb-8">
        A smart digital reporting and workflow automation platform designed to
        optimize field operations and daily activity tracking. Built for teams
        that need real-time visibility into what's happening on the ground —
        from construction sites to facility management to logistics operations.
      </p>

      <!-- Steps -->
      <div class="space-y-0 mb-8">
        <!-- Step 1 -->
        <div class="flex gap-5 items-start">
          <div class="flex flex-col items-center">
            <div class="chevron-banner">1</div>
            <div class="w-px bg-cream-border flex-1 my-1 h-8"></div>
          </div>
          <div class="pb-6">
            <h4 class="font-bold text-ink mb-1">Capture</h4>
            <p class="text-sm text-gray-600 leading-relaxed">
              Field teams log activities, photos, and updates directly from
              their mobile devices in real time.
            </p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="flex gap-5 items-start">
          <div class="flex flex-col items-center">
            <div class="chevron-banner">2</div>
            <div class="w-px bg-cream-border flex-1 my-1 h-8"></div>
          </div>
          <div class="pb-6">
            <h4 class="font-bold text-ink mb-1">Automate</h4>
            <p class="text-sm text-gray-600 leading-relaxed">
              Reports are automatically compiled, formatted, and routed to the
              right stakeholders — no manual assembly.
            </p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="flex gap-5 items-start">
          <div class="flex flex-col items-center">
            <div class="chevron-banner">3</div>
          </div>
          <div>
            <h4 class="font-bold text-ink mb-1">Analyze</h4>
            <p class="text-sm text-gray-600 leading-relaxed">
              Dashboards surface trends, bottlenecks, and performance metrics
              for data-driven decision-making.
            </p>
          </div>
        </div>
      </div>

      <!-- Key Benefit -->
      <div class="bg-gray-300 p-5 border-l-0 flex gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-ink flex-shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <p class="text-sm text-gray-700 leading-relaxed">
          <span class="font-bold">Key benefit:</span> The Daily Report Tool
          eliminates hours of manual paperwork each week, freeing teams to focus
          on execution while giving leadership full transparency into
          operations.
        </p>
      </div>
    </div>

    <!-- Right: Image -->
    <div
      class="relative overflow-hidden min-h-[50vh] md:min-h-full col-span-1 order-2 md:order-2"
      data-aos="fade-left"
      data-aos-duration="600"
      data-aos-delay="100"
    >
      <img
        src="https://www.strath.ac.uk/media/1newwebsite/courses/engineering/600x600/Adv_Construction_Technology.jpg"
        alt="Construction worker with digital tools"
        class="w-full h-full object-cover"
      />
    </div>
  </section>
</template>
