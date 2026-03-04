<template>
  <section class="bg-cream border-t border-cream-border">
    <div
      class="max-w-full grid grid-cols-1 md:grid-cols-3 md:items-stretch min-w-0"
    >
      <!-- Left: Image (spans same height as text container) -->
      <div
        class="overflow-hidden min-h-0 h-full col-span-1 order-2 md:order-1"
        data-aos="fade-left"
        data-aos-duration="600"
      >
        <img
          src="https://i.pinimg.com/736x/51/30/08/51300815829d4e15c15d48582be53384.jpg"
          alt="Barber shop interior"
          class="w-full h-full object-cover object-center"
        />
      </div>

      <!-- Right: Content (scrolls if taller than 700px) -->
      <div
        class="flex flex-col justify-center px-10 md:px-14 lg:px-20 py-20 min-h-0 min-w-0 col-span-2 order-1 md:order-2 overflow-x-hidden"
        data-aos="fade-right"
        data-aos-duration="600"
      >
        <span class="section-tag w-fit"> ✅ Completed </span>

        <h2 class="text-4xl md:text-5xl font-bold text-ink mb-4">
          Barber Booking App
        </h2>
        <p class="text-gray-600 leading-relaxed mb-8">
          A fully developed and successfully delivered booking platform tailored
          for barbershops across Saudi Arabia. This was our first flagship
          product — built from the ground up to solve real scheduling pain
          points for shop owners and their customers.
        </p>

        <!-- Feature Cards: 1 col on mobile, 2 cols from sm; card 3 full width on sm+ -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-2 min-w-0"
        >
          <!-- Feature 1 -->
          <div
            class="shadow-[inset_0_10px_0_0_#000] p-6 relative pt-10 border-t-0 border-gray-300 border-solid border-2"
          >
            <div
              class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center font-bold text-sm"
            >
              1
            </div>
            <h4 class="font-bold text-ink text-lg mb-2">Smart Scheduling</h4>
            <p class="text-sm text-gray-600 leading-relaxed">
              Customers book appointments in seconds, selecting their preferred
              barber, service, and time slot — eliminating wait times and
              walk-in chaos.
            </p>
          </div>

          <!-- Feature 2 -->
          <div
            class="shadow-[inset_0_10px_0_0_#000] p-6 relative pt-10 border-t-0 border-gray-300 border-solid border-2"
          >
            <div
              class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center font-bold text-sm"
            >
              2
            </div>
            <h4 class="font-bold text-ink text-lg mb-2">Service Management</h4>
            <p class="text-sm text-gray-600 leading-relaxed">
              Shop owners manage their full service menu, pricing, and barber
              availability from a single intuitive dashboard.
            </p>
          </div>

          <!-- Feature 3: full width on sm+ -->
          <div
            class="col-span-1 sm:col-span-2 shadow-[inset_0_10px_0_0_#000] p-6 relative pt-10 border-t-0 border-gray-300 border-solid border-2"
          >
            <div
              class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center font-bold text-sm"
            >
              3
            </div>
            <h4 class="font-bold text-ink text-lg mb-2">Customer Engagement</h4>
            <p class="text-sm text-gray-600 leading-relaxed">
              Built-in notifications, booking history, and loyalty features keep
              customers coming back and drive repeat visits.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
