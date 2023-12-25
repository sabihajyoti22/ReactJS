import React, {useRef, useReducer} from 'react'
import {v4 as uuid} from "uuid"

export default function UseReducer() {
    let newMovieRef = useRef()

    const movies = [
        {
            id : 1,
            name: "Forrest Gump"
        },
        {
            id : 2,
            name: "The Shawshank Redemption"
        },
        {
            id : 3,
            name: "Marvel Movies"
        },
    ]

    // const [newMovie,setNewMovie] = useState(movies);
    // const [modalText,setModalText] = useState("");
    // const [modal,setModal] = useState(false);
    // UseReducer is used to reduce states

    const reducer = (state,action)=>{
        if(action.type === "ADD"){
            const allMovie = [...state.newMovie, action.payload];
            return {
                ...state,
                newMovie : allMovie,
                modalText : "New Movie Added",
                modal : true 
            }
        }else if(action.type === "REMOVE"){
            const filteredMovie = [...state.newMovie].filter((movie)=>{
                return movie.id !== action.payload
            });
            return {
                ...state,
                newMovie : filteredMovie,
                modalText : "Movie Removied",
                modal : true
            }
        }
        
    }

    const [movieState, dispatch] = useReducer(reducer, {
        newMovie : movies,
        modalText : "",
        modal : false
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newMovie = { id: uuid(), name: newMovieRef.current.value}
        dispatch({type:"ADD", payload:newMovie})
        newMovieRef = ""
    }
    const handleRemove = (id)=>{
        dispatch({type:"REMOVE", payload:id})
    }
    
  return (
    <div>
        <h2>Favourite Movies</h2>
        <form onSubmit={handleSubmit}>
            <input style={{padding:"5px"}} name='bookName' type="text" placeholder='Enter your favourite book' ref={newMovieRef}></input>
            <button style={{padding:"5px", marginLeft:"5px"}} type="submit">ADD</button>
        </form>
        {movieState.modal && <p>{movieState.modalText}</p>}
        {
            movieState.newMovie.map((movie)=>{
               return <li style={{marginTop:"5px"}} key={movie.id}>{movie.name} 
               <button style={{padding:"0px 5px 0px 5px", marginLeft:"5px"}} onClick={()=>{handleRemove(movie.id)}}>-</button>
               </li>
            })
        }
    </div>
  )
}
