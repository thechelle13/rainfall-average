const rainfallPerMonth =[5,12,18,20,22,17,29,21,20,22,30,9]
let totalRainfall = 0

for(const rain of rainfallPerMonth) {
    totalRainfall += rain
}
// to find the average, you take the total and divide y the number if items
const averageRainfall = totalRainfall/ rainfallPerMonth.length

console.log(`Total rainfall was ${totalRainfall} inches. Average rainfall was ${averageRainfall} inches`)




const findHalf = (scaryNumber) => {
	// Use the slash character to divide in JavaScript
	const half = scaryNumber / 2

	// Tell me the end result
	return half
}
const returnedNumber = findHalf(42)

console.log(returnedNumber)