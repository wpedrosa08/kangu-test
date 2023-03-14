import React, { useContext, useState } from "react";
import RepoContext from "./context/RepoContext";
import useRepo from "./hook/useRepo";

const GitRepoList2 = () => {
    const [repos, setRepos] = useContext(RepoContext)
    return (
        <div>
            <ul>
            {
                repos &&
                    repos.map(
                        (repo)=><li key={repo.id}>
                            {repo.name}
                        </li>
                    )
            }
            </ul>
        </div>
    )
}

export default GitRepoList2