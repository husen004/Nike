import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt='people' className='object-contain w-[120px] h-[120pxf] rounded-full'/>
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
            <img src={star} alt='star' className='object-contain w-[24] h-[24]' m-0 />
            <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard