'use client'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const FilterMovies = () => {
    return (
        <div>
            <div className='movies_filter_wrapper'>
                <div className='movies_filter_container'>
                    <span>sort</span>
                    <div>
                        <IoIosArrowDown className='movies_filter_sort_icon' />
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default FilterMovies