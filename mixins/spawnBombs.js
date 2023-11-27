export default function (x, y, bombsArray, totalBombs, exception) {
    let totalCells = y * x

    for (let i = 0; i < totalBombs; i++) {
        let bombId = Math.floor(Math.random() * (totalCells + 1))

        if (bombsArray.includes(bombId) || exception === bombId || bombId === 0) {
            i--
        } else {
            bombsArray.push(bombId)
        }
    }
}