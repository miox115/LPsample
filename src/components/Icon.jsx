import React from 'react'

export const Icon = () => {
    return (
        <>
            <ul class="flex justify-center m-4 border-t-4 border-indigo-500">
                <li class="mt-4 p-4 bg-slate-100">
                    <a href="#">メイン icon追加</a>
                </li>
                <li class="mt-4 p-4 bg-slate-100 border-x-2 border-s-indigo-500">
                    <a href="https://line.me/ja/">L icon追加</a>
                </li>
                <li class="mt-4 p-4 bg-slate-100 border-r-2 border-s-indigo-500">
                    <a href="https://twitter.com/login">T icon追加</a>
                </li>
                <li class="mt-4 p-4 bg-slate-100">
                    <a href="https://ja-jp.facebook.com/">F icon追加</a>
                </li>
            </ul>
        </>
    )
}