import React, {useState} from 'react';

const Game = ()=> {

    const [result, setResult] = useState('');

    // submission handler
    function submitHandler(event) {

        event.preventDefault();
        
        const form = event.target;
        let player1_name = form.name1.value;
        let player2_name = form.name2.value;

        // preliminary checks
        if (player1_name === '') {
            alert('Player1 name cannot be empty');
            return;
        }
        if (player2_name === '') {
            alert('player 2 name cannot be empty');
            return;
        }

        // removing common letters
        for (let char of player1_name) {
            
            if (player2_name.includes(char)) {
                player1_name = player1_name.replace(char, '');
                player2_name = player2_name.replace(char, '');
            }
        }

        const gameKey = Math.floor((player1_name.length + player2_name.length) % 6);
        console.log(gameKey);

        // updating the state varaible to get result
        switch(gameKey) {
            case 1:
                setResult('Friends');
                break;
            
            case 2:
                setResult('Love');
                break;
            
            case 3: 
                setResult('Affection');
                break;
            
            case 4:
                setResult('Marriage');
                break;
            
            case 5:
                setResult('Enemies');
                break;
            
            case 0:
                setResult('Siblings');
                break;
            
            default:
                console.log('what');
                setResult('');
        }

    }

    function resetHandler(event) {
        // don't prevent default, clear input fields

        // reset result
        setResult('');
    }


    // create component
    return (
        <div className="game-container">

            <form id='game-form' onSubmit={submitHandler} onReset={resetHandler}>
                <input type="text" id="input1" name='name1' placeholder='Enter first name' data-test-id="input1"/>
                <input type="text" id="input2" name='name2' placeholder='Enter second name' data-test-id="input2"/>
                <button id="calculate_relationship" type="submit" data-test-id="calculate_relationship">Calculate Relationship Future</button>
                <button id="clear" type="reset" data-test-id="clear">Clear</button>
            </form>

            <div className="result-display-section">
                <h3 data-test-id="answer">{result}</h3>
            </div>
        </div>
    )
}
export default Game;