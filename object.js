// オブジェクトの作り方
const book = {
    title:'吾輩は猫である',
    author:'夏目漱石',
    pages:620
}

console.log(book);
console.log(typeof book); // 型はobject
console.log(book.title); // ドット表記でプロパティを取得
console.log(book['title']); // ブラケット表記でプロパティを取得