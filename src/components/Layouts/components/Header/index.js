import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons"
import Tippy from "@tippyjs/react/headless"

import { Wrapper as PopperWrapper } from "~/components/Popper"
import styles from "./Header.module.css"
import classNames from "classnames/bind"
import images from "~/assets/img"
import AccountItem from "~/components/AccountItem"

const cx = classNames.bind(styles)

function Header() {
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([])
        }, 0)
    }, [])

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt="tiktok" />
                <Tippy
                    interactive
                    visible={searchResults.length}
                    render={(attrs) => (
                        <div
                            className={cx("search-results")}
                            tabindex="-1"
                            {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}>
                    <div className={cx("search")}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx("clear")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx("spinner")}
                            icon={faSpinner}
                        />

                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx("actions")}></div>
            </div>
        </header>
    )
}

export default Header
