import React from 'react';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

const posts = [{
    id: 1,
    title: 'Пост 1',
    text: 'текст 1',
}, {
    id: 2,
    title: 'Пост 2',
    text: 'текст 2',
}, {
    id: 3,
    title: 'Пост 3',
    text: 'текст 3',
}, {
    id: 4,
    title: 'Пост 4',
    text: 'текст 4',
}];

class App extends React.Component {
    render() {
        return <div>
            <Blog posts={posts} />
            <WelcomeModal />
        </div>;
    }
}

export default App;