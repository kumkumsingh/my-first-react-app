import React ,{Component} from 'react';
import User from './User';

function UserBoard(){
    return(
        <div>
            <User userName="kumkum"></User>
            <User userName="Rajmohan"></User>
            <User userName="Vishakan"></User>
            <User userName="Vrishab"></User>
        </div>
    )
}

export default UserBoard