import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import './footer.scss'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer background-color-dark box-shadow">
                <div>
                    <span>Christine Adams</span>
                    <a href="https://www.linkedin.com/in/christine-adams-180646123/" className="icons" target="_blank"><FaIcons.FaLinkedin/></a>
                    <a href="https://github.com/littlecourage" className="icons" target="_blank"><FaIcons.FaGithub /></a>
                    <a href="https://angel.co/u/christine-adams-5" className="icons" target="_blank"><FaIcons.FaAngellist /></a>
                    <a href="https://littlecourage.github.io/" className="icons" target="_blank"><CgIcons.CgProfile /></a>
                </div>
                <div>
                    <span>Dane Mauland</span>
                    <a href="https://www.linkedin.com/in/dane-m-63a34412a" className="icons" target="_blank"><FaIcons.FaLinkedin /></a>
                    <a href="https://github.com/danemauland" className="icons" target="_blank"><FaIcons.FaGithub /></a>
                    <a href="https://angel.co/u/dane-mauland" className="icons" target="_blank"><FaIcons.FaAngellist /></a>
                    <a href="https://danemauland.github.io/" className="icons" target="_blank"><CgIcons.CgProfile /></a>
                </div>
                <div>
                    <span>Lauren Thompson</span>
                    <a href="https://www.linkedin.com/in/laurelisthompson/" className="icons" target="_blank"><FaIcons.FaLinkedin /></a>
                    <a href="https://github.com/laurelisthompson" className="icons" target="_blank"><FaIcons.FaGithub /></a>
                    <a href="https://angel.co/u/laurelisthompson" className="icons" target="_blank"><FaIcons.FaAngellist /></a>
                    <a href="https://laurelisthompson.github.io/" className="icons" target="_blank"><CgIcons.CgProfile /></a>
                </div>
                <div>
                    <span>Prabhkiran Kaur</span>
                    <a href="https://www.linkedin.com/in/prabhkiran-kaur-a4754161/" className="icons" target="_blank"><FaIcons.FaLinkedin /></a>
                    <a href="https://github.com/prabhkirank12" className="icons" target="_blank"><FaIcons.FaGithub /></a>
                    <a href="https://angel.co/u/prabhkiran-kaur" className="icons" target="_blank"><FaIcons.FaAngellist /></a>
                    <a href="https://prabhkirank12.github.io/" className="icons" target="_blank"><CgIcons.CgProfile /></a>
                </div>
            </footer>
        )
    }
}

export default Footer;


