import qr from 'qrcode';
import fs from 'fs';
import path from 'path'
import { randomUUID } from 'crypto';

const handlerDowloadQRCODE = (req, res) => {

    const {
        textQr
    } = req.body;


    if (req.method == "POST") {

        fs.access("c:/qrcode", fs.constants.F_OK,
            (err) => {
                if (err) {
                    fs.mkdir(path.join("c:/", "qrcode"), (err) => {

                        if (err) {
                            return err.message
                        }

                        console.log("Diretório criado com sucesso");

                    });
                } else {
                    console.log("Diretório já criado");
                }
            });

        qr.toFile(
            `c:/qrcode/${randomUUID()}.png`,
            textQr,
            { width: '1000' },
            (err, code) => {

                if (err) {
                    return err.message
                }

            });

        return res.status(201).json({
            type: "sucess",
            result: "Download realizado com sucesso do QRCODE"
        })

    }

}

export default handlerDowloadQRCODE;