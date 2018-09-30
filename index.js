const generate1000PINS = (pins) => {
  const generatedPins = pins || []
  const pin = createPin()
  if (!generatedPins.includes(pin)) {
    generatedPins.push(pin)
  }
  if (generatedPins.length === 1000) {
    console.log(generatedPins.length, generatedPins[0], generatedPins[999])
    return generatedPins
  } else {
    return generate1000PINS(generatedPins)
  }
}

const createPin = (partialPin) => {
  const pin = partialPin || []
  if (pin.length < 4) {
    const digit = Math.floor(Math.random() * 10)
    if (digit !== pin[pin.length - 1]) {
      pin.push(digit)
    }
    return createPin(pin)
  } else if (pin.length === 4 && !checkIncrement(pin)) {
    return pin
  } else {
    return createPin()
  }
}

const checkIncrement = (pin) => {
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] === pin[i + 1] + 1 && pin[i] === pin[i + 2] + 2) {
      return true
    }
    if (pin[i] === pin[i + 1] - 1 && pin[i] === pin[i + 2] - 2) {
      return true
    }
  }
  return false
}

generate1000PINS()
