import React from "react";
import NavigationBar from "../../components/navigation.jsx"
import "../../styles/sassets/textbook.scss";
import { Head } from "../../components/head.jsx";
import { QuickLinkInternal } from "../../components/quick-links.jsx";

// import resources from "../../static/course-data/curriculum/resources.yaml";
// import { ResourceCell, ResourceCellInternal } from "../components/resources-components/resources-cells.jsx";
// import { ResourceNavigation } from "../components/resources-components/resource-nav.jsx";
// import { DynamicContentComponent, ResourceSection, ResourceCategory } from "../components/resources-components/resource-body.jsx";

class TextbookPage extends React.Component {

    render() {
        return (
            <div className="body">
                <Head />
                <NavigationBar />
                <div className="container-fluid">
                    <h1>
                        Textbook
                    </h1>
                    <div className="textbook-component">
                        {TextbookSections()}
                        {TextbookBody()}
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

function TextbookSections() {
    let sections = [
        {
            icon: "menu_open",
            label: "Back to Textbook",
            link: "../../textbook"
        },
        {
            icon: "bookmark",
            label: "Recursion I",
            link: "#0"
        },
        {
            icon: "keyboard_arrow_right",
            label: "1. Intro",
            link: "#1"
        },
        {
            icon: "keyboard_arrow_right",
            label: "2. Recursion's Two Parts",
            link: "#2"
        },
        {
            icon: "keyboard_arrow_right",
            label: "3. Approaching Recursion Problems",
            link: "#3"
        },
        {
            icon: "keyboard_arrow_right",
            label: "4. Recursion vs Iteration",
            link: "#4"
        },
        {
            icon: "format_list_bulleted_outlined",
            label: "5. Summary",
            link: "#5"
        },
        {
            icon: "help_rounded",
            label: "Practice Problems",
            link: "#practiceproblems"
        }
    ]

    let links = sections.map(section => QuickLinkInternal(section.icon, section.label, section.link))
    return (
        <div className="textbook-nav">
            {links}
        </div>
    )
}

function TextbookBody() {
    return (
        <div className="textbook-body">
            {Title()}
            {Intro()}
            {TwoParts()}
            {Approaching()}
            {VsIteration()}
            {Summary()}
            {PracticeQs()}
        </div>
    )
}

/*
    Individual Components of the Textbook are located here.
    Edit these if you only want to change the content.
    All sections should subclass Textbook Section and have a unique id.
*/

function Title() {
    return (
        <div id="0" className="textbook-topic">
            <h1>
                Recursion I
            </h1>
            <div className="subtitle">
                An introduction into recursion basics.
            </div>
            <div className="textbook-section" >
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
            <div className="textbook-section">
                <div className="header">
                    Collaboration, Not Competition
                </div>
                <div className="body">
                    You are encouraged to form study groups and work together to understand course material, 
                    but (unless specified otherwise) all your graded work should be your own. 
                </div>
                <div className="textbook-subsection">
                    <div className="header">
                        Flexibility and Community
                    </div>
                    <div className="body">
                            Online classes taught during a time of wildfires, power outages, and a worldwide pandemic need to 
                            have policies that support students in different living situations, and in different time zones. 
                        </div>
                </div>
            </div>
        </div>
    )
}

function Intro() {
    return (
        <div id="1" className="textbook-topic">
            <h2>
                <strong>1</strong>
            </h2>
            <h2>
                Introduction
            </h2>
            <div className="textbook-section" >
                <div className="body">
                    Outside of math and computer science, you can think of recursion as a specific kind of 
                    pattern. That’s not to say it’s like polka dots or stripes: rather, a recursive pattern 
                    is often made because, within one level of a pattern, there is another smaller, but 
                    generally otherwise identical, level. 
                </div>
                <div className="body">
                    To put it more concretely, consider Russian dolls:
                </div>
                {/* TODO: IMG <img src=""/> */}
                <div className="body">
                    Within the biggest doll, there is a smaller doll. Within that smaller doll, there is an even 
                    smaller doll. This continues until you can no longer fit dolls inside the smallest one.
                </div>
                {/* TODO: Example icon here */}
                <div className="body">
                    If you have heard of the “dream within a dream” concept of the movie Inception, that also 
                    counts as recursion.
                </div>
                {/* TODO: IMG  <img src=""/>*/}
                <div className="body">
                    The characters go deeper into the levels of the dream, which is analogous to the smaller 
                    Russian dolls.
                </div>
            </div>
        </div>
    )
}

function TwoParts() {
    return (
        <div id="2" className="textbook-topic">
            <h2>
                <strong>2</strong>
            </h2>
            <h2>
               The Two Parts of Recursion
            </h2>
            <div className="textbook-section">
                <div className="body">
                    Let’s start off with a common example: factorial. Recall that the factorial mathematical 
                    function is represented by the ! symbol. 
                </div>
                <div className="math">
                    1! = 1    <br />
                    2! = 2 × 1 = 2    <br />
                    5! = 5 × 4 × 3 × 2 × 1 = 120
                </div>
                <div className="body">
                    Factorial is a great example of a function that can be written recursively. Before we even 
                    get to code writing, let’s think about how we can break down the function in a visual 
                    sense:
                </div>
                <div className="body">
                    Let’s begin with 4!.
                </div>
                <div className="math">
                    4! = 4 × 3 × 2 × 1
                </div>
                <div className="body">
                    You might notice that there is another way we can write this:
                </div>
                <div className="math">
                    4! = 4 × (3 × 2 × 1)<br />
                        = 4 × 3!
                </div>
                <div className="body">
                    If we continue this for 2!, here’s the whole equation written out:
                </div>
                <div className="math">
                     4! = 4 × 3! <br />
                                     3! = 3 × 2! <br />
                                                     2! = 2 × 1!    <br />
                                                                     1! = 1
                </div>
                <div className="body">
                    Notice the repeating pattern, which is <em>n</em>! = <em>n</em>  × (<em>n </em>- 1)!,
                    where <em>n</em> is any positive integer.
                </div>
                <div className="body">
                    Let’s see how we can take this understanding of factorial and turn it into a recursive 
                    solution.
                </div>

                <div className="textbook-subsection">
                    <div className="header">
                        The Base Case
                    </div>
                    <div className="body">
                        You can think of this as the stopping point of the recursive function, that prevents 
                        it from going on forever.
                    </div>
                    <div className="body">
                        Another way to consider the base case is thinking of it as the smallest level of a 
                        problem.
                    </div>
                    <div className="bigidea">
                        The <strong>base case</strong> is where recursion stops because you have reached the 
                        smallest possible level and the problem can no longer be broken down.
                    </div>
                    <div className="body">
                        Let’s consider how this looks in factorial. Without a base case, we eventually run into:
                    </div>
                    <div className="math">
                        1! = 1 × 0!
                    </div>
                    <div className="body">
                        Okay, this is fine because 0! is 1. Let’s continue:
                    </div>
                    <div className="math">
                        1! = 1 × 0! <br />
                                        0! = 0 × (-1)!
                    </div>
                    <div className="body">
                        This is not fine because (-1)! is -1. In order to stop before we get to this point, it 
                        is important to define the simplest level. 
                    </div>
                    <div className="body">
                        So, let’s try to identify what the base case might look like in factorial:
                    </div>
                    <div className="math">
                        4! = 4 × 3!<br />
                                       3! = 3 × 2! <br />
                                                     2! = 2 × 1!<br />
                                                                  1! = 1 × 0!<br />
                                                                                0! = 0 × (-1)!
                    </div>
                    <div className="body">
                        Here, we want to stop when we reach 1!, which equals 1. So there’s no need to continue to 0! . 
                        Thus, our base case is <em>n</em> = 1. 
                    </div>
                </div>

                <div className="textbook-subsection">
                    <div className="header">
                        The Recursive Case
                    </div>
                    <div className="body">
                        This is the part of the code that handles all of the non-simplest cases by breaking them down to get to 
                        the base case.
                    </div>
                    <div className="body">
                        Often times, when you approach a problem, you will notice a pattern in simplifying each 
                        level, which can then be translated into the recursive case.
                    </div>
                    <div className="bigidea">
                        The <strong>recursive case</strong> is where the problem can be simplified further, so the function 
                        calls on itself to break it down more.
                    </div>
                    <div className="body">
                        Let’s identify what this looked like in factorial. This is the pattern we identified earlier: 
                    </div>
                    <div className="math">
                        n! = n  × (n - 1)!
                    </div>
                    <div className="body">
                        Say <em>n</em> = 5. We break down the problem of 5! by doing 5! = 5 × 4!, which gets us to the next 
                        level, 4!, where <em>n</em> = 4.
                    </div>
                    <div className="body">
                        Notice how the function is calling itself! Look at that beautiful recursive case!!
                    </div>
                    <div className="body">
                        Here’s what it would look like all combined together in Snap!
                    </div>
                    {/* TODO: <img src="Recursion I/factorial.png" style="padding-top: 30px;padding-bottom: 30px;" /> */}
                    <div className="body">
                        (We are assuming that <em>n</em> = 0)
                    </div>
                </div>
            </div>
        </div>
    )
}

function Approaching() {

    return (
        <div id="3" className="textbook-topic">
            <h2>
                <strong>3</strong>
            </h2>
            <h2>
               Approaching Recursion Questions
            </h2>
            <div className="textbook-section">
                <div className="textbook-subsection">
                    <div className="header">
                        Two Main Approaches
                    </div>
                    <div className="body">
                        Generally, when you’re looking to solve a recursive problem, you want to look for some 
                        kind of pattern where the solution to the given input utilizes a solution to a smaller 
                        version of the same problem. <br /><br />There are two main ways to approach this: 
                    </div>
                    <div className="bullets">
                        <mainpoint><strong>
                            ·  top-down</strong></mainpoint>: break down the biggest pieces into smaller and smaller 
                            ones
                            <br /><br />
                        <mainpoint><strong>
                            ·  bottom-up</strong></mainpoint>: start from the smallest case and look at the 
                            second-smallest case
                    </div>
                    <div className="body">
                        <strong>Top-down</strong><br />
                        To put this into context, the factorial example approached defining a factorial using 
                        the<em> top-down method</em>, looking at 5! and then 4! and so on.<br /><br />
                        <strong>Bottom-up</strong><br />
                        However, the pattern could have beenidentified just as effectively by looking at 0! and 
                        1! (which both evaluate to 1) and then looking at 2!, which would be the <em>bottom-up 
                        method</em>. <br /><br />
                        Neither method is necessarily better than the other! Feel free to use whichever one makes 
                        more sense. And if you’re doing a problem and breaking it down one way hasn’t illuminated 
                        a clear solution, maybe give the other one a try! <br /><br />
                        Just as a reminder: you won’t use non if/else command blocks; recursion is all about moving 
                        around data (e.g. your input variables) , so it’s reporter and boolean blocks all the way! 
                    </div>
                </div>
                <div className="textbook-subsection">
                    <div className="header">
                        Solving The Base Case
                    </div>
                    <div className="body">
                        As mentioned previously, you want your base case to identify that you’ve reached the simplest 
                        version of the input data, and then return something. 
                        <mainpoint><strong>This means you’ll always be using an <em>if </em>block 
                        and a boolean.</strong></mainpoint> Here are some examples:<br /><br />
                        <strong>Numbers</strong><br />
                        With numbers, you’ll generally be decrementing the value until you hit 0 or 1, often determined 
                        by the way you’re recombining the numbers at the end, such as in the factorial example. In 
                        these situations, you’ll be best served by these blocks:
                    </div>
                    {/* TODO: IMG */}
                    <div className="body">
                        <strong>Text</strong><br />
                        Often when you’re doing recursion on an input of sentence or word type, you’ll be wanting to 
                        do a certain action to every word in the sentence or every letter in a word (or, maybe both!). 
                        The goal of your base case will be to let you know you’ve reached the end of the input with 
                        something like:
                    </div>
                    {/* TODO: IMG */}
                    <div className="body">
                        <strong>Lists</strong><br />
                        You can approach lists the same way you approach text — just keep in mind that Snap! has a 
                        handy-dandy built in block you can also use, which tells you if there’s nothing in the list 
                        anymore:
                    </div>
                    {/* TODO: IMG */}
                    <div className="body">
                        <mainpoint><strong>The reason there are different things you can have as 
                            your base condition is because each problem is different</strong></mainpoint>, so the way you 
                            break each level down varies. As a result, the scope of your base condition may change.
                    </div>
                </div>
                <div className="textbook-subsection">
                    <div className="header">
                        Solving The Recursive Case
                    </div>
                    <div className="body">
                        The cases you don’t cover in your base case, meaning the cases which are not the literal 
                        simplest case, are the ones that your recursive case handles. Your recursive case has a 
                        few jobs:<br /><br />
                        <strong>1. Split the input</strong><br />
                        Your recursive case should split the input in order to call the function on a smaller 
                        input. A few blocks you could use this are:
                    </div>
                    {/* TODO: IMG */}
                    <div className="body">
                        <strong>2. Recursive call</strong><br />
                        Here we make the function call on itself, but with a smaller level input. It is crucial 
                        that previous steps (splitting the input and identifying the base case) were done correctly.
                    </div>
                    {/* TODO: IMG */}
                    <div className="body">
                        <strong>3. Combine</strong><br />
                        You’ll also want to connect what’s returned at this level with the results of the recursive 
                        call to the function, using blocks like:
                    </div>
                    {/* TODO: IMG */}
                    {/* <img src="Recursion I/factorialannotate.png" style="padding-top: 30px;padding-bottom: 30px;max-width: 100%;" /> */}
                    <div className="body">
                        Some problems require you to do something to the part that gets split off (see practice 
                        problems). But here, the <em>n</em> is fine as is.<br /><br />Sometimes, a problem will 
                        require two recursive calls, or two base cases. This will be covered in depth in  Recursion II.
                    </div>
                </div>
            </div>
        </div>
    )
}

function VsIteration() {
    return (
        <div id="4" className="textbook-topic">
            <h2>
                <strong>4</strong>
            </h2>
            <h2>
                Recursion vs Iteration
            </h2>
            <div className="textbook-section" >
                <div className="body">
                    Outside of math and computer science, you can think of recursion as a specific kind of 
                    pattern. That’s not to say it’s like polka dots or stripes: rather, a recursive pattern 
                    is often made because, within one level of a pattern, there is another smaller, but 
                    generally otherwise identical, level. 
                </div>
                <div className="body">
                    To put it more concretely, consider Russian dolls:
                </div>
                {/* TODO: IMG <img src=""/> */}
                <div className="body">
                    Within the biggest doll, there is a smaller doll. Within that smaller doll, there is an even 
                    smaller doll. This continues until you can no longer fit dolls inside the smallest one.
                </div>
                {/* TODO: Example icon here */}
                <div className="body">
                    If you have heard of the “dream within a dream” concept of the movie Inception, that also 
                    counts as recursion.
                </div>
                {/* TODO: IMG  <img src=""/>*/}
                <div className="body">
                    The characters go deeper into the levels of the dream, which is analogous to the smaller 
                    Russian dolls.
                </div>
            </div>
        </div>
    )
}

function Summary() {
    return (
        <div id="5" className="textbook-topic">
            <h2>
                <strong>5</strong>
            </h2>
            <h2>
                Summary
            </h2>
            <div className="textbook-section" >
                <div className="body">
                    Outside of math and computer science, you can think of recursion as a specific kind of 
                    pattern. That’s not to say it’s like polka dots or stripes: rather, a recursive pattern 
                    is often made because, within one level of a pattern, there is another smaller, but 
                    generally otherwise identical, level. 
                </div>
                <div className="body">
                    To put it more concretely, consider Russian dolls:
                </div>
                {/* TODO: IMG <img src=""/> */}
                <div className="body">
                    Within the biggest doll, there is a smaller doll. Within that smaller doll, there is an even 
                    smaller doll. This continues until you can no longer fit dolls inside the smallest one.
                </div>
                {/* TODO: Example icon here */}
                <div className="body">
                    If you have heard of the “dream within a dream” concept of the movie Inception, that also 
                    counts as recursion.
                </div>
                {/* TODO: IMG  <img src=""/>*/}
                <div className="body">
                    The characters go deeper into the levels of the dream, which is analogous to the smaller 
                    Russian dolls.
                </div>
            </div>
        </div>
    )
}

function PracticeQs() {
    return (
        <div id="6" className="textbook-topic">
            <h2>
                <strong>6</strong>
            </h2>
            <h2>
                Practice Questions
            </h2>
            <div className="textbook-section" >
                <div className="body">
                    Outside of math and computer science, you can think of recursion as a specific kind of 
                    pattern. That’s not to say it’s like polka dots or stripes: rather, a recursive pattern 
                    is often made because, within one level of a pattern, there is another smaller, but 
                    generally otherwise identical, level. 
                </div>
                <div className="body">
                    To put it more concretely, consider Russian dolls:
                </div>
                {/* TODO: IMG <img src=""/> */}
                <div className="body">
                    Within the biggest doll, there is a smaller doll. Within that smaller doll, there is an even 
                    smaller doll. This continues until you can no longer fit dolls inside the smallest one.
                </div>
                {/* TODO: Example icon here */}
                <div className="body">
                    If you have heard of the “dream within a dream” concept of the movie Inception, that also 
                    counts as recursion.
                </div>
                {/* TODO: IMG  <img src=""/>*/}
                <div className="body">
                    The characters go deeper into the levels of the dream, which is analogous to the smaller 
                    Russian dolls.
                </div>
            </div>
        </div>
    )
}

export default TextbookPage;