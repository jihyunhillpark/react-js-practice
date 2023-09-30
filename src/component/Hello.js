//1.
// const Hello = function(){ 
//     <p>Hello</p>
// }

import World from "./World";
import styles from "./Hello.module.css";
//2.
// const Hello = () => {
//     <p>Hello</p>
// }

// export default Hello;

//3.
export default function Hello() {
    return (
        <div>
            <h1
                style={{
                    color: "#f00",
                    borderRight: "12px solid #000",
                    marginBottom: "30px",
                    opacity: 1,
                }}>Hello</h1>
            <World />
            <World />
            <div className={styles.box}/>
        </div>
    )
}

