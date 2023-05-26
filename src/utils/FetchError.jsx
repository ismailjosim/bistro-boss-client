const FetchError = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-xl font-semibold mb-2 text-primary">Oops!</h3>
            <p className="text-gray-600">We couldn't find any data.</p>
        </div>
    );
};

export default FetchError
