import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalProvider } from "../../../../context/GlobalContext";
import { downloadQRCODE } from "../../../../utils/qrcode/download";
import { GrDocumentDownload } from "react-icons/gr"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DownloadQRCODE = () =>{

    const {
         textQr
    } =  useContext(GlobalProvider);

    const notify = () => toast.success("Dowload realizado com sucesso");

    return (
        <>
          <Flex
           w={'30px'}
           h={'30px'}
           boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
           borderRadius={'50%'}
           position={'absolute'}
           top={'-1rem'}
           right={'-1rem'}
           justifyContent={'center'}
           alignItems={'center'}
           bg={'#fff'}
           cursor={'pointer'}
           onClick={()=>{
            notify();
            downloadQRCODE(
              textQr
            )
           }}
          >
            <GrDocumentDownload/>
          </Flex>
        </>
    )
}

export default DownloadQRCODE