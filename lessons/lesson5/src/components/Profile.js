import { useContext } from "react";
import { ThemeContext } from "../App"
import '/Users/mafaka03/Documents/React/react/lessons/lesson5/src/style.css';

function Profile() {

    const theme = useContext(ThemeContext);
    return ( 
        <div className={theme}>
            <h2>Profile</h2>
            <p>
                something info about user
            </p>
        </div>
     );
}

export default Profile;