// import { useEffect, useState } from 'react';
// import APITEST from '../../utils/APITEST';

// export const useTest = () => {

//     const [ matches, setMatches ] = useState([]);
    
//     useEffect(() => {
//       async function getData() {
//         try {
//             const response = await APITEST.get('v1/events/40/0/sub/25/live/ru');	
//             setMatches(response.data);
//             console.log(response.data);
//             // 284270025 284293825
//         } catch (error) {
//             console.log(error)
//         }
//       }

//       getData();
//     }, []);

//     return { matches, setMatches }

// }