// 要素それぞれにアクセスし、表示する
const elements = document.querySelectorAll('.sample');
for(const element of elements){
    console.log(element); // <div>タグが順次出力される
}