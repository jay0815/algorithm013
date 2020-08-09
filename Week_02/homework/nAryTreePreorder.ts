interface NAryTree {
  val: number;
  children: NAryTree[]
}

// Definition for PreOreder
// look for head then left then right

export default {
  recursion:  function(root: NAryTree) {
    const record: number[] = [];
    const preorder = (r: NAryTree) => {
        if(r) {
            record.push(r.val);
            if(r.children) {
                r.children.forEach(i => preorder(i))
            }
        }
    }
    preorder(root);
    return record;
  },
  iteration: function (root: NAryTree) {
    // through stack record exec orders
    const record = [];
    let stack = [];
    stack.push(root);
    while(stack.length) {
       const [ head, ...other ] = stack;
       if(head) {
           record.push(head.val);
           if(head.children) {
               let temp = [];
               for(let i = 0; i < head.children.length; i++) {
                   temp.push(head.children[i]);
               }
               // 技巧：
               // 每次 将 头结点 拆分 成 子节点
               // 并 将子节点 放置 head 与 other 之间
               // 并对 头结点 出堆
               // 以此保证 整个 堆 的 顺序
               stack = [ head, ...temp, ...other ];
           }
       }
       stack.shift();
    }
    return record;
  }
}
