import { useContext } from "react";
import { AuthContext } from "../providers/AuthPovider";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import ErrorFallback from "../views/error-fallback/Index";
import Page from "./routes";

export function Fallback({ error, resetErrorBoundary }: FallbackProps) {
    const navigate = useNavigate();

    const reset = () => {
        navigate("/");
        resetErrorBoundary();
    };

    return <ErrorFallback error={error.message} reset={reset} />;
}

export const AuthOutlet = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <ErrorBoundary FallbackComponent={Fallback}>
            {isAuthenticated ? <Outlet /> : <Navigate to={Page.INDEX} />}
        </ErrorBoundary>
    );
};
