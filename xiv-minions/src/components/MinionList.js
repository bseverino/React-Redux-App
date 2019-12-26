import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';

import { getMinions } from '../store/actions';

import MinionCard from './MinionCard';

const MinionContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
`;

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const MinionList = props => {
    const fetch = props.getMinions;
    const minions = props.minions;

    useEffect(() => {
        !minions && fetch();
    }, [fetch, minions]);

    return (
        <MinionContainer>
            {props.isFetching && <Spinner style={{ width: '3rem', height: '3rem' }} color='light' />}
            {props.minions && (
                <List className='fade-in'>
                    {props.minions.map(minion => {
                        if (minion.Name && minion.Name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                            return (
                                <MinionCard
                                    key={minion.ID}
                                    minion={minion}
                                />
                            )
                        } else return null;
                    })}
                </List>
            )}
        </MinionContainer>    
    );
}

const mapStateToProps = state => {
    return {
        minions: state.minions,
        isFetching: state.isFetching,
        error: state.error,
        searchTerm: state.searchTerm
    }
};

export default connect(mapStateToProps, { getMinions })(MinionList);
