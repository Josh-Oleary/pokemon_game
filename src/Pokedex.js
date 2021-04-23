import React, { Component } from 'react';
import PokeCard from './Pokecard';
import './Pokedex.css'

function checkID(imgId){
  let id = imgId.toString();
  if(id.length === 1){
      return '00' + id;
  } else if(id.length === 2){
      return '0' + id;
  } else {
      return id
  }
}

function totalExp (arr) {
  let exp = 0;
  for(let i = 0; i < arr.length; i++){
      var pokeExp = arr[i].base_experience;
      exp += pokeExp;
  }
  return exp;
}

class Pokedex extends Component {

  render(){
    return (
      <div className="Pokedex">
        <h4 className="Pokedex-exp">EXP: {totalExp(this.props.pokemon)}</h4>
        <div className="container">
        {this.props.pokemon.map((pokemon) => (
          <PokeCard
           name={pokemon.name} 
           id={checkID(pokemon.id)} 
           type={pokemon.type} 
           exp={pokemon.base_experience} 
          />
        ))}
        </div>
        
      </div>
    )
 }
}




export {Pokedex, totalExp };