import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../../Context'
export default class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return(
                        <React.Fragment>
                                {contacts.map(contact =><Contact 
                                key = {contact.id}
                                contact = {contact} deleteClickHandler = {this.deleteContact}
                                />)}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )

            }
   
}

