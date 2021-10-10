import React from 'react'
import Intro from './intro/Intro'
import Sites from './sites/Sites'
import Subscriptions from './subscriptions/Subscriptions'

export default function icpc() {
    return (
        <div className="sections">
        <Intro/>
        <Subscriptions/>
        <Sites/>
        </div>
    )
}
