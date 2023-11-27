// timer: 'hh:mm:ss'
export default function (timer) {
    const a = timer.split(':')
    console.log(a)
    return a[0]*60 * a[1]*60 + a[2] * 1
}