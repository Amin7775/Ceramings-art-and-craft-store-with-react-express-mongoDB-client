import './../../styles/font.css'

const CommonTitle = ({text,descirption}) => {
  return (
    <div className='py-5'>
      <h1 className="text-center text-3xl md:text-[40px] font-semibold font-jost">
        {text}
      </h1>
      {
        descirption ? <p className='max-w-[85%] md:max-w-[80%] mx-auto text-center text-[#666666]  text-lg font-jost mt-5 md:mt-6'>
        {descirption}
  </p> : <></>
      }
      
    </div>
  );
};

export default CommonTitle;
