import React from 'react'
import About from './about/About'
import Activities from './activities/Activities'
import Intro from './intro/Intro'
import Objectives from './objectives/Objectives'
import Preparing from './preparing/Preparing'
import Subscription from './subscription/Subscription'
import TeacherList from './teacherList/TeacherList'

export default function HomePage() {
    return (
        <div className="sections">
        <Intro />
        <About />
        <Objectives/>
        <Activities />
        <Preparing />
        <TeacherList />
        <Subscription />
      </div>
    )
}
