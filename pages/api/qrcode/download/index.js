import qr from 'qrcode';
import { randomUUID } from 'crypto';
import fs from 'fs';
import os from 'os';
import path from 'path';

const handlerDownloadQRCode = async (req, res) => {
    const { textQr } = req.body;

    if (req.method == "POST") {
        const file = `${randomUUID()}.png`;
        const filename = path.join(os.homedir(), 'Downloads', file);
        try {
            await new Promise((resolve, reject) => {
                qr.toFileStream(fs.createWriteStream(filename), textQr, { width: 500 }, (err) => {
                    if (err) {
                        reject(err); // Pass the error to the promise rejection
                    } else {
                        resolve(); // Resolve the promise when successful
                    }
                });
            });

            res.status(201).json({
                type: "success",
                result: "Download realizado com sucesso do QRCODE"
            });
        } catch (error) {
            // Handle errors and send an appropriate response
            console.error("Error generating QR Code:", error);
            res.status(500).json({
                type: "error",
                result: "Erro ao gerar o QRCODE"
            });
        }
    } else {
        res.status(405).json({
            type: "error",
            result: "Método não permitido"
        });
    }
};

export default handlerDownloadQRCode;
