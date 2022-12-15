import React, { createContext, useReducer } from 'react'

import { Data } from './Data'


export const Context = createContext()

const Provider = (props) => {
    // const Context = formContext
    const formReducer = (state, action) => {

        // return initialStates
        switch (action.type) {
            case 'email':
                return {
                    ...state,
                    email: action.payload
                }
            // case 'UPDATE_LIST':
            //     let updatedList = handleList()
            //     return {
            //         ...state,
            //         list: updatedList
            //     }
            case 'password':

                return {
                    ...state,
                    password: action.payload
                }

            case 'login':
                let login = Login(action.payload)
                console.log(login)
                return {
                    ...state,
                    logedEmail: login.email
                }

            default:
                return Data
        }
    }


    // here in the push formate function the we have to put the existing one value here the 
    // I am putting as list1 because the we have updated the value into the list1 this is uour existing one.


    const Login = () => {
        var local = localStorage.setItem('user', state.email)
        return local;
    }



    // console.log('form', formSubmit())

    const [state, dispatch] = useReducer(formReducer, Data)

    // console.log('form submit', formSubmit())

    return (
        <Context.Provider value={{ state, dispatch }}>

            {props.children}


        </Context.Provider>
    )
}

export default Provider