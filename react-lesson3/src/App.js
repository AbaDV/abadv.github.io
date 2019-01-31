import React from 'react';
import Login from './Login';
import Menu from './Menu';

class App extends React.Component {
    render() {
        const MenuItems = [
            { href: "/", title: "Главная" },
            { href: "/about", title: "О нас" },
            { href: "/service", title: "Услуги" },
            { href: "/contacts", title: "Контакты" }
        ]
        return <div>
            <Login />
            <Menu titleMenu="Меню:" items={MenuItems} />
        </div>;
    }
}

export default App;