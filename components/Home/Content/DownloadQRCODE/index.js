import { Flex } from "@chakra-ui/react";
import { GrDocumentDownload } from "react-icons/gr"
import { saveAs } from 'file-saver';
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { downloadQRCODE } from "../../../../utils/qrcode/download";

const DownloadQRCODE = (
  props
) =>{

    const notify = () => toast.success("Dowload realizado com sucesso");

    return (
        <>
          <Flex
           w={'40px'}
           h={'40px'}
           boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
           borderRadius={'50%'}
           position={'absolute'}
           bottom={'-1rem'}
           right={'-1rem'}
           justifyContent={'center'}
           alignItems={'center'}
           bg={'#fff'}
           cursor={'pointer'}
           onClick={()=>{
            notify();
            const guid = uuidv4();
            downloadQRCODE(
              props.qrCodeUrl,
              `${guid}.png`
            )
           }}
          >
            <GrDocumentDownload/>
          </Flex>
        </>
    )
}

export default DownloadQRCODE