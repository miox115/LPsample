import React from 'react'

export const Nav = () => {
    return (
        <>
            <nav class="flex justify-around text-[#fff] bg-[#303030]">
                <ul class="flex justify-around">
                    <li class="m-2">
                        <a href="#">ドラマ</a>
                    </li>
                    <li class="m-2">
                        <a href="#">アニメ</a>
                    </li>
                    <li class="m-2">
                        <a href="#">スポーツ</a>
                    </li>
                    <li class="m-2">
                        <a href="#">エンタメ</a>
                    </li>
                    <li class="m-2">
                        <a href="#">音楽</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
