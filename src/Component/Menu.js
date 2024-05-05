import { Link } from "react-router-dom"

const Menu = ({loginStatus}) => {

if(!loginStatus)
{
    return(
        <>
        <ul>
<li><Link to = {'/login'}>Login</Link></li>
<li><Link to = {'/Register'}>Register</Link></li>
<li><Link to = {'/'}>Home</Link></li>
<li><Link to = {'/Profile'}>Profile</Link></li>
        </ul>
        </>
    )
}

else{
    return(
        <>
        <ul>
            <li><Link to = {'/emp'}>Employee</Link></li>
            <li><Link to = {'/parent'}>Parent</Link></li>

            <li><Link to = {'/logout'}>Logout</Link></li>

            <li><Link to = {'/updateProfile'}>updateProfile</Link></li>
        </ul>
        </>
    )
}
}





export default Menu;