import React from 'react';
import "../styles/sassets/quick-links.scss"
import quick_link_config from "../ui-config/quick-links.config.yaml"

/*
    All relevant components for the Quick-links on the dashboard.
*/

export function QuickLink(icon, label, link) {
    return (
        <a href={link} className="quick-link-anchor" target="_blank" rel="noreferrer">
            <div className="quick-link">
                <span className="material-icons">
                    {icon}
                </span>
                <div className="quick-link-label">
                    {label}
                </div>
            </div>
        </a>
    );
}

export function QuickLinkButton(icon, label, action) {
    return (
        <a onClick={action} className="quick-link-anchor">
            <div className="quick-link">
                <span className="material-icons">
                    {icon}
                </span>
                <div className="quick-link-label">
                    {label}
                </div>
            </div>
        </a>
    )
}

export function QuickLinkInternal(icon, label, link) {
    return (
        <a href={link} className="quick-link-anchor">
            <div className="quick-link">
                <span className="material-icons">
                    {icon}
                </span>
                <div className="quick-link-label">
                    {label}
                </div>
            </div>
        </a>
    )
}

export function QuickLinkDisabled(icon, label) {
    return (
        <a className="quick-link-anchor" target="_blank" rel="noreferrer">
            <div className="quick-link disabled">
                <span className="material-icons">
                    {icon}
                </span>
                <div className="quick-link-label">
                    {label}
                </div>
            </div>
        </a>
    );
}

export function renderQuickLinks() {

    let quicklinks = [];
    quick_link_config.forEach(
        quicklink => quicklinks.push(QuickLink(quicklink.icon, quicklink.label, quicklink.link))
    )
    
    return (
        <div className="quick-link-bar">
            {quicklinks}
        </div>
    );
}