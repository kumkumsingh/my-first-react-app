import React, { Component } from 'react'

export default class User extends Component {

    state = {present : true}
    toggle = () =>{
        this.setState({

            present :!this.state.present
        })
    }
render(){
    return(
        <div><b>{this.props.userName}</b>
        <h3> can we change it {this.state.present? 'Excited' : 'Bored'}</h3>
        <button onClick = {this.toggle}>NameChange</button>
        </div>
    )
}

   
}
// export default class User extends Component {
    

//     render() {
//         return (<div>
//            <b>{this.props.userName}</b>
//         </div>)
//     }
//     // toggle = () => {
//     //     this.setState({

//     //         active: !this.state.active
//     //     })


//     // }
// }

//export default User