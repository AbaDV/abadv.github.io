import React from 'react';
import Comment from './Comment';

export default class Comments extends React.Component {
    render() {
        const { comments } = this.props;

        if (!comments.length) {
            return null;
        }

        const commentsItems = comments.map((comment, index) => {
            return <Comment key={index} {...comment} />
        });

        return (
            <div>
                <h1>Комментарии</h1>
                {commentsItems}
            </div>
        );
    }
}