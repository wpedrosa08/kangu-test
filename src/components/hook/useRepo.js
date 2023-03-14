import { useEffect, useState } from "react";

const useRepo = (userGit) => {
 const [data, setData] = useState(null);

 useEffect(()=>{
    fetch(`https://api.github.com/users/${userGit}/repos`)
        .then((res)=>res.json())
        .then((data)=> setData(data))
 }, [userGit])

 return [data]
}

export default useRepo