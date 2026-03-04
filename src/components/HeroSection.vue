<template>
  <section
    id="home"
    class="min-h-screen grid grid-cols-1 md:grid-cols-3 min-w-0"
  >
    <!-- Left: Text -->
    <div
      class="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-cream order-1 col-span-2"
      data-aos="fade-right"
      data-aos-duration="600"
    >
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6"
      >
        Building the Digital Future of Saudi Arabia
      </h1>
      <p class="text-gray-600 text-lg leading-relaxed mb-10">
        We are a Saudi technology startup specialized in digital solutions and
        smart application development — delivering real products that solve real
        business challenges across the Kingdom.
      </p>
    </div>

    <!-- Right: Image -->
    <div
      class="relative overflow-hidden min-h-[50vh] md:min-h-full order-2 col-span-1"
      data-aos="fade-left"
      data-aos-duration="600"
      data-aos-delay="150"
    >
      <img
        src="https://img.freepik.com/free-photo/business-desk-arrangement-with-laptop_23-2149073039.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Modern workspace with laptop overlooking Saudi cityscape"
        class="w-full h-full object-cover"
      />
    </div>
  </section>
</template>
