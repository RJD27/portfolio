import React from "react";

function Intro() {
    return (
        <div className="flex items-center 
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white
            mb-1 md:mb-3 font-bold">Randy De Leon</h1>
            <p className="text-base md:text-xl mb-3
            font-medium">Software Developer</p>
            <p className="text-sm max-w-xl mb-6
            font-bold">I'm a passionate developer with a love for learning and creating. I enjoy working on both the technical aspects of software development and collaborating with others to bring ideas to life.  In my free time, I love to unwind by going surf fishing or playing video games, but my true passion lies in the problem-solving challenges and endless learning opportunities that software development offers.</p>
        </div>
    )
}

export default Intro;