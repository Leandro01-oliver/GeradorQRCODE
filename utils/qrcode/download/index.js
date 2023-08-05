import axios from "axios";
import { randomUUID } from "crypto";

const downloadQRCODE =  (
    url,
    file
) =>{

    saveAs(url, file);
}

export  { downloadQRCODE }