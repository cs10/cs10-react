import React from "react";
import { Card, Modal } from "react-bootstrap";
import { getStaffBio } from "../course-data-util.jsx"
import { withPrefix } from "gatsby";
import { Spinner } from "react-bootstrap";
import staff_ui_config from "../../ui-config/staff-ui.config.yaml"
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import "../../styles/sassets/staff-components.scss";
import "../../styles/main.scss";

const card_config = staff_ui_config["card-config"];

// Main Card Component for Staff Cards

export class StaffCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: "",
            imgPath: withPrefix(`/course-data/staff/${props.staffKey}/profile_pic.png`),
            email: "",
            year: "",
            subheader: "",
            responses: [],
            loaded : false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
    }

    componentDidMount() {
        this.getBioData()
    }

    getBioData() {
        /*
            Some Staff information like bio and images are loaded async.
            Handling this individually in each card instead of at a higher state.
        */
        getStaffBio(this.props.staffKey)
            .then(bio => {
                this.loadBioData(bio)
            })
    }

    loadBioData(bio) {
        const subheaderKey = card_config["subheader"];
        const name = bio["name"];
        const subheader = bio[subheaderKey];
        const year = bio["year"];
        const major = bio["major"];
        const email = bio["email"];
        const responses = bio["responses"];
        this.setState({
            name: name,
            subheader: subheader,
            year: year,
            major: major,
            email: email,
            responses: responses
        })
    }

    toggleModal() {
        let modalState = this.state.showModal;
        this.setState({
            showModal : (!modalState)
        })
    }

    handleImageLoaded() {
        this.setState({loaded: true});
    }

    
    render() {
        if (this.state.name === undefined) {
            return null;
        }
        return (
            <Card style={{ width: '15rem' }}>
                <div
                    className="staff-loading-screen"
                    style={this.state.loaded ? {"display" : "none"} : {"height" : "0px"}}>
                    <Spinner animation="border" variant="primary" size="lg"/>
                </div>
                <Card.Img 
                    style={this.state.loaded ? {} : {"height" : "0px"}}
                    src={this.state.imgPath} 
                    onLoad={this.handleImageLoaded}
                />
                <Card.Body>
                    <Card.Text>
                        <div className="header">
                            {this.state.name}
                        </div>
                        <div className="role">
                            {this.props.role}
                        </div>
                        <div className="subheader">
                            {this.state.subheader}
                        </div>
                        <div className="staff-card-iconbar">
                            <OverlayTrigger placement="top"
                                overlay={
                                    <Tooltip id={"tooltip-" + this.state.email}>
                                        {this.state.email}
                                    </Tooltip>
                                }>
                                <a href={`mailto:${this.state.email}`}>
                                    <span className="material-icons">
                                        email
                                    </span>
                                </a>
                            </OverlayTrigger>
                            <BioModal 
                                toggleModal={this.toggleModal} 
                                showModal={this.state.showModal}
                                name={this.state.name}
                                email={this.state.email}
                                role={this.props.role}
                                year={this.state.year}
                                major={this.state.major}
                                subheader={this.state.subheader}
                                imgPath={this.state.imgPath}
                                responses={this.state.responses}
                            />
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

function BioModal({
    toggleModal, showModal, name, email, role, 
    year, major, subheader, imgPath, responses
}) {
    return (
        <>
            <OverlayTrigger key="header" placement="top"
                overlay={
                    <Tooltip id={"tooltip-" + name}>
                        bio
                    </Tooltip>
                }>
                <span className="material-icons" onClick={toggleModal}>
                    person
                </span>
            </OverlayTrigger>
            <Modal show={showModal} onHide={toggleModal} size="lg" centered>
                <Modal.Header className="content-modal-header">
                    <button type="button" className="close" onClick={toggleModal}><span aria-hidden="true">&times;</span>
                    </button>
                    <div className="bio-modal-header">
                        <img src={imgPath} alt={`a picture of ${name} should go here.`}/>
                        <div className="general-info">
                            <div className="name">
                                {name}
                            </div>
                            <div className="role">
                                {role}
                            </div>
                            <div className="email">
                                {email}
                            </div>
                            <div className="additional-info">
                                {year}
                            </div>
                            <div className="additional-info">
                                {major}
                            </div>
                            <div className="additional-info">
                                {subheader}
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    {renderBioResponses(responses)}
                </Modal.Body>
            </Modal>
        </>
    )
}

function renderBioResponses(responses) {
    if (!responses) {
        return;
    }
    let responseSections = [];

    let questions = card_config["questions"];
    for (let i = 0; i < responses.length; i++) {
        let response = responses[i]
        if (response === null) {
            continue;
        } else {
            let header = questions[i];
            responseSections.push(
                bioResponseSection(header, response)
            )
        }
    }
    return responseSections;
}

function bioResponseSection(header, response) {
    return (
        <div className="bio-response-section">
            <div className="header">
                {header}
            </div>
            <div className="body">
                {response}
            </div>
        </div>
    )
}

export function getStaffCard(role, key) {
    return (
        <StaffCard staffKey={key} role={role} />
    )
}