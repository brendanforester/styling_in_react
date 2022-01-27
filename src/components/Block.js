import React from "react";

// const cycleList = () => {
//     const cycle = [
//         { id: 1,
//             backColor: "red",
//             borderColor: "blue" },
//         { id: 2,
//             backColor: "blue",
//             borderColor: "green" },
//         { id: 3,
//             backColor: "green",
//             borderColor: "red" }
//     ]
//     return(<></>)
// }

function Block (props){

    // var cycle = ['backColor: "red" borderColor: "blue"',
    //     'backColor: "blue" borderColor: "green"',
    //     'backColor: "green" borderColor: "red"'
    // ];
    //
    // for (var i = 0; i < cycle.length; i++) {
    //     elements.push(new line(cycle[i]));
    // }

    return(
        <div style={{backgroundColor: props.backColor, width: "100px", height: "100px", border: "2px solid", borderColor: props.borderColor}}>
            <div> </div>
        </div>
    )
}

export default Block;