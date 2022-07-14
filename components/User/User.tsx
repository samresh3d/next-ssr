import React, { useEffect, useState } from 'react'
import style from './style.module.css';


type NameType = {
    "title": "Mr" | "Mrs";
    "first": String;
    "last": String;
    }
type DobType =  {
    "date": String;
    "age": Number;
    }
export type UserType = {
    "gender": "male" | "female";
    "name": NameType;
    "dob":DobType;
    }

    
type UserPropType = {
    user: UserType;
}
export default function User( {user} : UserPropType) {

return (
    <div className={style.userContainer}>
        <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
        <span>{`${user.dob.age} years old`}</span>
    </div>
)
} 