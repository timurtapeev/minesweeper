// x = cols
// y = rows
export default function (x, y) {
    let gameMatrix = []
    let firstMatrixCol = []
    let lastMatrixCol = []

    for (let i = 0; i < y; i++) {
        let row = []
        for (let j = 1; j <= x; j++) {
            const cellIndex = i * x + j

            row.push(cellIndex)
        }


        firstMatrixCol.push(row[0])
        lastMatrixCol.push(row[x - 1])
        gameMatrix.push(row)
    }

    return {
        gameMatrix,
        firstMatrixCol,
        lastMatrixCol
    }
}