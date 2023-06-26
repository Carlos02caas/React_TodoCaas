import  { useState,useEffect } from "react";

function useLocalStorage(itemName, initialValue){

    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=> {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
    
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
        
                setLoading(false);
            }
            catch(error){
                setLoading(false);
                setError(true);
            }
        },2000);
        
    },[]);

    const saveItem = (newItem) => {

        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);

    };

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export {useLocalStorage}

/* const defaultTodos = [
  { text: 'Limpiar carro', completed: true },
  { text: 'Barrer Casa', completed: false },
  { text: 'Cotizar Página', completed: false },
  { text: 'Ir por Comida', completed: true },
  { text: 'Sacar al perro', completed: false },
]

localStorage.setItem('TODOS_V1', defaultTodos);
localStorage.removeItem('TODOS_V1'); */