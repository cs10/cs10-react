import React from "react";
import NavigationBar from "../components/navigation.jsx"
import { Head } from "../components/head.jsx";
import { getStaffCard } from "../components/staff-components/staff-elements.jsx";
import staff_ui_config from "../ui-config/staff-ui.config.yaml";
import "../styles/sassets/staff-page.scss";
import "../styles/sassets/staff-components.scss";
import "../styles/main.scss";

class StaffPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lookup: ""
        }
    }

    renderStaff() {
        let roles = staff_ui_config["roles"];
        let cards = roles.map(role => {
            let label = role["label"];
            let people = role["people"]
            return people.map(key => getStaffCard(label, key))
        })
        return cards.flat();
    }

    render() {
        return (
            <div>
                <Head />
                <NavigationBar />
                <div className="container-fluid">
                    <h1>
                        Staff
                    </h1>
                    {/* <input 
                        type="text" 
                        className="form-control staff-search" 
                        placeholder="Search for a staff member..."></input> */}
                    <div className="staff-section">
                        { this.renderStaff() }
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffPage;