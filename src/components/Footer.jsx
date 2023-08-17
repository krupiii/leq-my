import React from 'react'
import Style from './footer.module.css';
import LogoImage from '../image/Screenshot_1.png';

const Footer = () => {
    return (
        <>
            <div className={ Style.footer }>
                <div className={ Style.infooter }>
                    <div className={ Style.photo }>
                        <img src={ LogoImage } alt="" />
                    </div>

                    <div className={ Style.details }>
                        <div>
                            <p>why otter.ai</p>
                            <ul>
                                <li>Otter for Business</li>
                                <li>Otter for Education</li>
                                <li>Otter for Individuals</li>
                                <li>Pricing</li>
                                <li>Otter AI Chat</li>
                                <li>Otter for Transcription</li>
                            </ul>
                        </div>

                        <div>
                            <p>Download</p>
                            <ul>
                                <li>for iOS</li>
                                <li>for Android</li>
                                <li>Chrome Extension</li>
                                <li>All Apps</li>


                            </ul>
                        </div>
                        <div>
                            <p>Resources</p>
                            <ul>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Press</li>
                                <li>Help & Support</li>
                                <li>Media Kit</li>
                                <li>Affiliate</li>
                                <li>Privacy & Security</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={ Style.last }>
                    <div className={ Style.condition }>
                        <p>© 2023 Otter.ai</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>JP</p>
                        <p>Zoom</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Footer