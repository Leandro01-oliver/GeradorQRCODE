import { Box, Text, Textarea } from "@chakra-ui/react"
import { useContext } from "react";
import { toast } from "react-toastify";
import { GlobalProvider } from "../../../../context/GlobalContext";

const TextQRCODE = () => {

  const {
    textQr,
    onChangerTextQr
  } = useContext(GlobalProvider);

  const notify = () => toast.error("Limite de caracteres ultrapassou o máximo permitido de 20000");

  return (
    <>
      <Box
        w={'100%'}
        maxW={'780px'}
        mt={'2.5rem'}
      >
          <Box
        mb={'.5rem'}
        >
          {
            textQr.length > 20000 ?
            <Text>
            Tamanho de caracter digitado <strong>{textQr.length}</strong> ultrapassou o limite permitido, na geração do QRCODE
           </Text>
            :
            <Text>
              Tamanho de caracter digitado <strong>{textQr.length}</strong>
            </Text>
          }
        </Box>
        <Textarea
          h={'250px'}
          resize={'none'}
          maxLength={'20000'}
          onKeyDown={()=>{
            textQr.length > 20000 ? notify() : null
          }}
          disabled={textQr.length > 20000 ? true : false}
          onChange={onChangerTextQr}
        />
      </Box>
    </>
  )
}

export default TextQRCODE