interface TrieNode {
  children: Record<string, TrieNode>;
  isWord: boolean;
}

class TrieNode implements TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

interface Trie {
  root: TrieNode;
  insert(word: string): void;
  contains(word: string): void;
  startWith(word: string): void;
}

class Trie implements Trie {
  constructor() {
    this.root = new TrieNode();
  }

  public insert(word: string): void {
    let curr = this.root;
    for (let i = 0, len = word.length; i < len; i++) {
      const char = word[i];

      if (!(char in curr.children)) {
        curr.children[char] = new TrieNode();
      }

      curr = curr.children[char];
    }

    curr.isWord = true;
  }

  public contains(word: string): boolean {
    let curr = this.root;
    for (let i = 0, len = word.length; i < len; i++) {
      const char = word[i];

      if (!(char in curr.children)) {
        return false;
      }

      curr = curr.children[char];
    }

    return curr.isWord;
  }

  public startWith(word: string) {
    let curr = this.root;
    for (let i = 0, len = word.length; i < len; i++) {
      const char = word[i];

      if (!(char in curr.children)) {
        return false;
      }

      curr = curr.children[char];
    }

    return true;
  }
}

const trie = new Trie();

// insert few values
trie.insert('peter');
trie.insert('piper');
trie.insert('picked');
trie.insert('pickled');
trie.insert('pepper');

console.log(trie.startWith('pe')); //true
