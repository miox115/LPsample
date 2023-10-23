import React from 'react'

export const Menu = () => {
    return (
        <>
            <nav class="flex justify-around text-[#fff] bg-[#092080]">
                <ul class="flex justify-around">
                    <li class="">
                        <a class="text-2xl px-5 py-2" href="#">予告</a>
                    </li>
                    <li class="border-l-2 border-s-indigo-500">
                        <a class="text-2xl px-5 py-2" href="#">内容</a>
                    </li>
                    <li class="border-x-2 border-s-indigo-500">
                        <a class="text-2xl px-5 py-2" href="#">プレゼント</a>
                    </li>
                    <li class="border-r-2 border-s-indigo-500">
                        <a class="text-2xl px-5 py-2" href="#">SNS</a>
                    </li>
                    <li class="">
                        <a class="text-2xl px-5 py-2" href="#">意見</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
