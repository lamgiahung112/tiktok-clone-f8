import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

import styles from "./Header.module.css"
import classNames from "classnames/bind"
import images from "~/assets/img"
import Button from "~/components/Button"
import Menu from "~/components/Popper/Menu"
import Image from "~/components/Image"
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons"
import Search from "../Search"

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
    const currentUser = true

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

                <Search />

                <div className={cx("actions")}>
                    {/* LOGGED IN */}
                    {currentUser && (
                        <>
                            <Tippy content="Upload videos" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
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
                            <Image
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
