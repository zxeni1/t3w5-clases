import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

// const pokemonList = ['pikachu', 'ditto', 'mew', 'charmander'];

export default class PokemonFetcher extends Component {
    constructor(props){
        super(props);

        this.state = {
            pokemonList: ['pikachu', 'ditto', 'mew', 'charmander']
        }
    }


    render() {
        return (
            <div>
                <h1>Pokemon Data</h1>
                {
                    this.state.pokemonList.map(pokemon => {
                        return <PokemonCard name={pokemon} />
                    })
                }
                <button onClick={() => {
                    this.setState({pokemonList: []})
                }}>Empty the state</button>
            </div>


        )
    }
}