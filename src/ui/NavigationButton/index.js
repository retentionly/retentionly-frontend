import { Button, Image } from "@chakra-ui/react";
import arrowLeft from '../../assets/png/arrow-icon-left.png';
export default function NavigationButton({imageProps,children,prepend,arrowRight,...rest}){
    return(
        <Button bg='none' {...rest}>{arrowRight && children}<Image src={arrowLeft} transform={arrowRight && "scaleX(-1)"} alt=" arrow" {...imageProps}/> {!arrowRight && children}</Button>
    )
}