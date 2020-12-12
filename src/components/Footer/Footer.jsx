import React from 'react';

import s from '../Footer/Footer.module.css';
import { FooterMenu } from './FooterMenu/FooterMenu';
import { Socials } from './Socials/Socials';

export class Footer extends React.Component {
    render(){
        return(
            <footer className={s.footer}>
                <div className={s.container}>
                    <FooterMenu />
                    <Socials />
                </div>
            </footer>
        )
    }
}