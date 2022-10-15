import { Popover } from "@chakra-ui/react";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { Color, Cover, SketchCustom, Swatch } from "./style";
export default function ColorPicker(){
    const [color,setColor] = useState({displayColorPicker: false,
      valueHex:"",
      valueRgba:{
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      },
    })
    
      const handleChangeComplete = (color) => {
            // setColor({...color, color: color.hex });
            const result = {valueRgba:color.rgb,displayColorPicker: true,valueHex:color.hex}
            setColor(result)
            
      };

      // const handleClick = (newSta)
      const handleClick = ()=> {
        setColor({...color,displayColorPicker:!color.displayColorPicker})
      };
    
      const handleClose = () => {
        setColor((prev) => ({...prev,displayColorPicker:false}))
      };
    return(
    <>
      <Swatch >
        <Color onClick={ handleClick } background={color.valueHex}/>
        { color.displayColorPicker ? 
            <Popover>
              <Cover onClick={ handleClose }/>
              <SketchCustom as={SketchPicker} color={ color.valueRgba } onChange={ handleChangeComplete }/>
            </Popover> 
          : null 
        }
      </Swatch>
   
    </>)
}
        // <Box h="150px" w="150px" border="5px solid #000000" onClick={handleClick}>
        //   { this.state.displayColorPicker ? 
        //   <div style={ styles.popover }>
        //   <div style={ styles.cover } onClick={ this.handleClose }/>
        //   <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        // </div> : null }
        // </Box>

// (<Swatch onClick={ this.handleClick }>
//   <Color style={ styles.color } />
// </Swatch>
// { this.state.displayColorPicker ? <Popover>
// <Cover onClick={ this.handleClose }/>
// <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
// </Popover> : null })