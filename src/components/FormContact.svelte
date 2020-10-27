<script>
  import {
    isValidEmail,
    isEmpty,
    isValidOnlyText,
    isValidOnlyNumber,
  } from "../helpers/validations.js";
  // import { addContactUs } from "../services/services.js";
  import { alertMixin } from "../helpers/sweetalert2.js";

  let names = "";
  let phone = "";
  let email = "";
  let message = "";
  let agree = false;

  $: namesValid = isValidOnlyText(names.trim());
  $: phoneValid = !isEmpty(phone);
  $: emailValid = isValidEmail(email);
  $: messageValid = !isEmpty(message);

  $: formIsValid = namesValid && emailValid && agree;

  const handleSubmit = async () => {
    let results = await addContactUs(names, phone, email, message, agree);
    if (results) {
      names = "";
      phone = "";
      email = "";
      message = "";
      agree = false;
      alertMixin("success", "center", "Mensaje enviado correctamente.");
    } else {
      console.error("no se creo correctamente");
    }
  };
</script>

<div
  class="container mx-auto justify-center items-center p-3 text-base max-w-lg">
  <div class="border px-6 bg-white">
    <div class="flex flex-row justify-between items-center">
      <h3 class="text-xl text-gray-900 font-semibold my-3">Contacto</h3>
      <span class="mx-2 text-xs text-gray-700">
        <span class="text-red-700 font-bold text-base">*</span>
        campo obligatorio
      </span>
    </div>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3 mb-2">
          <label class="block text-gray-900 mb-2">
            Nombres
            <span class="text-red-700 font-bold">*</span>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700
              border border-gray-200 rounded p-2 leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="names"
              bind:value={names} />
          </label>
        </div>
        <div class="w-full px-3 mb-2">
          <label class="block text-gray-900 mb-2">
            Correo
            <span class="text-red-700 font-bold">*</span>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700
              border border-gray-200 rounded p-2 leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500 lowercase"
              type="email"
              name="email"
              bind:value={email} />
          </label>
        </div>
        <div class="w-full px-3 mb-2">
          <label class="block text-gray-900 mb-2">
            Teléfono de contacto
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700
              border border-gray-200 rounded p-2 leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500 uppercase"
              type="tel"
              name="phone"
              bind:value={phone} />
          </label>
        </div>
        <div class="w-full px-3 mb-2">
          <label class="block text-gray-900 mb-2">
            Mensaje
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700
              border border-gray-200 rounded p-2 leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500"
              name="message"
              bind:value={message} />
          </label>
        </div>
        <div class="w-full px-3 mb-2">
          <p class="text-gray-900 mt-3">Acuerdo tratamiento de datos</p>
          <div class="flex items-baseline space-x-2 mt-2">
            <input
              class="inline-block"
              type="checkbox"
              name="agree"
              bind:checked={agree} />
            <span class="text-red-700 font-bold">*</span>
            <p class="text-gray-900 text-xs leading-tight">
              Doy mi consentimiento para que este sitio web almacene la
              información enviada para que puedan responder a mi consulta.
            </p>
          </div>
          <div class="w-full">
            <button
              class={formIsValid ? 'w-full px-4 py-2 font-bold text-white bg-yellow-950 rounded hover:bg-yellow-700 focus:outline-none focus:shadow-outline my-3' : 'w-full px-4 py-2 font-bold text-white bg-yellow-950 rounded opacity-50 cursor-not-allowed my-3'}
              disabled={!namesValid || !emailValid || !agree}
              type="submit">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
