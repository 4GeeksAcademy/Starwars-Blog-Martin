import React from "react";
import { useState } from "react";

export const FavoritesContext = React.createContext('Add Favorites')

export const FavoritesWrapper = (props) => {
	const [ store, setStore ] = useState({
		favorites: []
	});
	const [ actions ] = useState({
        addFavorites: (character) => {
               setStore(({favorites}) => {
                const match = favorites.find((fav) => fav.url === character.url)
                if (!match) {
                    return {
                        favorites: [...favorites, character]

                }
            }
            return { favorites }
              
        })
    }
    });

	
	return (
		<FavoritesContext.Provider value={{ store, actions }}>
			{props.children}
		</FavoritesContext.Provider>
	);
}
export const FavoritesConsumer = FavoritesContext.Consumer