export function shuffle(source) {
  const arr = source.slice()
  for (let i = 0; i < arr.length; i++) {
    const j = getRandomInt(i)
    swap(arr, i, j)
  }
  return arr
}

// 取 0-max 之间的随机数
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function swap(arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

export function formateTime(interval) {
  // 向下取整
  interval = interval | 0
  const minute = ((interval / 60 | 0) + '').padStart(2, '0')
  const second = (interval % 60 + '').padStart(2, '0')
  return `${minute}:${second}`
}
