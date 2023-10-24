import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import { GiOctopus } from 'react-icons/gi';

export const Header = () => {
    return (
        <>
            <header class="flex justify-around">
                <h3 class="m-2 pt-1"> <GiOctopus size={40} color={'#ccc'} /></h3>
                <ul class="flex justify-around">
                    <li class="m-2 pt-3">
                        <a href="#">ラジオ</a>
                    </li>
                    <li class="m-2  pt-3">
                        <a href="#">ドラマ</a>
                    </li>
                    <li class="m-2  pt-3">
                        <a href="#">アニメ</a>
                    </li>
                    <li class="m-2  pt-3">
                        <a href="#">スポーツ</a>
                    </li>
                    <li class="m-2  pt-3">
                        <a href="#">エンタメ</a>
                    </li>
                    <li class="m-2  pt-3">
                        <a href="#">音楽</a>
                    </li>
                </ul>
                <h3 class="m-2 pt-1"> < FaCalendarAlt size={35} color={'#ccc'}/></h3>
            </header>



        </>
    )
}
