const fruits = ['みかん', 'りんご', 'バナナ'];
// includesで特定の要素が配列に含まれるか調べる
const check1 = fruits.includes('りんご');
console.log(check1); // true

const check2 = fruits.includes('ぶどう');
console.log(check2); // false