import css from '../styles/Services.module.css'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import Image from 'next/image'

export default function Services() {
    return (
        <div>
            <div className={css.heading}>
                <span>WHAT WE SERVE</span>
                <span>Your Favorite Food</span>
                <span>Delivery Partner</span>
            </div>

            <div className={css.services}>
                <div className={css.feature}>
                    <div className={css.ImageWrapper}>
                        <Image src={s1} alt="icon" objectFit="cover" layout="intrinsic" />
                    </div>

                    <span>Easy to Order</span>
                    <span>Delivery that is always on time even faster</span>
                </div>
                <div className={css.feature}>  <div className={css.ImageWrapper}>
                    <Image src={s2} alt="icon" objectFit="cover" layout="intrinsic" />
                </div>

                    <span>Easy to Order</span>
                    <span>You only needd a few steps in food ordering</span></div>
                <div className={css.feature}>  <div className={css.ImageWrapper}>
                    <Image src={s3} alt="icon" objectFit="cover" layout="intrinsic" />
                </div>

                    <span>Easy to Order</span>
                    <span>Not only fast for us, qulity is also number one</span></div>
            </div>
        </div>
    )
}; 