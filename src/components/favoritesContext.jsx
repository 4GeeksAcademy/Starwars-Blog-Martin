import React from "react";
import { useState } from "react";

export const FavoritesContext = React.createContext('Add Favorites')

export const FavoritesWrapper = (props) => {
	const [ store, setStore ] = useState({
		favorites: []
	});
	const [ actions ] = useState({
        addFavorites: (entity) => {
               setStore(({favorites}) => {
                const match = favorites.find((fav) => fav.created === entity.created)
                if (!match) {
                    return {
                        favorites: [...favorites, entity]

                }
            }
            return { favorites }
              
        })
    }
    });
    console.log('Favorites: ', store)
	
	return (
		<FavoritesContext.Provider value={{ store, actions }}>
			{props.children}
		</FavoritesContext.Provider>
	);
}
export const FavoritesConsumer = FavoritesContext.Consumer