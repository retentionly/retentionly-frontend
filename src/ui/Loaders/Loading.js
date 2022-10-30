import { Box, Center } from '@chakra-ui/react';
import React from 'react';


// function Icon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="218"
//       height="20"
//       version="1"
//       viewBox="0 0 512 47"
//     >
//       <rect width="100%" height="100%" fill="#FFF"></rect>
//       <g>
//         <circle cx="-14.781" cy="22.328" r="12.813"></circle>
//         <animateTransform
//           attributeName="transform"
//           dur="3330ms"
//           repeatCount="indefinite"
//           type="translate"
//           values="88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;379 0;426 0;494 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0"
//         ></animateTransform>
//       </g>
//       <g>
//         <circle cx="-50.328" cy="22.328" r="12.797"></circle>
//         <animateTransform
//           attributeName="transform"
//           dur="3330ms"
//           repeatCount="indefinite"
//           type="translate"
//           values="0 0;0 0;0 0;0 0;0 0;88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;406 0;452 0;522 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0"
//         ></animateTransform>
//       </g>
//       <g>
//         <circle cx="-87.203" cy="22.328" r="12.797"></circle>
//         <animateTransform
//           attributeName="transform"
//           dur="3330ms"
//           repeatCount="indefinite"
//           type="translate"
//           values="0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;403 0;450 0;520 0;614 0;614 0;614 0;614 0;614 0;614 0"
//         ></animateTransform>
//       </g>
//       <g>
//         <circle cx="-125.234" cy="22.328" r="12.797"></circle>
//         <animateTransform
//           attributeName="transform"
//           dur="3330ms"
//           repeatCount="indefinite"
//           type="translate"
//           values="0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;402 0;448 0;518 0;611 0"
//         ></animateTransform>
//       </g>
//     </svg>
//   );
// }

function Loader({ height }) {

  return (
    <>
      <Center h={height ? height : "100vh"}>
        <Box textAlign='center'>
          <div>
            <img src="/image/preloader.gif" alt="preloader" />
          </div>
        </Box>
      </Center>
    </>
  )
}

export default Loader



/* 
  <>
      <Center>
        <Box textAlign='center'>
          <Heading>Loading</Heading>
          <div><Icon /></div>
        </Box>
      </Center>
    </>
*/