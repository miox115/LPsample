
import React from 'react'

export const Home = () => {
    return (
        <>
            <div>
                <header class="header">
                    <dev class="header-logo">
                        {/* <a href="#">
                        <img
                            src="./assets/img/img1.png"
                            alt="logo"
                            width="45%"
                            height="45%"
                        >
                    </a> */}
                        <h1>
                            <a href="#">ラジオ</a>
                        </h1>
                        <ul>
                            <li>
                                <a href="#">ドラマ</a>
                            </li>
                            <li>
                                <a href="#">アニメ</a>
                            </li>
                            <li>
                                <a href="#">スポーツ</a>
                            </li>
                            <li>
                                <a href="#">エンタメ</a>
                            </li>
                            <li>
                                <a href="#">音楽</a>
                            </li>
                        </ul>
                        {/* <a href="#">
                        <img
                            src="./assets/img/img3.png"
                            alt="calender"
                            width="45%"
                            height="45%"
                        >
                    </a> */}
                    </dev>
                </header>
                <nav class="header-nav">
                    <ul class="header-navlist">
                        <li class="header-navitem">
                            <a href="#">ドラマ</a>
                        </li>
                        <li class="header-navitem">
                            <a href="#">アニメ</a>
                        </li>
                        <li class="header-navitem">
                            <a href="#">スポーツ</a>
                        </li>
                        <li class="header-navitem">
                            <a href="#">エンタメ</a>
                        </li>
                        <li class="header-navitem">
                            <a href="#">音楽</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <section class="section">
                {/* <figure class="title">
                <img
                    class="title-img"
                    src="./assets/img/title.jpg"
                    alt="title img"
                    width="100%"
                    height="100%"
                >
            </figure> */}
                {/* <nav class="header-secnav">
                    <ul class="header-navlist">
                        <li class="header-navitem">
                            <a href="#">予告</a>
                        </li>
                        <li class="header-navitem">
                            <a href="#">内容</a>
                        </li>
                        <li class="header-navitem">
                            <a href="#">プレゼント</a>
                        </li>
                        <li class="header-navitem">
                            <a href="#">SNS</a>
                        </li>
                        <li class="header-navitem">
                            <a href="#">意見</a>
                        </li>
                </nav> */}
            </section>
            <section class="Wrapper">
                <div>
                    <p>プレゼント企画</p>
                </div>
                <div>
                    <p>キャンペーン</p>
                </div>
                <div>
                    <p>プレゼント内容</p>
                </div>
                <div>
                    <p>「本をプレゼントします！」</p>
                </div>
                {/* <div>
                    <img
                        class="event-img"
                        src="./assets/img/event.jpg"
                        alt="event"
                        width="100%"
                        height="100%"
                    >
                </div> */}
                <div>
                    <p>
                        <span class="blue">
                            応募方法
                        </span>
                    </p>
                </div>
                <div>
                    <p>1.条件を満たすには</p>
                    <p>2.該当の投稿を</p>
                </div>
                <div>
                    <span class="blue">
                        <p>締め切り</p>
                    </span>
                </div>
                <div>
                    <span class="red">
                        <p>令和〇年〇月〇日</p>
                    </span>
                </div>
                <div>
                    <span class="blue">
                        <p>抽選結果</p>
                    </span>
                </div>
                <div>
                    <p>当選された方については</p>
                    <p>某所アカウント</p>
                    <p>〇〇〇〇〇〇</p>
                    <p>登録フォームにてお知らせします。</p>
                </div>
                <div class="inner">
                    <p>
                        応募規約
                    </p>
                    <p>
                        参加に当たっては、以下の定める
                    </p>
                    <p>・注意事項としては</p>
                    <p>・その他内容によっては</p>
                    <p>・期間中に申し込むこと</p>
                </div>
            </section>
            {/* <div class="sns-icon">
                <dl>
                    <dt>
                        <a href="#">
                            <img src="./assets/img/share.png" alt="share" class="sns-img">
                        </a>
                    </dt>
                    <dd>
                        <a href="https://line.me/ja/">
                            <img src="./assets/img/line.png" alt="line" class="sns-img">
                        </a>
                    </dd>
                    <dd>
                        <a href="https://twitter.com/login">
                            <img src="./assets/img/facebook.png" alt="facebook" class="sns-img">
                        </a>
                    </dd>
                    <dd>
                        <a href="https://ja-jp.facebook.com/">
                            <img src="./assets/img/twitter.png" alt="logo" class="sns-img">
                        </a>
                    </dd>
                </dl>
            </div> */}
            <footer class="footer">
                <small class="footer-copy">Copyright Lpsample Inc.</small>
            </footer>


        </>
    )
}
