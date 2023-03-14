import { createContext } from "react";

const RepoContext = createContext([{
    id:1,
    name:"ola-mundo"
}],
(obj) => obj)

export default RepoContext