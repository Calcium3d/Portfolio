import { Navbar } from '../components/Navbar';
import Head from 'next/head';
import { Card } from '../components/Card';
import Todolist from '../public/programming/todolist.png';
import Snake from '../public/programming/snake.png';
import Portfolio from '../public/programming/portfolio.png';

export default function Programming() {
    const todolist = "A todolist made with python for your command line. With features from your normal todolist. A project I made long ago, but still proud of it."
    const snake = "Snake Game made in Python using the Turtle module. My first project im very happy to share with others that was made entirely by myself."
    const portfolio = "Yeah, its this site. Inception, I know. Made with next.js and tailwind css. Personally, super happy with it. I hope you like it too!"
    return (
        <div className="">
            <Head>
                <title>
                    Programming
                </title>
                <link rel='icon' href='/icon.jpg' />
            </Head>
            <Navbar />
            <div className="grid place-items-center">
                <h1 className="text-4xl lg:text-5xl xl:text-5xl text-white p-10 text-center">
                    Programming
                </h1>
                <Card title="Todolist" data={todolist} picture={Todolist} />
                <Card title="Snake Game" data={snake} picture={Snake} />
                <Card title="Portfolio" data={portfolio} picture={Portfolio} />
                <Card title="github" data="0" />
            </div>
        </div>
    )
}