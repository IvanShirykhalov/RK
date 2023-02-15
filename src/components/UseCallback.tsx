import React, {useCallback, useMemo, useState} from "react";

const LikeUseCallback = (props: { count: number }) => {
    console.log('NewMessagesCounter')
    return <div>{props.count}</div>

}

const Books = React.memo((props: { books: string[]; addBooks: () => void }) => {
    console.log('Books')
    return <div>
        <button onClick={props.addBooks}>add new book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}</div>
})
export const Example1 = () => {
    console.log('Example1')

    const [count, setCount] = useState<number>(1)
    const [books, setBooks] = useState<string[]>(['html', 'css', 'js'])


    /*    const addBooks = useMemo(() => {
            return () => {
                setBooks([...books, 'new book'])
            }
        }, [books])*/

    const addBooks = useCallback(() => {
        setBooks([...books, 'new book'])
    }, [books])



    /*const newArr = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('o') > -1)
    }, [books])*/

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Books books={books} addBooks={addBooks}/>
    </>
}

