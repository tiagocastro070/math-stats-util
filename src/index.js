
function sum(...args) {
  return args.reduce((sum, current) => sum + current, 0)
}

// Average
function average(...args) {
  return args.length ? sum(...args) / args.length : undefined
}

// mode (moda)
// A Moda (Mo) é o valor que aparece com mais frequência em um conjunto de dados, ou seja, o valor que aparece um maior número de vezes.
// possibilidade de ser bimodal (ter duas modas)
function mode(...args) {
  const orderedObj = args.reduce((obj, curr) => {
    obj[curr] = ++obj[curr] || 1
    return obj
  }, {})

	var orderedArray = []
	for (let val in orderedObj) {
		orderedArray.push([val, orderedObj[val]])
	}

	orderedArray.sort((a, b) => {
		return a[1] - b[1]
	})

  const modeValues = orderedArray.map(numb => numb[1] === orderedArray[orderedArray.length - 1][1] ? numb[0] : false)

  return modeValues.filter(val => val !== false)
}

// median
function median(...args) {
  const orderedArray = args.sort(function (a, b) {
    return a - b
  })

  if (args.length % 2 === 0) {
    // if length is even, median is the average of two middle numbers
    return average(orderedArray[args.length / 2 - 1], orderedArray[args.length / 2])
  } else {
    // if length is odd median is the middle number of array
    return orderedArray[Math.floor(args.length / 2)]
  }
}

const stats = {
  sum,
  average,
  mode,
  median
}

module.exports = stats
