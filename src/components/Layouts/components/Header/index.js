import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faSignOut,
    faSpinner,
    faUser,
} from "@fortawesome/free-solid-svg-icons"
import HeadlessTippy from "@tippyjs/react/headless"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

import { Wrapper as PopperWrapper } from "~/components/Popper"
import styles from "./Header.module.css"
import classNames from "classnames/bind"
import images from "~/assets/img"
import AccountItem from "~/components/AccountItem"
import Button from "~/components/Button"
import Menu from "~/components/Popper/Menu"

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                { code: "en", title: "English" },
                { code: "vi", title: "Vietnamese" },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
]

function Header() {
    const [searchResults, setSearchResults] = useState([])

    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([])
        }, 0)
    }, [])

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: "/profile",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get coins",
            to: "/coins",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/settings",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            separate: true,
        },
    ]

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt="tiktok" />
                <HeadlessTippy
                    interactive
                    offset={[12, 8]}
                    visible={searchResults.length}
                    render={(attrs) => (
                        <div
                            className={cx("search-results")}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </HeadlessTippy>
                <div className={cx("actions")}>
                    {/* LOGGED IN */}
                    {currentUser && (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload videos"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <button className={cx("action-btn")}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    )}
                    {/* NOT LOGGED IN */}
                    {!currentUser && (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <img
                                src="https://i1-dulich.vnecdn.net/2021/05/18/VnExpress-MauSon-8-1621330133.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=X_iGQixCkD-NdR8qXNgRAQ"
                                alt="LGH"
                                className={cx("user-avatar")}
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
