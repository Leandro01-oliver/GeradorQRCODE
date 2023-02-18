import qr from 'qrcode';
import { randomUUID } from 'crypto';

const handlerDowloadQRCODE = (req, res) => {

    const {
        textQr
    } = req.body;


    if (req.method == "POST") {

        qr.toFile(
            `../../${randomUUID()}.png`,
            textQr,
            { width: '500' },
            (err, code) => {

                if (err) {
                    return err.message
                }

            });

         res.status(201).json({
            type: "sucess",
            result: "Download realizado com sucesso do QRCODE"
        });
    }

}

export default handlerDowloadQRCODE;