import React from 'react'
import Style from './hero.module.css';
import HeroImage from '../image/Screenshot_2.png';
import TeamImage from '../image/Screenshot_3.png';
import GridImage from '../image/Screenshot_4.png';
import ZoomImage from '../image/Screenshot_13.png'
import IbmImage from '../image/Screenshot_14.png';
import DocoImage from '../image/Screenshot_15.png';
import UclaImage from '../image/Screenshot_16.png';
import RakutenImage from '../image/Screenshot_17.png';
import WebImage from '../image/Screenshot_6.png';
import RememberImage from '../image/Screenshot_7.png';
import SummaryImage from '../image/Screenshot_8.png';
import MeetingImage from '../image/Screenshot_9.png';
import StudentsImage from '../image/Screenshot_10.png';
import VoiceImage from '../image/Screenshot_11.png';

const Hero = () => {
    return (
        <>
            <div className={ Style.header }>
                <div className={ Style.header_hero }>
                    <div className={ Style.written }>
                        <h2>Goodbye manual notes. Hello OtterPilot™</h2>
                    </div>
                    <div className={ Style.written }>
                        <p>Get an AI meeting assistant that records audio, writes notes, automatically captures slides, and generates summaries.</p>
                    </div>
                    <div className={ Style.btn }>
                        <button>Start for Free</button>
                    </div>
                </div>


                <div className={ Style.header1 }>
                    <img src={ HeroImage } alt="" />
                </div>
            </div>

            <div className={ Style.text_team }>
                <h1>Write Notes and Summarize  Meetings 30x faster</h1>
                <p>Collaborate with teammates in the live transcript, by adding comments, highlighting key points, and  assigning action items.</p>
            </div>

            <div className={ Style.team }>
                <div className={ Style.picture_img }>
                    <img src={ TeamImage } alt="" />
                </div>

            </div >


            <div className={ Style.grid }>
                <div className={ Style.grid_in }>
                    <img src={ GridImage } alt="" />
                </div>
                <div className={ Style.grid_in }>
                    <img src={ ZoomImage } alt="" />
                </div>
                <div className={ Style.grid_in }>
                    <img src={ IbmImage } alt="" />
                </div>
                <div className={ Style.grid_in }>
                    <img src={ DocoImage } alt="" />
                </div>
                <div className={ Style.grid_in }>
                    <img src={ UclaImage } alt="" />
                </div>
                <div className={ Style.grid_in }>
                    <img src={ RakutenImage } alt="" />
                </div>
            </div>

            <div className={ Style.zoom }>
                <div className={ Style.zoom_text }>
                    <h1>Save time with Automated Meeting Notes</h1>
                    <p>Connect Otter to your Google or Microsoft calendar and it can automatically join and record your meetings on Zoom, Microsoft Teams, and  Google Meet.  Follow along live on the web or in  the iOS or Android app.</p>
                </div>
                <div className={ Style.zoom_img }>
                    <img src={ WebImage } alt="" />
                </div>
            </div>

            <div className={ Style.Remember }>
                <div className={ Style.remember_img }>
                    <img src={ RememberImage } alt="" />
                </div>

                <div className={ Style.remember_text }>
                    <h1>Remember key details with Automated Slide Capture</h1>
                    <p>When someone shares slides during a virtual meeting, Otter automatically captures and inserts them into the meeting notes, providing complete  context of the content that was discussed.</p>
                </div>
            </div>

            <div className={ Style.zoom }>
                <div className={ Style.zoom_text }>
                    <h1>​Keep everyone aligned with Live Summary</h1>
                    <p>After the meeting, Otter generates and emails a summery that allows you to easilyrecall and share And share key information, saving you time from having to revsit the entire transcript</p>
                </div>
                <div className={ Style.zoom_img }>
                    <img src={ SummaryImage } alt="" />
                </div>

            </div>


            <div className={ Style.box }>
                <div className={ Style.inbox }>

                    <img src={ MeetingImage } alt="" />
                    <h3>Get the most out
                        of your meetings</h3>
                    <p>Otter empowers everyone to engage and be  more productive in meetings with real time automated notes and audio transcription.</p>
                    <button>Try Otter.ai for Business</button>
                </div>

                <div className={ Style.inbox }>
                    <img src={ StudentsImage } alt="" />
                    <h3>Help students and faculty succeed</h3>
                    <p>Otter provides faculty and students with real time captions and notes for in-person and virtual lectures, classes or meetings.</p>
                    <button>Try Otter.ai for Education</button>
                </div>

                <div className={ Style.inbox }>
                    <img src={ VoiceImage } alt="" />
                    <h3>For all
                        your needs</h3>
                    <p>Otter has you covered with real-time voice transcription and features to empower more productive interactions.</p>
                    <button>Try Otter.ai Free</button>
                </div>
            </div>

        </>
    )
}
export default Hero