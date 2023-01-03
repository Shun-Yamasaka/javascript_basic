const name = 'Alice';
// +を用いたコード
const text1 = '私の名前は'+ name + 'です。';
console.log(text1);

// テンプレートリテラルを用いてコードを書き換える
const text2 = '私の名前は${name}です。';
console.log(text2);