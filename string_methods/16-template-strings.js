/**
 * Create meaninful string not using string concatenation but template string(literal)
 */

function printMyDescription() {
  let name = "Monika";
  let place = "Poland";
  let isPrime = (bit) => {
    return bit === "P" ? "Prime" : "Non-Prime";
  };

  let messageTemplateStr = `Mrs. ${name} is  from ${place}. She is a ${isPrime(
    "P"
  )} member.`;
  console.log(messageTemplateStr);
}

printMyDescription();
