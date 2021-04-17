import React, {useState, createContext} from 'react'

const UserContext = createContext([{}, () => {}])

const UserProvider = (props) => {

    const [state, setState] = useState({

        username: "",
        email: "",
        uid: "",
        isLoggedIn: null,
        profilePhotUrl: "default"

    })

    return <UserContext.Provider values = {[state, setState] }>{props.children}</UserContext.Provider>

}
export {UserContext, UserProvider};