'use client'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const FilterMovies = () => {
    return (
        <div>
            <div className='movies_filter_wrapper'>
                <div className='movies_filter_container'>
                    <span>sort</span>
                    <div>
                        <IoIosArrowDown className='movies_filter_sort_icon' />
                    </div>
                    <Popover >
                        <PopoverTrigger >Open</PopoverTrigger>
                        <PopoverContent className='bg-background'>Place content for the popover here.</PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default FilterMovies