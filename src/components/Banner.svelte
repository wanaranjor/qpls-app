<script>
  import Contact from "./Contact.svelte";
</script>

<section
  id="inicio"
  class="bg-cover bg-center h-56 md:h-sm flex items-center"
  style="background-image: url(global.webp)">
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-3 py-5 container mx-auto text-center md:text-right">
    <div class="text-white px-3 md:px-0 justify-center">
      <h1 class="text-lg md:text-5xl font-semibold  leading-none">
        QUALITY PROFESSIONAL SERVICES SAS
      </h1>
      <p class="text-xl py-3">Servicios de Calidad</p>
      <!-- <a
        href="/contact"
        class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">Contáctenos</a> -->
      <Contact />
    </div>
  </div>
</section>
