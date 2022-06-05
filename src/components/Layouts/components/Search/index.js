import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons"
import HeadlessTippy from "@tippyjs/react/headless"
import "tippy.js/dist/tippy.css"
import { useEffect, useRef, useState } from "react"

import * as searchService from "~/services/searchService"
import { Wrapper as PopperWrapper } from "~/components/Popper"
import styles from "./Search.module.css"
import classNames from "classnames/bind"

import AccountItem from "~/components/AccountItem"
import { SearchIcon } from "~/components/Icons"
import { useDebounce } from "~/hooks"

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounced = useDebounce(searchValue, 500)

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResults([])
            return
        }

        const fetchAPI = async () => {
            setLoading(true)
            const data = await searchService.search(debounced)
            setSearchResults(data)
            setLoading(false)
        }

        fetchAPI()
    }, [debounced])

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
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
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
                {!!searchValue && !loading && (
                    <button className={cx("clear")} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        className={cx("spinner")}
                        icon={faSpinner}
                    />
                )}

                <button className={cx("search-btn")}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search
