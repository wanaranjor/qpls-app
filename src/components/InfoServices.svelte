<script>
  import ObjectStorage32 from "carbon-icons-svelte/lib/ObjectStorage32";
  // import AddAlt32 from "carbon-icons-svelte/lib/AddAlt32";
  import VmdkDisk32 from "carbon-icons-svelte/lib/VmdkDisk32";
  import DataBaseAlt32 from "carbon-icons-svelte/lib/DataBaseAlt32";
  import Rocket20 from "carbon-icons-svelte/lib/Rocket20";
</script>

<div class="bg-gray-100 ">
  <p class="text-4xl text-center text-gray-800 py-5">Nuestros Servicios</p>
  <div
    id="storage"
    class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-6 justify-center sm:py-12">
    <div class="relative py-3 max-w-xs sm:max-w-md mx-auto">
      <div
        class="hidden md:flex absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
      <div class="relative p-10 bg-white shadow-lg sm:rounded-3xl">
        <div class="max-w-xs md:max-w-md mx-auto">
          <div>
            <ObjectStorage32
              class="fill-current text-orange-500 inline-block h-12 w-12 mx-auto" />
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <p class="text-2xl font-bold">Servicios de Almacenamiento:</p>
              <ul class="list-disc space-y-2">
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Creación de raid, aggr, volúmenes, luns.</p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Creación de host y mapeo de unidades.</p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Integración con AD.</p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Presentación de recursos compartidos.</p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Actualización de firmware.</p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Soporte de administración del almacenamiento.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Pruebas de DRP.</p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Instalación y/o configuración de multipath.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Creación, modificación de la zonificación.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center">
      <img src="logos.webp" alt="logos" />
    </div>
  </div>

  <div
    id="migrate"
    class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-6 justify-center sm:py-12">
    <div class="w-full flex items-center">
      <img src="logos2.webp" alt="logos" />
    </div>
    <div class="relative py-3 max-w-xs sm:max-w-md mx-auto">
      <div
        class="hidden md:flex absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
      <div class="relative p-10 bg-white shadow-lg sm:rounded-3xl">
        <div class="max-w-xs md:max-w-md mx-auto">
          <div>
            <Rocket20
              class="fill-current text-orange-500 inline-block h-12 w-12 mx-auto" />
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <p class="text-2xl font-bold">Servicios de Migración:</p>
              <ul class="list-disc space-y-2">
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Migración de data entre almacenamientos de la misma marca.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Migración de data entre almacenamientos de diferentes
                    marcas.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Migración de datos SAN y NAS.</p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Migración de data con appliance físicos y virtuales, basados
                    en Cirrus.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Migración de data en aplicaciones Oracle, Sql, Exchange,
                    Lync, etc.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Migración de data en sistemas operativos Microsoft, Vmware,
                    Linux, Unix, AIX, HP-UX.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Pruebas de DRP.</p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Instalación y/o configuración de multipath.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    id="so"
    class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-6 justify-center sm:py-12">
    <div class="relative py-3 max-w-xs sm:max-w-md mx-auto">
      <div
        class="hidden md:flex absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
      <div class="relative p-10 bg-white shadow-lg sm:rounded-3xl">
        <div class="max-w-xs md:max-w-md mx-auto">
          <div>
            <DataBaseAlt32
              class="fill-current text-orange-500 inline-block h-12 w-12 mx-auto" />
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <p class="text-2xl font-bold">
                Servicios de Sistemas Operativos:
              </p>
              <ul class="list-disc space-y-2">
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Instalación y configuración de sistemas operativos.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Creación y administración de usuarios y perfiles de
                    seguridad.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Actualizaciones de Sistema Operativo parches (Windows,
                    Linux, HP-UX, AIX, Solaris).
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Administración de Hypervisor (VMware, Hyper-V, OVM).
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Creación de maquinas virtuales.</p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Configuración y administración de conexiones remotas.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Montaje y creación de unidades presentadas desde la SAN.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center">
      <img src="logos3.webp" alt="logos" />
    </div>
  </div>

  <div
    id="backup"
    class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-6 justify-center sm:py-12">
    <div class="w-full flex items-center">
      <img src="logos4.webp" alt="logos" />
    </div>
    <div class="relative py-3 max-w-xs sm:max-w-md mx-auto">
      <div
        class="hidden md:flex absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
      <div class="relative p-10 bg-white shadow-lg sm:rounded-3xl">
        <div class="max-w-xs md:max-w-md mx-auto">
          <div>
            <VmdkDisk32
              class="fill-current text-orange-500 inline-block h-12 w-12 mx-auto" />
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <p class="text-2xl font-bold">Servicios de Backup:</p>
              <ul class="list-disc space-y-2">
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Diseño, implementación y configuración de arquitectura de
                    Backup.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">
                    Administración y monitoreo de plataformas de Backup.
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Administración de medios (LTO).</p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Reportes de actividades de Backup.</p>
                </li>
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <svg
                      class="flex-shrink-0 h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="ml-2">Ejecución y restauración de Backup.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
