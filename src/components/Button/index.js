import classNames from "classnames/bind"
import { Link } from "react-router-dom"

import styles from "./Button.module.css"

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    leftIcon,
    rightIcon,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    className,
    onClick,
    children,
    ...passProps
}) {
    let Comp = "button"
    const _props = {
        onClick,
        ...passProps,
    }

    // remove event listeners when disabled
    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith("on") && typeof _props[key] === "function") {
                delete _props[key]
            }
        })
    }

    if (to) {
        _props.to = to
        Comp = Link
    } else if (href) {
        _props.href = href
        Comp = "a"
    }

    const classes = cx("wrapper", {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        small,
        large,
        disabled,
    })

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button
