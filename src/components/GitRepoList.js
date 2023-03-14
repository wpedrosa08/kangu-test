import React, { useContext, useEffect, useState } from "react";
import RepoContext from "./context/RepoContext";
import useRepo from "./hook/useRepo";

const GitRepoList = () => {
    const [data] = useRepo("GustavoMaga")
    const [repos, setRepos] = useContext(RepoContext)
    const [user, setUser] = useState({
        userGit: "",
        userName:"",
        userEmail:""
    })

    function hUser (eve, field) {
        setUser({...user, [`${field}`]:eve.target.value})
        console.log(user)
    }

    useEffect(()=>{
        setRepos(data)
    }, [data])

    return (
        <div>
            <input type="text" name="userGit" value={user.userGit} onChange={(eve)=>hUser(eve, 'userGit')}></input>
            <input type="text" name="userName" value={user.userName} onChange={(eve)=>hUser(eve, 'userName')}></input>
            <input type="text" name="userEmail" value={user.userEmail} onChange={(eve)=>hUser(eve, 'userEmail')}></input>
            <button>
                Ok
            </button>
            {
                repos &&
                    repos.map(
                        (repo)=><p key={repo.id}>
                            {repo.name}
                        </p>
                    )
            }
        </div>
    )
}

export default GitRepoList