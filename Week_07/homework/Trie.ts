interface Child {
  word_end: string;
}

interface Root {
  [key: string]: Root
}

class Trie {
  root: Root;
  word_end: string;

  constructor() {
    this.root = {};
    this.word_end = '$';
  }

  insert(word: string): void {
    let node = this.root;
    for (const w of word) {
      node[w] = node[w] || {};
      node = node[w];
    }
    // 根节点是特殊的 存储方式
    (node as unknown as Child).word_end = this.word_end;
  }

  find(word: string) {
    let node = this.root;
    for (const w of word) {
      if (node[w]) {
        node = node[w];
      } else {
        return false;
      }
    }
    return node;
  }

  search(word: string): boolean {
    const node = this.find(word);
    return node && (node as unknown as Child).word_end === this.word_end;
  }

  startsWith(word: string): boolean {
    const node = this.find(word);
    return node && true;
  }

}