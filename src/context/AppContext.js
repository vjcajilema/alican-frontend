import React from 'react'

export const AppContext = React.createContext()

const AppProvider = (props) => {

    const states = {
        poduct: [],
        poducts: [],

    }
    const [appState, setState] = React.useState(states)

    const setProduct = currentProduct => {
        setState({...appState, poduct:currentProduct});
        
    }
    const getProduct = () => {
        return appState.poduct;
        
    }
    const setProducts = allProducts => {
        setState({...appState, poducts:allProducts});
        
    }
    const getProducts = () => {
        return appState.poducts;
        
    }
    return (
        <AppContext.Provider value={{appState, setProduct, getProduct, setProducts, getProducts}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider
