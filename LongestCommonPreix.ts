function longestCommonPrefix(strs: string[]): string {
    let i = 0;
    while (strs[0][i] && new Set(strs.map(str => str[i])).size === 1) i++;
    return strs[0].slice(0, i);
  };