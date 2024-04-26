

const Loading = () => {
    return (
        <div className='pt-12 text-center items-center'>
            {/* <span className="loading loading-spinner text-primary"></span> */}
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    );
};

export default Loading;