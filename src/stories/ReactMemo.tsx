import React, {memo, useMemo, useState} from 'react'


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
    console.log('Example1')

    const [count, setCount] = useState<number>(1)
    const [users, setUsers] = useState<string[]>(['Oleg', 'Gleb', 'Fedor'])

    const newArr = useMemo(() => {
        const newArr = users.filter(u => u.toLowerCase().indexOf('o') > -1)
        return newArr
    }, [users])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {/*<NewMessagesCounter count={count}/>*/}
        {count}
        <Users users={newArr}/>
    </>
}