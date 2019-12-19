import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { setSearchTerm } from '../store/actions';

const SearchForm = props => {
    const handleChange = e => {
        e.preventDefault();
        props.setSearchTerm(e.target.value);
    };

    return (
        <Form className='search-form'>
            <FormGroup>
                <Input
                    type='text'
                    placeholder='Filter by name'
                    value={props.searchTerm}
                    onChange={handleChange}
                />
            </FormGroup>
        </Form>
    );
};

const mapStateToProps = state => {
    return {
        minions: state.minions,
        searchTerm: state.searchTerm
    }
};

export default connect(mapStateToProps, { setSearchTerm })(SearchForm);