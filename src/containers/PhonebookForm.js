import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postPhonebook } from '../actions'

class PhonebookForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            phone: ""
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
    }

    handleNameChange(event) {
        this.state({ name: event.target.value });
    }

    handlePhoneChange(event) {
        this.state({ phone: event.target.value })
    }

    handleSubmit(event) {
        if (this.state.name && this.state.phone) {
            this.props.postPhonebook(this.state.name, this.state.phone)
            this.setState({ name: "", phone: "" })
        }
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" name="name" value="{this.state.name}" onChange="{this.handleNameChange}" placeholder="Name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone number</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="phone" name="phone" value="{this.state.phone}" onChange="{this.handlePhoneChange}" placeholder="Phone number" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Tambah</button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postPhonebook: (name, phone) => dispatch(postPhonebook(name, phone))
})

export default connect(
    null,
    mapDispatchToProps
)(PhonebookForm)