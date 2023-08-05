import qr from 'qrcode';
import { randomUUID } from 'crypto';
import fs from 'fs';
import os from 'os';
import path from 'path';

const handlerDownloadQRCode = async (req, res) => {
    const { url } = req.body;
    try {
        saveAs(url, `${randomUUID()}.png`);
        res.status(201).json("Sucesso no download")
    } catch (error) {
        res.status(201).json(error)
    }
};

export default handlerDownloadQRCode;
