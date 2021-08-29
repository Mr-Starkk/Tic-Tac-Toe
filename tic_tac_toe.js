const gameBoard = (function(){
    let gameBoard_array = ['X','O','X','O','X','X','X','O','O'];
    return {
        gameBoard_array,
    }
})();

const player = function(name,marker){
    return {
        name,
        marker
    }
}
const gameFlow = (function(array){
    const displayController = () => {
        console.log('i was here');
        for(i=0; i<array.length; i++){
            const sq = document.getElementById(`sq${i}`);
            sq.innerText = array[i];
        }
    }
    return {
        displayController,
    }

})(gameBoard.gameBoard_array);


gameFlow.displayController()