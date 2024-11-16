import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

// const pokemonList = ['pikachu', 'ditto', 'mew', 'charmander'];

export default class PokemonFetcher extends Component {
    constructor(props){
        super(props);


        this.state = {
            pokemonList: []
        }
    }

    async componentDidMount(){
        // Generate a random Pokemon ID number
        let randomNumber = Math.ceil(Math.random() * 1025);
        // Pass the random pokemon number to fetch
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        let data = await response.json();
        // set fetch response data to state
        this.setState({pokemonList: [data]});
        console.log("PokemonFetcher first load on the page");
    }

    render() {
        return (
            <div>
                <h1>Pokemon Data</h1>
                {
                    this.state.pokemonList.map(pokemon => {
                        return <PokemonCard name={pokemon.name} />
                    })
                }
                <button onClick={() => {
                    this.setState({pokemonList: []});
                }}>Empty the state</button>
            </div>


        )
    }
}