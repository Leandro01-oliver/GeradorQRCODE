import axios from "axios";

const downloadQRCODE =  (
    textQr
) =>{

    const data = {
        textQr :  textQr
    }

    axios.get("/api/qrcode/download", data)
    .then((res)=>{
        // setDownloadQrCode(res.data)
        console.log(res.data);
    }) 
    .catch((err)=>{
        // setDownloadQrCode(err)
        console.log(err);
    })
}

export  { downloadQRCODE }