import React, { useState, useEffect } from 'react';
import PeopleCards from './PeopleCards'

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect (() => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(allPeople => setPeople(allPeople))
    },[])
    return (
        <>
            {people.map(people => (<PeopleCards key={people.id} people={people}/>))}
        </>
    )
}

export default People;