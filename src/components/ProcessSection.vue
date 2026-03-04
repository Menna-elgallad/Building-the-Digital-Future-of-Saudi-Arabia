<script setup>
import { ref, onMounted } from "vue";

const pathEl = ref(null);
const arrowsVisible = ref(false);

const steps = [
  { title: "Discovery", desc: "Understand goals and users" },
  { title: "Strategy", desc: "Define roadmap and priorities" },
  { title: "Design", desc: "Create prototypes and flows" },
  { title: "Development", desc: "Agile build, test, iterate" },
  { title: "Launch", desc: "Deploy and provide support" },
];

onMounted(() => {
  const el = pathEl.value;
  if (!el) return;

  // Initialise for animation: hide the full path
  const length = el.getTotalLength();
  el.style.strokeDasharray = `${length}`;
  el.style.strokeDashoffset = `${length}`;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        // Draw the line
        requestAnimationFrame(() => {
          el.style.transition =
            "stroke-dashoffset 2.8s cubic-bezier(0.4, 0, 0.2, 1)";
          el.style.strokeDashoffset = "0";
        });
        // Fade in chevrons after line finishes drawing
        setTimeout(() => {
          arrowsVisible.value = true;
        }, 2900);
        observer.disconnect();
      }
    },
    { threshold: 0.25 }
  );

  const section = document.getElementById("process");
  if (section) observer.observe(section);
});
</script>

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

      <!-- ─── Desktop: animated SVG diagram ─── -->
      <div class="hidden md:block mb-16">
        <!--
          Aspect-ratio wrapper: viewBox is 1160 × 440
          → padding-top = (440 / 1160) × 100 = 37.93%
          This makes the overlay div match the SVG's rendered size at any container width.
        -->
        <div class="relative w-full" style="padding-top: 37.93%">
          <!-- SVG snake path -->
          <svg
            class="absolute top-0 left-0 w-full h-full overflow-visible"
            viewBox="0 0 1160 440"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <!-- Endpoint bullets -->
            <circle cx="12" cy="220" r="10" fill="#2f3136" />
            <circle cx="1148" cy="220" r="10" fill="#2f3136" />

            <!--
              The snake path (draw-in animation):
              Box widths = 224 px each, corner radius = 30 px.
              Boxes (l = left edge, t = top of that box's half):
                Discovery    x 24–248   y 0–220   (top, open bottom)
                Strategy     x 248–472  y 220–440 (bottom, open top)
                Design       x 472–696  y 0–220   (top, open bottom)
                Development  x 696–920  y 220–440 (bottom, open top)
                Launch       x 920–1144 y 0–220   (top, open bottom)
            -->
            <path
              ref="pathEl"
              d="
                M 12 220
                L 24 220
                L 24 30   Q 24 0   54 0
                L 218 0   Q 248 0  248 30
                L 248 410 Q 248 440 278 440
                L 442 440 Q 472 440 472 410
                L 472 30  Q 472 0  502 0
                L 666 0   Q 696 0  696 30
                L 696 410 Q 696 440 726 440
                L 890 440 Q 920 440 920 410
                L 920 30  Q 920 0  950 0
                L 1114 0  Q 1144 0 1144 30
                L 1144 220
                L 1148 220
              "
              stroke="#2f3136"
              stroke-width="3"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Direction chevrons — fade in after path finishes drawing -->
            <g
              :style="{
                opacity: arrowsVisible ? 1 : 0,
                transition: 'opacity 0.6s ease',
              }"
            >
              <!-- ↓ Discovery → Strategy  (x=248, y=220) -->
              <polyline
                points="243,213 248,222 253,213"
                stroke="#2f3136"
                stroke-width="2.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <!-- ↑ Strategy → Design  (x=472, y=220) -->
              <polyline
                points="467,227 472,218 477,227"
                stroke="#2f3136"
                stroke-width="2.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <!-- ↓ Design → Development  (x=696, y=220) -->
              <polyline
                points="691,213 696,222 701,213"
                stroke="#2f3136"
                stroke-width="2.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <!-- ↑ Development → Launch  (x=920, y=220) -->
              <polyline
                points="915,227 920,218 925,227"
                stroke="#2f3136"
                stroke-width="2.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>

          <!-- Text labels (absolutely positioned to match each box in the viewBox) -->
          <div
            class="absolute top-0 left-0 w-full h-full pointer-events-none select-none"
          >
            <!-- Discovery: top-left box  (col 0, row top) -->
            <div
              class="absolute flex items-center justify-center text-center"
              style="left: 2.07%; width: 19.31%; top: 0; height: 50%"
            >
              <div>
                <p class="font-semibold text-lg text-ink">Discovery</p>
                <p class="text-sm text-gray-500 mt-1 leading-snug">
                  Understand goals<br />and users
                </p>
              </div>
            </div>

            <!-- Strategy: bottom box  (col 1, row bottom) -->
            <div
              class="absolute flex items-center justify-center text-center"
              style="left: 21.38%; width: 19.31%; top: 50%; height: 50%"
            >
              <div>
                <p class="font-semibold text-lg text-ink">Strategy</p>
                <p class="text-sm text-gray-500 mt-1 leading-snug">
                  Define roadmap<br />and priorities
                </p>
              </div>
            </div>

            <!-- Design: top box  (col 2, row top) -->
            <div
              class="absolute flex items-center justify-center text-center"
              style="left: 40.69%; width: 19.31%; top: 0; height: 50%"
            >
              <div>
                <p class="font-semibold text-lg text-ink">Design</p>
                <p class="text-sm text-gray-500 mt-1 leading-snug">
                  Create prototypes<br />and flows
                </p>
              </div>
            </div>

            <!-- Development: bottom box  (col 3, row bottom) -->
            <div
              class="absolute flex items-center justify-center text-center"
              style="left: 60%; width: 19.31%; top: 50%; height: 50%"
            >
              <div>
                <p class="font-semibold text-lg text-ink">Development</p>
                <p class="text-sm text-gray-500 mt-1 leading-snug">
                  Agile build, test,<br />iterate
                </p>
              </div>
            </div>

            <!-- Launch: top box  (col 4, row top) -->
            <div
              class="absolute flex items-center justify-center text-center"
              style="left: 79.31%; width: 19.31%; top: 0; height: 50%"
            >
              <div>
                <p class="font-semibold text-lg text-ink">Launch</p>
                <p class="text-sm text-gray-500 mt-1 leading-snug">
                  Deploy and<br />provide support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ─── Mobile: vertical step list ─── -->
      <div class="md:hidden space-y-4 mb-16">
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          class="border-2 border-gray-900 rounded-2xl p-5 flex gap-4 items-start"
        >
          <div
            class="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center text-sm font-bold flex-shrink-0"
          >
            {{ i + 1 }}
          </div>
          <div>
            <h4 class="font-bold text-ink">{{ step.title }}</h4>
            <p class="text-sm text-gray-600 mt-1">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Footer text -->
      <p class="leading-relaxed">
        Every engagement begins with a deep-dive discovery session where we map
        your business goals, user needs, and technical requirements. From there,
        we move through iterative design and development cycles — delivering
        working software early and often so you can see progress and provide
        feedback in real time.
      </p>
    </div>
  </section>
</template>
