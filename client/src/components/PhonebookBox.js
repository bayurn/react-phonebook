import React, { Component } from 'react'
import PhonebookList from '../containers/PhonebookList'
import PhonebookForm from '../containers/PhonebookForm'

export default PhonebookBox extends Component {
    render(){
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        React Phonebook
                    </div>
                    <div className="card-body">
                        <PhonebookList />
                        <PhonebookForm />
                    </div>
                    <div className="card-footer text-center">
                        Copyright 2020
                    </div>
                </div>
            </div>
        )
    }
}


