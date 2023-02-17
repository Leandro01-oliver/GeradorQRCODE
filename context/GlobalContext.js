import { createContext, useState } from "react";

const GlobalProvider = createContext({});


const GlobalContext = ({children})=>{

    const [search,setSearch] = useState("");

    const onChangerSearch = (e)=>{
        setSearch(e.target.value)
    }

     const [submit,setSubmit] = useState(false);

    const handlerSubmite = () => setSubmit(!submit);

    const [darkMode, setDarkmode] = useState(false);

    const handlerDarkMode = () => setDarkmode(!darkMode);

    const value = {
        search,
        setSearch,
        onChangerSearch,
        handlerSubmite,
        submit,
        darkMode,
        handlerDarkMode
    }

    return(
        <>
          <GlobalProvider.Provider value={value}>
          {children}
         </GlobalProvider.Provider>
        </>
    )
}

export { GlobalProvider, GlobalContext }