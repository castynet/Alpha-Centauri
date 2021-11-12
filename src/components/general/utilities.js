export function mpesaNumberCheck(number) {
  // return prefix eg 07 | +254 | 254
  const returnPrefix = "254";

  // the actual regex to check the mpesa number
  const re =
    /^((?:254|\+254|0)((?<xa>7(?:(?:[01249][0-9])|(?:5[7-9])|(6[8-9]))[0-9]{6})|(?<xb>1(?:(?:[1][0-1]))[0-9]{6})))$/;

  // check if our input matches the regex
  if (re.test(number)) {
    var x = number.match(re);
    if (x.groups.xa) {
      return returnPrefix + x.groups.xa;
    } else if (x.groups.xb) {
      return returnPrefix + x.groups.xb;
    }
  } else return "The value is not a valid Mpesa Number";
}

export function Slugify(text) {
  const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  const to = "aaaaaeeeeeiiiiooooouuuunc------";

  const newText = text
    .split("")
    .map((letter, i) =>
      letter.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
    );

  return newText
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-y-") // Replace & with 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-"); // Replace multiple - with single -
}
