import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import { UilShoppingBag } from '@iconscout/react-unicons'
import { useStore } from '../store/store'

export default function Header(params) {
    return (
        <div className={css.header}>
            <div className={css.logo}>
                <Image src={Logo} alt="logo" width="50" height='50' />
                <span>Fudo</span>
            </div>

            <ul className={css.menu}>
                <li>Home</li>
                <li>Menu</li>
                <li>contact</li>
            </ul>

            <div className={css.rightSide}>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color="#2E2E2E" />
                    <div className={css.badge}>
                        1
                    </div>
                </div>
            </div>
        </div>
    )
};
