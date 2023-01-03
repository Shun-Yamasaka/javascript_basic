// thisを経由してプロパティにアクセスする
const person ={
    name: 'Alice',
    greet: function(){
        console.log(`こんにちは、私の名前は${this.name}です`);
    }
}

person.greet(); // Aliceが出力される

// プロパティに連動してメソッドも変更される
person.name = 'Bob';
person.greet(); // Bobが出力される