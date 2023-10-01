import {useState} from "react";
import UserName from "./UserName";

export default function Hello({age}) {
    // let name = "Mike";
    const [name, setName] = useState('Mike');
    const msg = age > 19? "성인 입니다." : "미성년자입니다.";
    // function changename() {
    //     const newName = name === "Mike"? "Jane" : "Mike";
    //     // document.getElementById("name").innerText = name;
    //     setName(newName);
    // }

    return (
        <div>
            <h2 id="name">{name} ({age}) : {msg}</h2>
            <UserName name={name}></UserName>
            <button onClick={() => {
                setName(name === "Mike"? "Jane" : "Mike");
            }}>Change</button>
        </div>
    );
}

