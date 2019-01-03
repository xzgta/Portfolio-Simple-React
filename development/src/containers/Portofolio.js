import React from 'react';

import './style/Portofolio.css';

function Portofolio() {
    let list = [
        {
            title: 'My DotFiles',
            url: 'https://github.com/xzagta/lagisyantik'
        },
        {
            title: 'Socks',
            url: 'https://github.com/xzagta/socks'
        },
        {
            title: 'See More',
            url: 'https://github.com/xzagta'
        },
    ];
    
    function renderList() {
        return (
            <React.Fragment>
                {list.map((x, y) => {
                    return (
                        <li key={y}>
                            <a href={x.url}>{x.title}</a>
                        </li>
                    );
                })}
            </React.Fragment>
        );
    }
    
    return (
        <div className="Portofolio">
            <h1>Portofolio</h1>
            <ul>
                { renderList() }
            </ul>
        </div>
    );
}

export default Portofolio;