import React from 'react'
import Intro from './intro/Intro'
import Modalities from './modalities/Modalities';
import Subscriptions from './subscriptions/Subscriptions'

export default function CTF() {
    return (
        <div className="sections">
        <Intro/>
        <Modalities/>
        <Subscriptions/>
        </div>
    )
}
