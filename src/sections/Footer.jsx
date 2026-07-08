import React from 'react'
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/*<div className="flex flex-col justify-center md:items-start items-center">*/}
                {/*    <div className="socials">*/}
                {/*        {socialImgs.map((img) => (*/}
                {/*            <>*/}
                {/*                <a className="icon" target="_blank" href={img.url} key={img.url}>*/}
                {/*                    <img src={img.imgPath}/>*/}
                {/*                </a>*/}
                {/*            </>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*    <p className="text-center md:text-end">*/}
                {/*        © {new Date().getFullYear()}, Thavisha Dayarathna*/}
                {/*    </p>*/}
                {/*</div>*/}
                <div className="flex items-center gap-4">
                    <div className="socials">
                        {socialImgs.map((img) => (
                            <a
                                key={img.url}
                                className="icon"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={img.url}
                            >
                                <img src={img.imgPath} alt=""/>
                            </a>
                        ))}
                    </div>

                    <p className="text-white-50 text-sm">
                        © {new Date().getFullYear()}, Thavisha Dayarathna
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
