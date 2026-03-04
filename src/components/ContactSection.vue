<template>
  <section
    id="contact"
    class="bg-cream border-t border-cream-border grid grid-cols-1 md:grid-cols-3 min-w-0"
  >
    <!-- Left: Image -->
    <div
      class="relative overflow-hidden min-h-[50vh] md:min-h-full col-span-1 order-2 md:order-1"
      data-aos="fade-left"
      data-aos-duration="600"
    >
      <img
        src="https://thumbs.dreamstime.com/b/business-handshake-two-men-closing-deal-office-46145126.jpg"
        alt="Two professionals shaking hands in a modern office"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Right: Contact Info -->
    <div
      class="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-40 col-span-2 order-1 md:order-2"
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-delay="50"
    >
      <h2 class="text-4xl md:text-5xl font-bold text-ink leading-tight mb-5">
        Let's Build Something Great Together
      </h2>
      <p class="text-gray-600 leading-relaxed mb-10">
        Whether you're launching a new digital product, modernizing existing
        systems, or automating manual workflows — we're ready to bring your
        vision to life with speed, quality, and deep local expertise.
      </p>

      <!-- Contact Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <!-- Email -->
        <div class="bg-cream-dark p-5">
          <div class="flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span class="font-bold text-ink">Email</span>
          </div>
          <p class="text-sm text-gray-600 break-all">hello@yourcompany.sa</p>
        </div>

        <!-- Phone -->
        <div class="bg-cream-dark p-5">
          <div class="flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span class="font-bold text-ink">Phone</span>
          </div>
          <p class="text-sm text-gray-600">+966 XX XXX XXXX</p>
        </div>

        <!-- Location -->
        <div class="bg-cream-dark p-5">
          <div class="flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="font-bold text-ink">Location</span>
          </div>
          <p class="text-sm text-gray-600">Riyadh, Saudi Arabia</p>
        </div>
      </div>

      <!-- Quote -->
      <blockquote class="border-l-2 border-ink pl-5 py-6">
        <p class="text-gray-700 leading-relaxed">
          We don't just build apps — we build the digital infrastructure that
          powers your business forward.
        </p>
      </blockquote>
    </div>
  </section>
</template>
