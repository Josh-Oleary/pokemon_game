import React, { Component } from 'react';
import { Pokedex, totalExp} from './Pokedex';
import Playgame from './Playgame';
import './Pokegame.css'


function shuffleDeck (deck) {
    var j, x, i;
    for(i = deck.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i + 1));
        x = deck[i];
        deck[i] = deck[j];
        deck[j] = x;
    }
    let cards = [];
    let hand1 = deck.slice(0, 4);
    let hand2 = deck.slice(4, 8);
    cards.push(hand1);
    cards.push(hand2);
    
    return cards;
}

function checkWinner (player, opponent) {
    if(player > opponent){
        return 'Pokedex-win'
    } else return 'Pokedex-lose'
}


class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
          {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
          {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
          {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
          {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
          {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
          {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
          {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
          {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
      };
      render(){
        var newHand = shuffleDeck(this.props.pokemon);
        let p1Hand = totalExp(newHand[0])
        let p2Hand = totalExp(newHand[1])
        return (
            <div className="Pokegame">
                <h1>PokeGame</h1>
                <div className={ checkWinner(p1Hand, p2Hand) }>
                <h3 className="Pokegame-player-heading">Player 1</h3>
                    <Pokedex  pokemon={ newHand[0] } />
                </div>
                <Playgame />
                <div className={ checkWinner(p2Hand, p1Hand) }>
                <h3 className="Pokegame-player-heading">Player 2</h3>
                    <Pokedex pokemon={ newHand[1] } />
                </div>
                    
            </div>
        )
    }
}

export default Pokegame;