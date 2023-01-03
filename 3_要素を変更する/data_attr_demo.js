// スコアに応じてテキストの色を変える
const scoreElement = document.querySelector('.score');
const score = scoreElement.dataset.score;
if(score >= 80){
    scoreElement.style.color = 'blue';
}