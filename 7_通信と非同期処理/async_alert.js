// 非同期処理を再現する
function asyncAlert(){
    setTimeout(function(){
        alert('アラートを表示');
    }, 0);
    console.log('ログを出力');
}
asyncAlert();