export default {
  hash: function (commands: number[], obstacles: Array<[number, number]>) {
    // 思路
    // 确认 碰撞点的 处理逻辑.
    // 遇到碰撞点时, 停止在碰撞点前一格 并 结束本次移动
    // 每次走一步,这样方便停止
    // 考虑过 一次到位 的方式，但是必须付出 高昂的存储代价 并 加大程序复杂性
    // 因为是在坐标系中旋转，所以采用 角度 表示，语义会更好
    // 当前方向
    let x = 0, y = 0, t = 90, result = 0;
    let set = new Set();

    obstacles.forEach((i) => {
      set.add(i[0] + '_' + i[1]);
    });

    const direction = {
      0: {
        dx: -1,
        dy: 0
      },
      90: {
        dx: 0,
        dy: 1
      },
      180: {
        dx: 1,
        dy: 0
      },
      270: {
        dx: 0,
        dy: -1
      }
    }

    for (let i = 0; i < commands.length; i++) {
      if (commands[i] === -2) {
        t -= 90;
      } else if (commands[i] === -1) {
        t += 90;
      } else {
        const { dx, dy } = direction[t - Math.floor(t / 360) * 360];

        for (let j = 0; j < commands[i]; j++) {
          let lx = x + dx * 1;
          let ly = y + dy * 1;
          let key = lx + '_' + ly;
          if (!set.has(key)) {
            x = lx;
            y = ly;
            result = Math.max(result, x * x + y * y);
          } else {
            break;
          }
        }
      }
    }
    return result
  }
}