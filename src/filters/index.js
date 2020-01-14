//计算金额最大值，确定坐标轴
export function mathCoordinate(data) {
    let maxNum = 100000 //初始值
    let minNum = 10000 //初始值
    if (data.length != 0) {
      let max = Math.round(Math.max(...data))//取最大值
      let dig = (`${max}`.length)//取最大值位数
      let size = "1"
      for (let i = 0; i < dig; i++) {
        size = size + 0
      }
      maxNum = Math.ceil(max / size * 10) / 10 * size
      minNum = maxNum / 10
      if (maxNum < 10) {
        maxNum = 10
        minNum = 1
      }
    }
    return [maxNum, minNum]
  }
  