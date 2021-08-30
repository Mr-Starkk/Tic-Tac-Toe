const gameBoard = (function(){
    let gameBoard_array = ['','','','','','','','',''];
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
        for(i=0; i<array.length; i++){
            const sq = document.getElementById(`sq${i}`);
            sq.innerText = array[i];
        }

    }

    const clicker = () => {
        const gameBoard = document.getElementById('gameBoard');
        gameBoard.addEventListener('click', (e) => {
            let sqNumber = e.target.id.charAt(2);
            let turn = _counter.increment();
            if(turn == 1 || turn == 3 || turn == 5 || turn == 7 || turn == 9){
                if(!array[sqNumber]){
                    array[sqNumber] = 'X';
                    e.target.innerText = 'X';
                    _gameEndChecker(array,'X').checker();
                }
            } else if(turn == 2 || turn == 4 || turn == 6 || turn == 8){
                if(!array[sqNumber]){
                    array[sqNumber] = 'O';
                    e.target.innerText = 'O';
                    _gameEndChecker(array,'O').checker();
                }
            }
            
        })

    }

    const _gameEndChecker = (arr,marker) => {
        const checker = () => {
            if(arr[0] == marker && arr[1] == marker && arr[2] == marker){
                alert(`${marker} wins!!`)
            }else
            if(arr[3] == marker && arr[4] == marker && arr[5] == marker){
                alert(`${marker} wins!!`)
            }else
            if(arr[6] == marker && arr[7] == marker && arr[8] == marker){
                alert(`${marker} wins!!`)
            }else
            if(arr[0] == marker && arr[4] == marker && arr[8] == marker){
                alert(`${marker} wins!!`)
            }else
            if(arr[2] == marker && arr[4] == marker && arr[6] == marker){
                alert(`${marker} wins!!`)
            }else
            if(arr[0] == marker && arr[3] == marker && arr[6] == marker){
                alert(`${marker} wins!!`)
            }else
            if(arr[1] == marker && arr[4] == marker && arr[7] == marker){
                alert(`${marker} wins!!`)
            }else
            if(arr[2] == marker && arr[5] == marker && arr[8] == marker){
                alert(`${marker} wins!!`)
            }else
            if(array[0] && array[1] && array[2] && array[3] && array[4] && array[5] && array[6] && array[7] && array[8]){
                alert('It\'s a tie!!!')
            }
        }
        return{
            checker,
        }
    }


    const _counter = (() => {
        let count = 0;
        const increment = () => {
            count = count + 1
            return count;
        }
        const reset = () => {
            count = 0;
        }
        return {
            increment,
            reset,
        }
    })()

    return {
        displayController,
        clicker,

    }

})(gameBoard.gameBoard_array);






let user = player('yash','X');
let opponent = player('computer','O');

gameFlow.displayController()
gameFlow.clicker()
