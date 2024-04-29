import './../../styles/font.css'

const CommonTitle = ({text}) => {
  return (
    <div className='py-5'>
      <h1 className="text-center text-3xl md:text-[40px] font-semibold font-jost">
        {text}
      </h1>
    </div>
  );
};

export default CommonTitle;
