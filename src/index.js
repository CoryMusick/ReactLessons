import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45 PM" content="test1" image={faker.image.avatar()} />
            <CommentDetail author="Alex" timeAgo="Today at 2:00 AM" content="text2" image={faker.image.avatar()}/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 3:30 PM" content="test3" image={faker.image.avatar()}/>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));