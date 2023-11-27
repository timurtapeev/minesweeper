export default function (firstArray, secondArray) {
    function sortArray(array) {
        return array.sort((a, b) => a - b)
    }
    return JSON.stringify(sortArray(firstArray)) === JSON.stringify(sortArray(secondArray))
}