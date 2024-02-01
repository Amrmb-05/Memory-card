// import { useState } from 'react'
// import { useEffect } from 'react'

// export default function Fetch({name}) {
//     const [img, setImg] = useState({})
//     useEffect(() => {
    
//     fetch(`https://dragonball-api.com/api/characters?name=${name}`, {mode: 'cors'}).then(function(response) {
//       console.log(response.json)
//       return response.json()
//     })
//     .then(function(response){
//       console.log(response[0].image)
//       setImg([
//         ...img,
//         {name: names[0], src: response[0].image}
//       ])

//   })
//   },[])
// }