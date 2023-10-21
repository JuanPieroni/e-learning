import './App.css'
//Components
import { Header } from './components/Header'
import { Title } from './components/Title'
import headerImg from './img/header-img.png'
import { Button } from './components/Button'
import { Modal } from './components/Modal'

import { useState } from 'react'

//ICONS
import {
    AiFillHtml5,
    AiFillPlayCircle,
    AiFillFileExcel,
    AiFillUnlock,
} from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { DiCss3Full, DiReact } from 'react-icons/di'
import { FaRProject, FaPeopleGroup } from 'react-icons/fa6'
import {
    BiLogoPython,
    BiLogoJava,
    BiServer,
    BiSolidMap,
    BiDownload,
} from 'react-icons/bi'

import { CategoriesCard } from './components/page-components/CategoriesCard'
import { OffersCard } from './components/page-components/OffersCard'
import { TestimonialCard } from './components/page-components/TestimonialCard'
import { TestimonialsList } from './components/Lists/TestimonialsList'

function App() {
    const hi = () => {
        window.alert('Hi')
    }

    // STATES
    //Modal State
    const [showCourseModal, setShowCourseModal] = useState(false)
    //Offer State
    const [showOffers, setsShowOffers] = useState(false)
    //HANDLERS
    //Modal Handlers

    const handleStartLearningEvent = () => {
        setShowCourseModal(true)
    }
    const handleModalCancelEvent = () => {
        setShowCourseModal(false)
    }

    //OFFERS HANDLER
    const handleShowOffers = () => {
        setsShowOffers(!showOffers)
    }

    //CARD LIST
    const cardList = [{}]

    //OFFERS LIST

    const offerList = [
        {
            icon_1: <AiFillUnlock className="icon" size={'2em'} />,
            title: 'Tons of content',
            text: 'We have a library of over 100,000 videos that will help you learn to code.',
        },
        {
            icon_1: <BiSolidMap className="icon" size={'2em'} />,
            title: 'Guided Course',
            text: 'We guided you with series of videos that will help you learn to code.',
        },
        {
            icon_1: <BiDownload className="icon" size={'2em'} />,
            title: 'Project File Downloads',
            text: 'File from project are available for all of our courses to be downloaded',
        },
    ]
    const moreOffersList = [
        {
            icon_1: <AiFillUnlock className="icon" size={'2em'} />,
            title: 'Tons of content',
            text: 'We have a library of over 100,000 videos that will help you learn to code.',
        },
        {
            icon_1: <BiSolidMap className="icon" size={'2em'} />,
            title: 'Guided Course',
            text: 'We guided you with series of videos that will help you learn to code.',
        },
        {
            icon_1: <BiDownload className="icon" size={'2em'} />,
            title: 'Project File Downloads',
            text: 'File from project are available for all of our courses to be downloaded',
        },
    ]

    return (
        <>
            <div className="container container-lg">
                {/* MODAL */}
                {showCourseModal && (
                    <Modal
                        title={'Acces denied'}
                        text="Please Log in order to access this content"
                        cancelEvent={handleModalCancelEvent}
                    />
                )}
                {/* HEADER */}
                <Header>
                    <div className="header-content mb-2">
                        <Title
                            text="Learn to code by watching others"
                            classes="header-title fs-xxl mb-3"
                        />
                        <p className="header-text mb-3">
                            See how experienced developers solve problems in
                            real-time. Watching scripted tutorials is great, but
                            understanding how developers think is invaluable.
                        </p>
                        <div className="header-btn">
                            <Button
                                classes={'btn-primary text-light'}
                                type={`button`}
                                text="  Try it Free 30 days"
                                onClick={handleStartLearningEvent}
                            />
                            <Button
                                classes={'btn-secondary'}
                                type={`button`}
                                text=" Learn more..."
                            />
                        </div>
                        <img
                            src={headerImg}
                            alt="header-img"
                            className="header-img"
                        />
                    </div>
                </Header>
                {/* MAIN  */}
                <main>
                    {/* CATEGORIES */}
                    <section className="categories my-4">
                        <Title
                            text="Top categories"
                            classes={'subtitle text-center'}
                        />

                        <div className="categories-container d-flex">
                            <CategoriesCard
                                title={'Web Development'}
                                icon_1={
                                    <AiFillHtml5
                                        size={'4em'}
                                        className="icon icon-html"
                                    />
                                }
                                icon_2={
                                    <DiCss3Full
                                        size={'4em'}
                                        className="icon icon-css3 "
                                    />
                                }
                                icon_3={
                                    <SiJavascript
                                        size={'4em'}
                                        className="icon icon-js"
                                    />
                                }
                                btnIcon={<AiFillPlayCircle size={'2em'} />}
                                startLearningEvent={handleStartLearningEvent}
                            >
                                <span className="fs-lg">
                                    Learn How to Build Web Apps with:
                                </span>

                                <ul className="mt-1">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </CategoriesCard>
                            <CategoriesCard
                                title={'Mobile Development'}
                                icon_1={
                                    <DiReact size={'4em'} className="icon  " />
                                }
                                icon_3={
                                    <SiJavascript
                                        size={'4em'}
                                        className="icon icon-js"
                                    />
                                }
                                btnIcon={<AiFillPlayCircle size={'2em'} />}
                                startLearningEvent={handleStartLearningEvent}
                            >
                                <span className="fs-lg">
                                    Learn How to Build Mobile Apps with:
                                </span>

                                <ul className="mt-1">
                                    <li>React Native</li>

                                    <li>JavaScript</li>
                                    <li>Expo</li>
                                </ul>
                            </CategoriesCard>
                            <CategoriesCard
                                title={'Data Science'}
                                icon_1={
                                    <BiLogoPython
                                        size={'4em'}
                                        className="icon  "
                                    />
                                }
                                icon_2={
                                    <FaRProject
                                        size={'4em'}
                                        className="icon icon-css3 "
                                    />
                                }
                                icon_3={
                                    <BiLogoJava
                                        size={'4em'}
                                        className="icon icon-js"
                                    />
                                }
                                btnIcon={<AiFillPlayCircle size={'2em'} />}
                                startLearningEvent={handleStartLearningEvent}
                            >
                                <span className="fs-lg">
                                    Learn How to analize data with:
                                </span>

                                <ul className="mt-1">
                                    <li>Python</li>

                                    <li>R</li>
                                    <li>Java</li>
                                </ul>
                            </CategoriesCard>
                            <CategoriesCard
                                title={'Business'}
                                icon_1={
                                    <DiReact size={'4em'} className="icon  " />
                                }
                                icon_2={
                                    <FaPeopleGroup
                                        size={'4em'}
                                        className="icon icon-css3 "
                                    />
                                }
                                icon_3={
                                    <BiServer
                                        size={'4em'}
                                        className="icon icon-js"
                                    />
                                }
                                btnIcon={<AiFillPlayCircle size={'2em'} />}
                                startLearningEvent={handleStartLearningEvent}
                            >
                                <span className="fs-lg">
                                    Learn How to analize data
                                </span>

                                <ul className="mt-1">
                                    <li>Excel</li>

                                    <li>Power BI</li>
                                    <li>SQL</li>
                                </ul>
                            </CategoriesCard>
                        </div>
                    </section>
                    {/* OFFERS */}
                    <section className="offers container container-md p-2">
                        <Title
                            classes={'subtitle text-center mb-4'}
                            text="Here's what you get"
                        />
                        <div className="offers-container">
                            {offerList.map((offer, index) => (
                                <OffersCard
                                    key={index}
                                    icon_1={offer.icon_1}
                                    title={offer.title}
                                    text={offer.text}
                                ></OffersCard>
                            ))}
                        </div>
                        {showOffers && (
                            <div className="offers-container fadeIn">
                                {moreOffersList.map((offer, index) => (
                                    <OffersCard
                                        key={index}
                                        icon_1={offer.icon_1}
                                        title={offer.title}
                                        text={offer.text}
                                    ></OffersCard>
                                ))}
                            </div>
                        )}
                        <a  
                            href='#'
                            onClick={handleShowOffers}
                            style={{
                                cursor: 'pointer',
                                textDecoration: 'underline',
                            }}
                        >
                            <h4 className="text-center text-primary mt-2">
                                {showOffers ? 'Less' : 'More...'}
                            </h4>
                        </a>
                    </section>
                    {/* TESTIMONIALS  */}
                    <section className="testimonials my-4">
                        <Title
                            classes={'subtitle text-center mb-4'}
                            text="What our users say"
                        />
                        <div className='testimonials-container'>
                          <TestimonialsList />
                        {/*   <TestimonialCard />   */}
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default App
