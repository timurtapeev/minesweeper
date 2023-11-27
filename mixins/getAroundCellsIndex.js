// x = cols
// y = rows
export default function (index, x , y, matrix, firstMatrixCol, lastMatrixCol) {
    if (index === matrix[0][0]) {
        return [
            index + 1,
            index + x,
            index + x + 1,
        ]
    } else if (index === matrix[0][x - 1]) {
        return [
            index - 1,
            index + x,
            index + x - 1,
        ]
    } else if (index === matrix[y - 1][0]) {
        return [
            index + 1,
            index - x,
            index - x + 1,
        ]
    } else if (index === matrix[y - 1][x - 1]) {
        return [
            index - 1,
            index - x,
            index - x - 1,
        ]
    } else if (matrix[0].includes(index)) {
        return [
            index + 1,
            index - 1,
            index + x,
            index + x + 1,
            index + x - 1,
        ]
    } else if (matrix[y - 1].includes(index)) {
        return [
            index - 1,
            index + 1,
            index - x,
            index - x + 1,
            index - x - 1,
        ]
    } else if (firstMatrixCol.includes(index)) {
        return [
            index + 1,
            index - x,
            index - x + 1,
            index + x,
            index + x + 1,
        ]
    } else if (lastMatrixCol.includes(index)) {
        return [
            index - 1,
            index - x,
            index - x - 1,
            index + x,
            index + x - 1,
        ]
    } else {
        return [
            index - 1,
            index + 1,
            index - x,
            index - x - 1,
            index - x + 1,
            index + x,
            index + x - 1,
            index + x + 1,
        ]
    }
}