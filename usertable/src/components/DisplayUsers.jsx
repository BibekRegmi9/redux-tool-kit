import { useSelector } from "react-redux"




const DisplayUsers = () => {

    const data = useSelector((state)=> {
        return state.users;
    })
    

    return 
    {
        data.map((user, id) => {
            return <li key={id}>
                {user}
            </li>
        })
    }
    
}

export default DisplayUsers