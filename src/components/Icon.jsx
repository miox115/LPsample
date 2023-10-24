import React from 'react'
import { AiOutlineShareAlt,AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { FaLine } from 'react-icons/fa';

export const Icon = () => {
    return (
        <>
            <ul class="flex justify-center m-4 border-t-4 border-indigo-500">
                <li class="mt-4 p-4 bg-slate-100">
                    <a href="#">
                    <h3 class="m-2 pt-1"> < AiOutlineShareAlt size={35} color={'#ffff00'} /></h3>
                    </a>
                </li>
                <li class="mt-4 p-4 bg-slate-100 border-x-2">
                    <a href="https://line.me/ja/">
                        <h3 class="m-2 pt-1"> < FaLine size={35} color={'#00ff00'} /></h3>
                    </a>
                </li>
                <li class="mt-4 p-4 bg-slate-100 border-r-2">
                    <a href="https://twitter.com/login">
                        <h3 class="m-2 pt-1"> <  AiOutlineTwitter size={35} color={'#0000ff'} /></h3>
                    </a>
                </li>
                <li class="mt-4 p-4 bg-slate-100">
                    <a href="https://ja-jp.facebook.com/">
                        <h3 class="m-2 pt-1"> <AiFillFacebook size={35} color={'#00bfff'} /></h3>
                    </a>
                </li>
            </ul>
        </>
    )
}