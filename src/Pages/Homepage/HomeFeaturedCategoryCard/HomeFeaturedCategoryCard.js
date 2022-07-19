import React from 'react';
import styles from '../css/HomeFeaturedCategoryCard.css';

export default function HomeFeaturedCategoryCard() {
    return (
        <div className='featured-category'>
            <div className='featured-category-container'>
                <button className='category-item-container container-1'>
                    <div className='category-item-inner'>
                        <i className="fa-brands fa-js-square category-icon" />
                        <span className='category-title'>
                            JavaScript
                        </span>
                    </div>
                </button>

                <button className='category-item-container container-2'>
                    <div className='category-item-inner'>
                        <i className="fa-brands fa-java category-icon" />
                        <span className='category-title'>
                            Java
                        </span>
                    </div>
                </button>

                <button className='category-item-container container-3'>
                    <div className='category-item-inner'>
                        <i className="fa-brands fa-python category-icon" />
                        <span className='category-title'>
                            Python
                        </span>
                    </div>
                </button>

                <button className='category-item-container container-4'>
                    <div className='category-item-inner'>
                        <i class="fa-brands fa-react category-icon" />
                        <span className='category-title'>
                            ReactJS
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )
}
