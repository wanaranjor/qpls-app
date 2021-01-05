<script>
  import Contact from "./Contact.svelte";
</script>

<section
  id="inicio"
  class="flex items-center h-56 bg-center bg-cover md:h-sm"
  style="background-image: url(global.webp)">
  <div
    class="container grid grid-cols-1 gap-3 py-5 mx-auto text-center md:grid-cols-2 md:text-right">
    <div class="justify-center px-3 text-white md:px-0">
      <h1 class="text-lg font-semibold leading-none md:text-5xl">
        QUALITY PROFESSIONAL SERVICES SAS
      </h1>
      <p class="py-3 text-xl">
        Servicios de alta calidad, su socio estratégico.
      </p>
      <!-- <a
        href="/contact"
        class="px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700">Contáctenos</a> -->
      <Contact />
    </div>
  </div>
</section>
