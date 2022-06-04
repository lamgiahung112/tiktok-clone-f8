import Tippy from "@tippyjs/react/headless"
import classNames from "classnames/bind"

import { Wrapper as PopperWrapper } from "~/components/Popper"
import styles from "./Menu.module.css"
import MenuItem from "./MenuItem"
import Header from "./Header"
import { useState } from "react"

const cx = classNames.bind(styles)

function Menu({ items = [], children }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, idx) => {
            const isParent = !!item.children

            return (
                <MenuItem
                    key={idx}
                    data={item}
                    onClick={() => {
                        if (!isParent) return null
                        setHistory((prev) => [...prev, item.children])
                    }}
                />
            )
        })
    }

    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-items")}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1)
                                    )
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
