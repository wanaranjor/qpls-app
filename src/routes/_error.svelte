<script>
  export let status;
  export let error;
  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>QPLS</title>
</svelte:head>

<div class="h-screen w-screen">
  <div class="container mx-auto h-full flex justify-center items-center">
    <div
      class="flex flex-col text-xl sm:text-3xl text-center font-semibold items-center text-gray-800">
      <p class="py-3">QUALITY PROFESSIONAL SERVICES SAS</p>
      <p class="py-3">Algo anda mal...</p>
      <img class="fill-current w-1/2 py-3" src="404.svg" alt="404" />
      <p class="py-3 text-base sm:text-2xl">{status} {error.message}</p>
      <a
        class="bg-orange-500 border-orange-500 hover:bg-orange-700 hover:border-orange-700 rounded-full border text-white px-3 py-2 text-base"
        href="/">Volver</a>
    </div>
  </div>
</div>
