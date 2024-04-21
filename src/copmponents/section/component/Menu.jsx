
/* import AboutImg from '../../../../public/images/about.jpg'; */
import { forwardRef, useImperativeHandle } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/menu.css';
import React, { useState } from 'react';

const MenuItem = ({ category, name, price, ingredients }) => (
    <div className={`col-lg-6 menu-item filter-${category}`}>
        <div className="menu-content">
            <a href="#">{name}</a><span>${price}</span>
        </div>
        <div className="menu-ingredients">
            {ingredients}
        </div>
    </div>
);

const Menu = forwardRef((props, ref) => {
    const { menuRef } = props;
    useImperativeHandle(menuRef, () => ({
        scrollIntoView: () => {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
            });
        },
    }));
    const [activeFilter, setActiveFilter] = useState('*');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const menuItems = [
        { category: 'starters', name: 'Lobster Bisque', price: '5.95', ingredients: 'Lorem, deren, trataro, filede, nerada' },
        { category: 'specialty', name: 'Bread barrel', price: '6.95', ingredients: 'Lorem, deren, trataro, filede, nerada' },
        { category: 'starters', name: 'Crab Cake', price: '7.95', ingredients: 'A delicate crab cake served on a toasted roll with lettuce and tartar sauce' },
        { category: 'salads', name: 'Caesar Selections', price: '8.95', ingredients: 'Lorem, deren, trataro, filede, nerada' },
        { category: 'specialty', name: 'Tuscan Grilled', price: '9.95', ingredients: 'Grilled chicken with provolone, artichoke hearts, and roasted red pesto' },
        { category: 'starters', name: 'Mozzarella Stick', price: '4.95', ingredients: 'Lorem, deren, trataro, filede, nerada' },
        { category: 'salads', name: 'Greek Salad', price: '9.95', ingredients: 'Fresh spinach, crisp romaine, tomatoes, and Greek olives' },
        { category: 'salads', name: 'Spinach Salad', price: '9.95', ingredients: 'Fresh spinach with mushrooms, hard-boiled egg, and warm bacon vinaigrette' },
        { category: 'specialty', name: 'Lobster Roll', price: '12.95', ingredients: 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll' },
        // ... سایر غذاها
    ];


    const filteredItems = activeFilter === '*'
        ? menuItems
        : menuItems.filter(item => item.category === activeFilter);



    return (
        <section id="menu" className="menu my-5" ref = { ref } >
            <div className="container">
                <div className="section-title">
                    <h2>Check our tasty <span>Menu</span></h2>
                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-flters">
                            <li
                                onClick={() => handleFilterClick('*')}
                                className={activeFilter === '*' ? 'filter-active' : ''}
                            >
                                Show All
                            </li>
                            <li
                                onClick={() => handleFilterClick('starters')}
                                className={activeFilter === 'starters' ? 'filter-active' : ''}
                            >
                                Starters
                            </li>
                            <li
                                onClick={() => handleFilterClick('salads')}
                                className={activeFilter === 'salads' ? 'filter-active' : ''}
                            >
                                Salads
                            </li>
                            <li
                                onClick={() => handleFilterClick('specialty')}
                                className={activeFilter === 'specialty' ? 'filter-active' : ''}
                            >
                                Specialty
                            </li>
                        </ul>
                    </div>
                </div>

                <TransitionGroup component="div" className="row menu-container">
                    <CSSTransition
                        key={filteredItems.map(item => item.name).join(',')}
                        timeout={500}
                        classNames="fade"
                    >
                        <div className="row menu-container">
                            {filteredItems.map((item, index) => (
                                <MenuItem key={index} {...item} />
                            ))}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </section>
  );
});

export default Menu;











