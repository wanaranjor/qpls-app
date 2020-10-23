<script>
  import ObjectStorage32 from "carbon-icons-svelte/lib/ObjectStorage32";
  import AddAlt32 from "carbon-icons-svelte/lib/AddAlt32";
  import VmdkDisk32 from "carbon-icons-svelte/lib/VmdkDisk32";
  import DataBaseAlt32 from "carbon-icons-svelte/lib/DataBaseAlt32";
  import Rocket20 from "carbon-icons-svelte/lib/Rocket20";
</script>

<div id="servicios" class="container mx-auto text-center">
  <h2 class="text-4xl text-gray-800 py-5">Oferta de Servicios</h2>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5 px-5 md:px-0">
    <div class="border p-5 flex flex-col justify-center">
      <ObjectStorage32
        class="fill-current text-orange-500 inline-block h-12 w-12 mx-auto" />
      <p class="py-3 text-bold text-2xl text-gray-800">Almacenamiento</p>
      <p class="py-3 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed
        doloribus maxime dolorum, facere sit aliquam, minima non corporis
        sapiente qui aperiam, adipisci optio! Reiciendis aspernatur facere
        maxime vitae mollitia!
      </p>
      <a href="/services/#storage">
        <AddAlt32 class="fill-current text-orange-500 inline-block mx-auto" />
      </a>
    </div>
    <div class="border p-5 flex flex-col justify-center">
      <Rocket20
        class="fill-current text-orange-500 inline-block h-12 w-12 mx-auto" />
      <p class="py-3 text-bold text-2xl text-gray-800">Migración</p>
      <p class="py-3 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed
        doloribus maxime dolorum, facere sit aliquam, minima non corporis
        sapiente qui aperiam, adipisci optio! Reiciendis aspernatur facere
        maxime vitae mollitia!
      </p>
      <a href="/services/#migrate">
        <AddAlt32 class="fill-current text-orange-500 inline-block mx-auto" />
      </a>
    </div>
    <div class="border p-5 flex flex-col justify-center">
      <DataBaseAlt32
        class="fill-current text-orange-500 inline-block h-12 w-12 mx-auto" />
      <p class="py-3 text-bold text-2xl text-gray-800 leading-tight">
        Sistemas Operativos
      </p>
      <p class="py-3 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed
        doloribus maxime dolorum, facere sit aliquam, minima non corporis
        sapiente qui aperiam, adipisci optio! Reiciendis aspernatur facere
        maxime vitae mollitia!
      </p>
      <a href="/services/#so">
        <AddAlt32 class="fill-current text-orange-500 inline-block mx-auto" />
      </a>
    </div>
    <div class="border p-5 flex flex-col justify-center">
      <VmdkDisk32
        class="fill-current text-orange-500 inline-block h-12 w-12 mx-auto" />
      <p class="py-3 text-bold text-2xl text-gray-800">Backup</p>
      <p class="py-3 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed
        doloribus maxime dolorum, facere sit aliquam, minima non corporis
        sapiente qui aperiam, adipisci optio! Reiciendis aspernatur facere
        maxime vitae mollitia!
      </p>
      <a href="/services/#backup">
        <AddAlt32 class="fill-current text-orange-500 inline-block mx-auto" />
      </a>
    </div>
  </div>
</div>
