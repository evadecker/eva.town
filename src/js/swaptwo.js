export default function swapTwo (array) {
  var temporaryValue
  var randomIndex1
  var randomIndex2

  // Pick a random element...
  randomIndex1 = Math.floor(Math.random() * array.length)
  randomIndex2 = Math.floor(Math.random() * array.length)

  // And swap it with the other random one
  temporaryValue = array[randomIndex1]
  array[randomIndex1] = array[randomIndex2]
  array[randomIndex2] = temporaryValue

  var swapped = array.join('')

  return swapped
}
