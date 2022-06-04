import { Wrapper as PopperWrapper } from "~/components/Popper"
import Tippy from "@tippyjs/react/headless"

import styles from "./Menu.module.css"
import classNames from "classnames/bind"
import MenuItem from "./MenuItem"

const cx = classNames.bind(styles)

function Menu({ items = [], children }) {
    const renderItems = () => {
        return items.map((item, idx) => <MenuItem key={idx} data={item} />)
    }

    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-items")}>
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
