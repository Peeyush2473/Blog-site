'use client'

interface ReadMoreProps {
  onClick: () => void;
}

const ReadMore: React.FC<ReadMoreProps> = ({ onClick }) => {
    return(
        <>
        <button onClick={onClick} className='bg-black text-white w-40 h-13 text-xl font-bold'>Read more</button>
        </>
    )
}

export default ReadMore