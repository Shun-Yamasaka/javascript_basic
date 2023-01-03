// デフォルト引数の関数
function hello(name = 'ゲスト'){
    console.log(`こんにちは${name}さん`);
}

hello('Bob');
hello();