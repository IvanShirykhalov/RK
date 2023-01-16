import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const onClickSetActive = () => setActive(!active)
    const onItemClick = (value: string | null) => {
        props.onChange(value)
        onClickSetActive()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const challenger = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (challenger) {
                        props.onChange(challenger.value)
                        return
                    }

                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
                return
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <div tabIndex={0} onKeyUp={onKeyUp}>
            <span className={s.select} onClick={onClickSetActive}>{selectedItem?.title}</span>
            {active && <div className={s.items}>{props.items.map((i) =>
                <div
                    onMouseEnter={() => setHoveredElementValue(i.value)}
                    className={`${s.item} ${(hoveredItem === i ? s.selected : '')}`}
                    key={i.value}
                    onClick={() => onItemClick(i.value)}>
                    {i.title}
                </div>)}
            </div>}

        </div>
    );
};

export default Select;