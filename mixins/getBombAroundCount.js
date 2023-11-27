export default function (index, aroundCellsArray, bombArray) {
    return aroundCellsArray.filter((el) => bombArray.includes(el))
}
