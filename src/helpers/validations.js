export const isEmpty = (val) => val.trim().length === 0;

export const isNotZero = (val) => val > 0;

export const isZero = (val) => val === 0;

export const isObject = (val) => Object.prototype.toString.call(val) === "[object Object]";

export const isValidEmail = (val) =>
  new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  ).test(val);

export const slugify = (text) => {
  return text
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .normalize("NFD") // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
};

export const replaceSpaces = (text) => {
  return text
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .normalize("NFD") // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, "%") // Replace spaces with %
}

// Donde:
// ^ indica que el patrón debe iniciar con los caracteres dentro de los corchetes
// [A - Z] indica que los caracteres admitidos son letras del alfabeto
// + indica que los caracteres dentro de los corchetes se pueden repetir
// $ indica que el patrón finaliza con los caracteres que están dentro de los corchetes.
// i indica que validaremos letras mayúsculas y minúsculas(case -insensitive)
// À-ÿ acentos
// despues de ÿ existe un espacio que valida los espacios
// {1,60} permite máximo 60 caracteres

export const isValidOnlyText = (val) => new RegExp('^[A-ZÀ-ÿ ]{1,60}$', 'i').test(val);

export const isValidOnlyNumber = (val) => new RegExp('^[0-9]+$', 'i').test(val);
