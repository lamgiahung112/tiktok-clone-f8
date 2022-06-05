import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons"
import HeadlessTippy from "@tippyjs/react/headless"
import "tippy.js/dist/tippy.css"

import { Wrapper as PopperWrapper } from "~/components/Popper"
import styles from "./Search.module.css"
import classNames from "classnames/bind"

import AccountItem from "~/components/AccountItem"
import { SearchIcon } from "~/components/Icons"
import { useEffect, useRef, useState } from "react"

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [showResult, setShowResult] = useState(true)

    useEffect(() => {
        setTimeout(() => setSearchResults([1, 2, 3]), 0)
    }, [])

    const inputRef = useRef()

    const handleHideResult = () => setShowResult(false)
    const handleShowResult = () => setShowResult(true)

    const handleClear = () => {
        setSearchValue("")
        setSearchResults([])
        inputRef.current.focus()
    }

    return (
        <HeadlessTippy
            interactive
            offset={[12, 8]}
            placement="bottom"
            visible={showResult && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx("search-results")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx("search-title")}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx("search")}>
                <input
                    onFocus={handleShowResult}
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    spellCheck={false}
                />
                {!!searchValue && (
                    <button className={cx("clear")} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                <FontAwesomeIcon className={cx("spinner")} icon={faSpinner} />

                <button className={cx("search-btn")}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search
