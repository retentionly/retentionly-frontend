import styled from "@emotion/styled";

export const Color = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background: ${props => props.background};
    position:absolute;
    left:0;
    top:0;
`
export const Swatch = styled.div`
    padding: 5px;
    background: #fff;
    border-radius: 1px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1);
    display: inline-block;
    cursor: pointer;
    border:5px solid #000000;
    height:150px;
    width:150px;
    position:relative;
    z-index:999
    
`
export const SketchCustom = styled.div`
    position:absolute;
    right:-15px;
    top:0;
    transform:translateX(100%);
`
export const Popover = styled.div`
    position: absolute;
    z-index: 77;
`
export const Cover = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`

// color: {
//     width: '36px',
//     height: '14px',
//     borderRadius: '2px',
//     background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
//   },
//   swatch: {
//     padding: '5px',
//     background: '#fff',
//     borderRadius: '1px',
//     boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
//     display: 'inline-block',
//     cursor: 'pointer',
//   },
//   popover: {
//     position: 'absolute',
//     zIndex: '2',
//   },
//   cover: {
//     position: 'fixed',
//     top: '0px',
//     right: '0px',
//     bottom: '0px',
//     left: '0px',
//   },