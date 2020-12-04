import React from 'react'
import * as FaIcons from 'react-icons/fa';
import './footer.scss'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer background-color-dark box-shadow">
                <div>
                    <span>Christine Adams</span>
                    <a href="https://www.linkedin.com/in/christine-adams-180646123/" className="icons"><FaIcons.FaLinkedin/></a>
                    <a href="https://github.com/littlecourage" className="icons"><FaIcons.FaGithub /></a>
                </div>
                <div>
                    <span>Dane Mauland</span>
                    <a href="https://www.linkedin.com/in/dane-m-63a34412a" className="icons"><FaIcons.FaLinkedin /></a>
                    <a href="https://github.com/danemauland" className="icons"><FaIcons.FaGithub /></a>
                </div>
                <div>
                    <span>Lauren Thompson</span>
                    <a href="https://www.linkedin.com/in/laurelisthompson/" className="icons"><FaIcons.FaLinkedin /></a>
                    <a href="https://github.com/laurelisthompson" className="icons"><FaIcons.FaGithub /></a>
                </div>
                <div>
                    <span>Prabhkiran Kaur</span>
                    <a href="https://www.linkedin.com/in/prabhkiran-kaur-a4754161/" className="icons"><FaIcons.FaLinkedin /></a>
                    <a href="https://github.com/prabhkirank12" className="icons"><FaIcons.FaGithub /></a>
                </div>
            </footer>
        )
    }
}

export default Footer;


