<template>
  <section
    class="bg-cream border-t border-cream-border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:items-stretch min-w-0"
  >
    <!-- Left: Content (first on mobile, right on desktop) -->
    <div
      class="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 order-1 md:order-2 col-span-2"
      data-aos="fade-left"
      data-aos-duration="600"
    >
      <span
        class="inline-flex items-center gap-2 border border-gray-300 text-xs px-3 py-1 uppercase tracking-wide mb-4 w-fit"
      >
        🔧 In Development
      </span>

      <h2 class="text-4xl md:text-5xl font-bold text-ink mb-4">
        Virtual Clinic App
      </h2>
      <p class="text-gray-600 leading-relaxed mb-8">
        An advanced digital healthcare platform currently under active
        development. Designed to meet the Kingdom's rapidly growing demand for
        telemedicine, this application will connect patients with licensed
        practitioners through a seamless, secure virtual experience.
      </p>

      <!-- Feature list with icons -->
      <div class="space-y-6">
        <!-- Virtual Consultations -->
        <div class="flex gap-4 items-start">
          <div class="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h4 class="font-bold text-ink mb-1">Virtual Consultations</h4>
            <p class="text-sm text-gray-600 leading-relaxed">
              HD video and audio consultations with licensed physicians,
              available from anywhere in the Kingdom — no clinic visit required.
            </p>
          </div>
        </div>

        <!-- Smart Appointment System -->
        <div class="flex gap-4 items-start">
          <div class="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h4 class="font-bold text-ink mb-1">Smart Appointment System</h4>
            <p class="text-sm text-gray-600 leading-relaxed">
              Intelligent scheduling that matches patients with the right
              specialist based on availability, language, and medical needs.
            </p>
          </div>
        </div>

        <!-- Patient Management -->
        <div class="flex gap-4 items-start">
          <div class="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <div>
            <h4 class="font-bold text-ink mb-1">Patient Management</h4>
            <p class="text-sm text-gray-600 leading-relaxed">
              Comprehensive digital health records, prescription management, and
              follow-up tracking — all in one secure platform.
            </p>
          </div>
        </div>

        <!-- Compliance & Security -->
        <div class="flex gap-4 items-start">
          <div class="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div>
            <h4 class="font-bold text-ink mb-1">Compliance & Security</h4>
            <p class="text-sm text-gray-600 leading-relaxed">
              Built to meet Saudi healthcare data regulations with end-to-end
              encryption and role-based access controls.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right: Image (second on mobile, left on desktop) -->
    <div
      class="relative overflow-hidden min-h-[50vh] md:min-h-full order-2 md:order-1 col-span-1"
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-delay="100"
    >
      <img
        src="https://i.vimeocdn.com/video/2115216493-6ff656e154b05de61fdd19210d9f1c7f952495f54cf6918dacba8d724597988b-d?f=webp"
        alt="Doctor using tablet for telemedicine consultation"
        class="w-full h-full min-h-[280px] md:min-h-0 object-cover object-center"
      />
    </div>
  </section>
</template>
