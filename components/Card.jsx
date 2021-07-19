import Image from 'next/image';

export function Card(props) {
    const title = props.title;
    const data = props.data;
    const picture = props.picture;

    if (data != "0") {
        return (
            <div className="shadow-xl bg-nord0 p-10 m-10 place-content-center rounded-2xl">
                <h1 className="bg-nord0 text-white text-4xl text-center pb-10 px-5">{title}</h1>
                <div className="md:grid bg-nord0 h-auto md:grid-rows-1 md:grid-cols-2 md:gap-4">
                    <p className="bg-nord0 text-white text-1xl md:text-2xl text-center">
                        {data}
                    </p>
                    <br />
                    <Image src={picture} alt={title} layout="responsive" className="bg-nord0 shadow-inner  object-contain" />
                </div>
            </div>
        )
    } else if (title == "github") {
        return(
            <div className="shadow-xl bg-nord0 p-10 m-10 place-content-center rounded-2xl">
                <h1 className="text-white bg-nord0 text-1xl md:text-2xl text-center">
                    To checkout more projects, take a peek at my <span className="bg-nord0 text-grey"><a href="https://github.com/awsomemanNever"  className="bg-nord0 text-nord10">Github</a></span>
                </h1>
            </div>
        )
    }
}