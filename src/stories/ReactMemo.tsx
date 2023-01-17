import React, {memo, useState} from 'react'


type UserType = {
    users: string[]
}


const NewMessagesCounter = (props: { count: number }) => {
    console.log('NewMessagesCounter')
    return <div>{props.count}</div>
}

const Users = React.memo((props: UserType) => {
    console.log('Users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
})
export const Example1 = () => {


    const [count, setCount] = useState<number>(1)
    const [users, setUsers] = useState<string[]>(['Oleg', 'Gleb', 'Fedor'])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>
}