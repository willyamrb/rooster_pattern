import React from "react";

interface IErrorFallbackProps {
    error: string;
    reset: () => void;
}

const ErrorFallback: React.FC<IErrorFallbackProps> = ({ error, reset }) => {
    return (
        <div className="w-full h-screen justify-center items-center flex flex-col py-150px">
            <h1 className="text-2xl font-medium">Something went wrong.</h1>
            <p className="text-lg mt-10">
                We apologize, but an unexpected error occurred.
            </p>
            <p className="text-md">
                Please try refreshing the page or contact our support team for
                assistance.
            </p>
            <div className="w-full p-8 flex justify-center items-center text-center text-white bg-red-500">
                Error: <span>{error}</span>
            </div>
            <button onClick={reset} className="mt-8">
                Return to home
            </button>
        </div>
    );
};

export default ErrorFallback;
