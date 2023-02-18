import { createContext, useState } from "react";

const GlobalProvider = createContext({});


const GlobalContext = ({children})=>{

    const [textQr,setTextQr] = useState("");

    const onChangerTextQr = (e)=>{
        setTextQr(e.target.value)
    }

    const [darkMode, setDarkmode] = useState(false);

    const handlerDarkMode = () => setDarkmode(!darkMode);

    const [downloadQrCode,setDownloadQrCode] = useState("");

    const value = {
        textQr,
        onChangerTextQr,
        darkMode,
        handlerDarkMode,
        downloadQrCode,
        setDownloadQrCode
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