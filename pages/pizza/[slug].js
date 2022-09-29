import Layout from "../../components/Layout"
import css from '../../styles/Pizza.module.css'
import React, { useState } from 'react';
import Image from "next/image";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { client, urlFolder } from "../../lib/client";

export default function Pizza({ pizza }) {
    const src = urlFolder(pizza.image).url()

    const [size, setSize] = useState(1);
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        type === 'inc' ? setQuantity((prev) => prev + 1) : quantity === 1 ? null : setQuantity((prev) => prev - 1)
    };

    return (
        <Layout>
            <div className={css.container}>
                <div className={css.imageWrapper}>
                    <Image loader={() => src} unoptimized alt='image' src={src} layout='fill' objectFit="cover" />
                </div>

                <div className={css.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details}</span>

                    <span>  <span style={{ color: "var(--themeRed)" }}>$</span> {pizza.price[size]}</span>
                    <div className={css.size}>
                        <span>Size</span>
                        <div className={css.sizeVariants}>
                            <div onClick={() => setSize(0)}
                                className={size === 0 ? css.selected : ""}
                            >Small</div>
                            <div onClick={() => setSize(1)}
                                className={size === 1 ? css.selected : ""}
                            >Medium</div>
                            <div onClick={() => setSize(2)}
                                className={size === 2 ? css.selected : ""}
                            >Large</div>
                        </div>
                    </div>

                    <div className={css.quantity}>
                        <span>Quantity</span>

                        <div className={css.counter}>
                            <Image src={LeftArrow} height="20" width="20" alt="image" objectFit="contain" onClick={() => handleQuantity('dec')} />

                            <span>{quantity}</span>

                            <Image src={RightArrow} height="20" width="20" alt="image" objectFit="contain" onClick={() => handleQuantity('inc')} />
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: 'blocking'
    }
};

// eslint-disable-next-line @next/next/no-typos
export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    const pizza = await client.fetch(
        `*[_type=="pizza" && slug.current == '${slug}'][0]`
    );

    return {
        props: {
            pizza,
        }
    }
}

