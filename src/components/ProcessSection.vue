<template>
  <section
    id="process"
    class="bg-cream py-24 px-8 md:px-16 lg:px-24 border-t border-cream-border"
  >
    <div class="max-w-7xl mx-auto" data-aos="fade-up" data-aos-duration="600">
      <span class="section-tag">Our Process</span>
      <h2 class="section-title mt-1 mb-4">How We Work With You</h2>
      <p class="section-subtitle max-w-4xl mb-16">
        We follow a proven, collaborative process that keeps you involved at
        every stage — from initial concept through launch and beyond. No black
        boxes, no surprises.
      </p>

      <!-- Process Diagram -->
      <div class="relative mb-16 hidden md:block" style="height: 440px">
        <div
          class="flex items-stretch justify-center h-[440px] w-full mt-24 mb-20 ml-4"
        >
          <div class="flex flex-col justify-start w-[230px]">
            <div
              class="relative h-[220px] border-[3px] border-[#2f3136] border-b-0 rounded-t-[40px] flex flex-col text-center px-4 py-3"
            >
              <div
                class="absolute -left-[11.5px] -bottom-[10px] w-[20px] h-[20px] bg-[#2f3136] rounded-full"
              ></div>

              <h3 class="font-semibold text-2xl mb-2">Discovery</h3>
              <p class="text-[15px] leading-snug text-slate-800">
                Understand goals<br />and users
              </p>

              <div
                class="absolute -right-[7.5px] -bottom-[6px] w-[12px] h-[12px] border-b-[3px] border-r-[3px] border-[#2f3136] transform rotate-45 z-10"
              ></div>
            </div>
          </div>

          <div class="flex flex-col justify-end w-[230px] -ml-[3px]">
            <div
              class="relative h-[220px] border-[3px] border-[#2f3136] border-t-0 rounded-b-[40px] flex flex-col text-center px-4 py-3"
            >
              <h3
                class="font-semibold text-2xl mb-2 absolute bottom-16 left-1/2 -translate-x-1/2"
              >
                Strategy
              </h3>
              <p
                class="text-[15px] leading-snug w-full text-slate-800 absolute bottom-5 left-1/2 -translate-x-1/2"
              >
                Define roadmap<br />and priorities
              </p>

              <div
                class="absolute -right-[7.5px] -top-[6px] w-[12px] h-[12px] border-t-[3px] border-l-[3px] border-[#2f3136] transform rotate-45 z-10"
              ></div>
            </div>
          </div>

          <div class="flex flex-col justify-start w-[230px] -ml-[3px]">
            <div
              class="relative h-[220px] border-[3px] border-[#2f3136] border-b-0 rounded-t-[40px] flex flex-col text-center px-4 py-3"
            >
              <h3 class="font-semibold text-2xl mb-2">Design</h3>
              <p class="text-[15px] leading-snug text-slate-800">
                Create prototypes<br />and flows
              </p>

              <div
                class="absolute -right-[7.5px] -bottom-[6px] w-[12px] h-[12px] border-b-[3px] border-r-[3px] border-[#2f3136] transform rotate-45 z-10"
              ></div>
            </div>
          </div>

          <div class="flex flex-col justify-end w-[230px] -ml-[3px]">
            <div
              class="relative h-[220px] border-[3px] border-[#2f3136] border-t-0 rounded-b-[40px] flex flex-col text-center px-4 py-3"
            >
              <h3
                class="font-semibold text-2xl mb-2 absolute bottom-16 left-1/2 -translate-x-1/2"
              >
                Development
              </h3>
              <p
                class="text-[15px] leading-snug w-full text-slate-800 absolute bottom-5 left-1/2 -translate-x-1/2"
              >
                Agile build, test,<br />iterate
              </p>

              <div
                class="absolute -right-[7.5px] -top-[6px] w-[12px] h-[12px] border-t-[3px] border-l-[3px] border-[#2f3136] transform rotate-45 z-10"
              ></div>
            </div>
          </div>

          <div class="flex flex-col justify-start w-[230px] -ml-[3px]">
            <div
              class="relative h-[220px] border-[3px] border-[#2f3136] border-b-0 rounded-t-[40px] flex flex-col text-center px-4 py-3"
            >
              <h3 class="font-semibold text-2xl mb-2">Launch</h3>
              <p class="text-[15px] leading-snug text-slate-800">
                Deploy and<br />provide support
              </p>

              <div
                class="absolute -right-[11.5px] -bottom-[10px] w-[20px] h-[20px] bg-[#2f3136] rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer text -->
      <p class="text-gray-600 leading-relaxed max-w-4xl">
        Every engagement begins with a deep-dive discovery session where we map
        your business goals, user needs, and technical requirements. From there,
        we move through iterative design and development cycles — delivering
        working software early and often so you can see progress and provide
        feedback in real time.
      </p>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { title: "Discovery", desc: "Understand goals and users" },
  { title: "Strategy", desc: "Define roadmap and priorities" },
  { title: "Design", desc: "Create prototypes and flows" },
  { title: "Development", desc: "Agile build, test, iterate" },
  { title: "Launch", desc: "Deploy and provide support" },
];
</script>
