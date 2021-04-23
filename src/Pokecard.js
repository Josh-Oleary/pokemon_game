import React, { Component } from 'react'
import './Pokecard.css'


class PokeCard extends Component{
    
    render(){
        var url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.id}.png`
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-name">{this.props.name}</h2>
                <img className="Pokecard-img"src={url}/>
                <h6 className="Pokecard-type">Type: {this.props.type}</h6>
                <h6 className="Pokecard-exp" >EXP: {this.props.exp}</h6>
            </div>
        )
    }
}

export default PokeCard;
