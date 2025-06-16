import { NavLink } from "react-router-dom"

function AppHeader  () {
   const navList = [
        {
            titolo: "Home",
            url : "/"
        },
         {
            titolo: "Chi siamo",
            url : "/about"
        },
         {
            titolo: "Blog",
            url : "blog"
        },
         {
            titolo: "Create Blog",
            url : "blog/createblog"
        },
       
    ]
    return (
    <header>
        <nav>
            <ul>
                {navList.map((curLink, index) => (
                    <li className="list-item" key={index}>
                        <NavLink to={curLink.url}>{curLink.titolo}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    )
}

export default AppHeader