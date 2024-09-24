import UnderConstruction from '../assets/website_under-construction_img.png';

const Construction = () => {

    return (
        <div className="flex items-center justify-center py-20 px-4 md:py-0 md:px-0 md:h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
                <img src={UnderConstruction} alt="Under Construction" className="max-w-5xl md:h-auto md:w-auto h-full w-full"/>
        </div>
    )
}

export default Construction;
