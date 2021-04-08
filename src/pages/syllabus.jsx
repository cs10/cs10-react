import React from "react";
import NavigationBar from "../components/navigation.jsx"
import "../styles/sassets/syllabus.scss";
import { Head } from "../components/head.jsx";
import { ListGroup } from 'react-bootstrap';
import { QuickLinkInternal } from "../components/quick-links.jsx";
import { Doughnut } from "react-chartjs-2";

class SyllabusPage extends React.Component {

    render() {
        return (
            <div>
                <Head />
                <NavigationBar />
                <div className="container-fluid">
                    <h1>
                        Syllabus
                    </h1>
                    <div className="syllabus-component">
                        {SyllabusSections()}
                        {SyllabusBody()}
                    </div>
                </div>
            </div>
        );
    }
}

/*
    Main rendered components here.
    Handles the actual logic of what should be displayed and how.
*/

function SyllabusSections() {
    let sections = [
        {
            icon: "trip_origin",
            label: "Overview",
            link: "#overview"
        },
        {
            icon: "group",
            label: "Sections",
            link: "#sections"
        },
        {
            icon: "school",
            label: "Staff",
            link: "#staff"
        },
        {
            icon: "leaderboard",
            label: "Grading",
            link: "#grading"
        },
        {
            icon: "laptop",
            label: "Technologies",
            link: "#course-tech"
        },
        {
            icon: "security",
            label: "Integrity",
            link: "#integrity"
        }
    ]

    let links = sections.map(section => QuickLinkInternal(section.icon, section.label, section.link))
    return (
        <div className="syllabus-nav">
            {links}
        </div>
    )
}

function SyllabusBody() {
    return (
        <div className="syllabus-body">
            {CourseOverview()}
            {Sections()}
            {Staff()}
            {Grading()}
            {Technology()}
            {AcademicIntegrity()}
        </div>
    )
}

/*
    Individual Components of the Syllabus are located here.
    Edit these if you only want to change the content.
    All sections should subclass Syllabus Section and have a unique id.
*/

function CourseOverview() {
    return (
        <div id="overview" className="syllabus-topic">
            <h2>
                Overview
            </h2>
            <div className="syllabus-section" >
                <div className="header">
                    Welcome!
                </div>
                <div className="body">
                    In Spring 2021, CS10 is expanding upon last fall's teaching plan to better support students and 
                    encourage participation during this unusual online offering of the course. Special thank 
                    you to John DeNero and the CS61A team for writing the original document which this was based on.
                </div>
                <div className="body">
                    This course allows time conflicts!
                </div>
            </div>
            <div className="syllabus-section">
                <div className="header">
                    Collaboration, Not Competition
                </div>
                <div className="body">
                    You are encouraged to form study groups and work together to understand course material, 
                    but (unless specified otherwise) all your graded work should be your own. Academic integrity 
                    and ethical conduct are of utmost importance in the College of Engineering and at UC Berkeley, 
                    especially with online offerings. We want to remind you that this course is graded on an 
                    absolute scale – that means that there will be no curve at the end of the course, so you don’t 
                    have to feel the pressure of having to cheat to get your A. You’re competing against an absolute 
                    scale, and you can all (in theory) receive A+ grades! (Though, we might need to make small bin 
                    adjustments if the GPA of the class is below the department suggested range, so we might adjust 
                    your score up, but it’ll never be adjusted down).
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Flexibility and Community
                    </div>
                    <div className="body">
                            Online classes taught during a time of wildfires, power outages, and a worldwide pandemic need to 
                            have policies that support students in different living situations, and in different time zones. 
                            They need to have a way that the students can get to know each other, learn from each other, and 
                            study with each other. They need to have a way the course staff can get to know their students, 
                            and (most importantly) check in with them to make sure their health and learning is going ok. The 
                            deadlines need to have flexibility in case a student or team needs some more time to finish a project 
                            or homework. We believe we have built all of that into our class this semester.
                        </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Synchronous and Asynchronous Learning
                    </div>
                    <div className="body">
                        Research (and anecdotal evidence) have shown that students who keep up with the material every week 
                        do better than students who fall behind, start projects late, and have to cram for each exam at the 
                        last minute. So, as much as you can, attend our face-to-face live session (Mon @ 11am PST … but Wed 
                        when Monday is a holiday) + a discussion (3 different times) synchronously. However, you will not be 
                        penalized for being in a time zone that makes that difficult, and you will find recordings of these 
                        sessions available. The only required synchronous elements are a weekly 15m check-in with you and three 
                        other students with video on (with exceptions on a student-by-student basis), but will have many times 
                        throughout the day available for that, and getting your lab checked off at a lab section.
                    </div>
                </div>
            </div>
        </div>
    )
}

function Sections() {
    return (
        <div id="sections" className="syllabus-topic">
            <h2>
                Sections
            </h2>
            <div className="syllabus-section" >
                <div className="header">
                    Course Elements
                </div>
                <div className="body">
                    We have a few different components to this course, all of which we have 
                    tried to optimize for online learning.
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Lectures
                    </div> 
                    <div className="body">
                        Lecture content has been pre-recorded with high production value. 
                        There will be questions to answer via PrairieLearn after every lecture, 
                        for which you will earn credit. On Mondays at 11 AM, there will be a <strong>live </strong> 
                        weekly summary lecture on Zoom with Dan. All content will be the same as in the recordings, 
                        but in less depth. You are required to watch the recording and encouraged (but not required) 
                        to attend the live sessions. If Monday is a holiday, the live session will be Wednesday. 
                        The live session wil also be recorded.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Lab
                    </div> 
                    <div className="body">
                        Location: Discord. We will have three labs scheduled through the day to be 
                        sensitive to differences in time zones. Lab attendance is encouraged and will 
                        be counted towards extra credit, but is not mandatory. However, labs are required to be checked off at one of the lab sections
                        (i.e. synchronously). If you are unable to attend any of the sections, please contact Shannon.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Discussion
                    </div> 
                    <div className="body">
                        Location: Zoom. Discussion content will be pre-recorded. However, we will also have three live discussion 
                        sections. Discussion attendance is encouraged and will be counted towards extra credit, but is not 
                        mandatory.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Check-ins
                    </div> 
                    <div className="body">
                        Once a week, mandatory fifteen-minute synchronous group check-ins will be scheduled 
                        throughout the day to be sensitive to differences in time zones. Students will earn 
                        credit for attending.
                    </div>
                </div>
            </div>
        </div>
    )
}

function Staff() {
    return (
        <div id="staff" className="syllabus-topic">
            <h2>
                Staff
            </h2>
            <div className="syllabus-section">
                <div className="syllabus-subsection">
                    <div className="header">
                        Head Teaching Assistants
                    </div>
                    <div className="body">
                        <strong>Yolanda Shen and Shannon Hearn</strong> will run the course at a high level and are the points of contact for questions when 
                            you do not know who to reach out to. For any high-level course questions, reach out to either before Dan.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Lead Teaching Assistants
                    </div>
                    <div className="body">
                        All TAs will be heading a specific aspect of the course-- <strong>Bryant Bettencourt (Lab/Lab Development), Andrew Burke (Discussion),
                        Lam Pham (Exams), Dani Swords (Check-Ins), Kellyann Ye (Content), Shannon Hearn (Academic Interns) Yolanda Shen (Course 
                        Development). </strong>
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Lab Teaching Assistants
                    </div>
                    <div className="body">
                        Bryant Bettencourt, Shannon Hearn, and Lam Pham. Please reach out to your individual assigned TA for lab-specific questions.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Discussion Teaching Assistants
                    </div>
                    <div className="body">
                        Andrew Burke, Dani Swords, and Yolanda Shen. Please reach out to your individual assigned TA for discussion-specific questions.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Readers
                    </div>
                    <div className="body">
                        Readers will be in charge of grading for the semester. The readers for the course are <strong>Samhita Sen, 
                        Taroob Zia, and Sarah Varghese</strong>. 
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Tutors
                    </div>
                    <div className="body">
                        Tutors will primarily be running the check-in groups and holding office hours. The tutors for the course are  
                        <strong> Nicholas Lai, Gowri Somayajula, Vaibhav Mohata, and Deeksha Kumar</strong>. Please reach out to the tutors if you 
                        have any concerns about your ability to keep pace with the course, and they will connect you to the right 
                        person or resource needed to assist you.
                    </div>
                </div>
            </div>
        </div>
    )
}

function Technology() {
    return (
        <div id="course-tech" className="syllabus-topic">
            <h2>
                Course Technologies
            </h2>
            <div className="syllabus-section">
                <div className="syllabus-subsection">
                    <div className="header">
                        Zoom
                    </div>
                    <div className="body">
                        The primary medium for all synchronous portions of the course, such as discussion and Dan's live sessions.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Google Drive + Youtube
                    </div>
                    <div className="body">
                        We will release recordings for the course via this platform.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Piazza
                    </div>
                    <div className="body">
                        The class forum for all questions and communication regarding the course.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Gradescope
                    </div>
                    <div className="body">
                        This is where assignments will be turned in and graded.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        PrairieLearn
                    </div>
                    <div className="body">
                        This is where lecture questions will be located. It is also where exams will be taken.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Discord
                    </div>
                    <div className="body">
                        A video conferencing/social community platform where you’ll be able to collaborate 
                        and communicate with course staff as well as other students. Labs will be held via Discord.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        This website!
                    </div>
                    <div className="body">
                        This is the central hub for all information about the course.
                    </div>
                </div>
            </div>
        </div>
    )
}

function Grading() {

    return (
        <div id="grading" className="syllabus-topic">
            <div className="syllabus-section">
                <div className="header">
                    Grading Scheme
                </div>
                <div className="body">
                    The course will be graded out of <strong>500 points</strong>, and there is no curve.
                    The grading breakdown and bins can be found below.
                </div>
            </div>
            <div className="syllabus-section">
                <div className="header">
                    Grading Breakdown
                </div>
                <div classname="body">
                    {GradingBreakdownChart()}
                </div>
                
            </div>
            <div className="syllabus-section">
                <div className="header">
                    Project Points Breakdown
                </div>
                <div classname="body">
                    {ProjectBreakdown()}
                </div>
            </div>
            <div className="syllabus-section">
                <div className="header">
                    Grading Ranges
                </div>
                <div className="body">
                    We will award the following grades based on the following point ranges:
                    <div className="syllabus-subsection">
                        <div className="body">
                            {GradingBins()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="syllabus-section">
                <div className="header">
                    Grading Policies
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Slip Days and Late Policy
                    </div>
                    <div className="body">
                        If you cannot turn in an assignment on time, contact your TA (and partner on partner assignments) 
                        as early as possible. Late project submission requires approval by your TA. For each day a project 
                        is late, one-third of the total points you would have earned on the assignment will be deducted. 
                    </div>
                    <div className="body">
                        You will be granted six slip days throughout the course. A slip day allows you to extend the deadline 
                        period by one day with no penalty. For example, if you turn in an assignment due Sunday at 11:59 PM 
                        any time before Monday at 11:59 PM, you will use one slip day. It will be applied automatically, 
                        and if you use more than 6 throughout the semester, than we will apply them to the assignments in a 
                        way that maximizes your overall course grade.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Clobber Policy
                    </div>
                    <div className="body">
                        The Clobber Policy allows you to: 
                        1. Erase your quest score and replace it with your midterm exam score, 
                        2. Erase your midterm exam score and replace it with your final exam score, 
                        3. Erase your quest score and replace it with your final exam score, 
                        or 4. Erase your quest AND midterm score and replace it with your final exam score. 
                        The clobber policy exists so that if you add the class late or had to miss the quest or midterm due 
                        to unforeseen circumstances, you will be able to receive a grade for the exams.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Pass/No Pass Grading
                    </div>
                    <div className="body">
                        This section only applies to students who are not taking the course for a letter grade. To receive 
                        a Passing grade in the course a student must get at a C-. When taking the class P/NP, a student will 
                        not receive an NP if they at minimum turn in all the course assignments and take all exams with 
                        meaningful effort. This includes: project 1-6, lab check-offs, as well as the quest, midterm, and final.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Resubmission Policy
                    </div>
                    <div className="body">
                        This policy is in place because CS10 has a focus on mastery learning. If you show you know and can implement 
                        project concepts, even if it's after getting your initial grade back, then you should receive credit for it.
                        The ideal case for using a resubmission is if you misunderstood a specification or rubric element -- here 
                        you know how to do something, but didn’t understand exactly what you were being asked to do. Another good 
                        case for resubmission is if you just couldn’t figure out how to code one block, then finally figured it out 
                        after the material had a chance to sink in.
                    </div>
                    <div className="body">
                        We allow for project resubmissions within a week of a project's grade being released. The regrades will 
                        only be counted if it affects your final grade at the end of the semester.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        EPA - Effort, Participation, Altruism
                    </div>
                    <div className="body">
                        EPA is a form of extra credit that we award invisibly at the end of the semester. Essentially, every TA 
                        will have an opportunity to award students with EPA points.
                    </div>
                    <div className="body">
                        <strong> Effort </strong>  stands for the amount of work a TA has recognized that you put into the 
                        course. This can be observed through things like office hours, labs, and more.
                    </div>
                    <div className="body">
                        <strong> Participation </strong> includes being an active voice in discussions, posting and answering 
                        questions on Piazza, and getting involved with the course in other ways.
                    </div>
                    <div className="body">
                        <strong> Altruism </strong> points can be awarded for any observed efforts in helping your peers, 
                        sharing and posting helpful resources on Piazza for your peers, and any other work you put into 
                        furthering your peers’ understanding of the material.
                    </div>
                </div>
            </div>
        </div>
    )
}

function GradingBreakdownChart() {
    let breakdownData = {
        labels: ["Labs", "Quest", "Midterm", "Final", "Projects", "Reading Responses", "Attendance"],
        datasets: [{
            data: [30, 20, 80, 100, 225, 20, 25],
            backgroundColor: ["#cf4ad9", "#EE7C2F", "#F3B200", "#62c213", "#00a178", "#0494dc", "#8f56e3"]
        }]
    }

    let chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1
    }

    return (
        <Doughnut 
            id="breakdown-chart"
            data={breakdownData} 
            options={chartOptions}
        />
    )
}

function ProjectBreakdown() {

    const points = [
        {
            proj: "Project 1",
            points: 10
        },
        {
            proj: "Project 2",
            points: 20
        },
        {
            proj: "Project 3",
            points: 30
        },
        {
            proj: "Project 4",
            points: 40
        },
        {
            proj: "Project 5",
            points: 50
        },
        {
            proj: "Project 6",
            points: 75
        }
    ]

    return (
        <div id="grading-bins">
            <ListGroup variant="flush">
                {points.map(binData => ProjectPointsItem(binData))}
            </ListGroup>
        </div>
    )

}

function ProjectPointsItem(binData) {
    const project = binData["proj"];
    const points = binData["points"];
    return (
        <ListGroup.Item>
            <div className="grading-bin">
                {project}
                <div className="grade-range">
                    {`${points}`}
                </div>
            </div>
        </ListGroup.Item>
    )
}

function GradingBins() {

    const bins = [
        {
            grade: "A+",
            range: [485, 500]
        },
        {
            grade: "A",
            range: [460, 484]
        },
        {
            grade: "A-",
            range: [450, 459]
        },
        {
            grade: "B+",
            range: [440, 449]
        },
        {
            grade: "B",
            range: [420, 439]
        },
        {
            grade: "B-",
            range: [400, 419]
        },
        {
            grade: "C+",
            range: [375, 399]
        },
        {
            grade: "C",
            range: [360, 374]
        },
        {
            grade: "C-",
            range: [350, 359]
        },
        {
            grade: "D",
            range: [300, 349]
        },
        {
            grade: "F",
            range: [0, 299]
        },
    ]
    
    return (
        <div id="grading-bins">
            <ListGroup variant="flush">
                {bins.map(binData => GradingBinItem(binData))}
            </ListGroup>
        </div>
    )
}

function GradingBinItem(binData) {
    const grade = binData["grade"];
    const [lower, upper] = binData["range"];
    return (
        <ListGroup.Item>
            <div className="grading-bin">
                <h3>
                    {grade}
                </h3>
                <div className="grade-range">
                    {`${lower} - ${upper}`}
                </div>
            </div>
        </ListGroup.Item>
    )
}

function AcademicIntegrity() {
    return (
        <div className="syllabus-topic">
            <h2 id="integrity">
                Academic Integrity
            </h2>
            <div className="syllabus-section">
                <div className="body">
                    Cooperation has a limit and in CS10 that limit is copying lines of code or using ideas that 
                    are not your own code. Projects should be completed and turned in individually unless the 
                    project calls for a partner. Feel free to discuss the projects with others beforehand; just 
                    submit your own work in the end. By discussing assignments, we mean talking about high level 
                    ideas (for example, you may discuss how to debug and clarify the spec questions; you may not 
                    discuss the solution). Projects are to be completed in groups of 2 or 3, but you may discuss 
                    them more broadly than with your partner(s). However, you should not be sharing lines of code 
                    with others or reading code from other people's projects. Write your own programs and keep them 
                    to yourself.
                </div>
                <div className="body">
                    We expect you to hand in your own work, take your own tests, and complete your own projects. The assignments 
                    and evaluations are structured to help you learn. The course staff works hard to put together this course, 
                    and we ask in return that you respect the integrity of the course by not misrepresenting your work.
                </div>
                <div className="body">
                    The EECS Department Policy on Academic Dishonesty says, "Copying all or part of another person's 
                    work, or using reference materials not specifically allowed, are forms of cheating and will not be 
                    tolerated." The policy statement goes on to explain the penalties for cheating, which range from a zero
                    grade for the test up to dismissal from the University for a second offense.
                </div>
                <div className="body">
                    Rather than copying someone else's work, ask for help. You are not alone in this course! The TAs, 
                    academic interns, and instructor are all here to help you succeed. If you ever need help in this course, 
                    let us know in person, during office hours, or via email/Piazza.
                </div>
                <div className="body">
                    If you have any question as to if what you are doing constitutes academic dishonesty, please reach 
                    out to a staff member. If any academic dishonesty is detected, saying, “I did not know that was academic 
                    dishonesty,” will not be accepted.
                </div>
            </div>
        </div>
    )
}

export default SyllabusPage;