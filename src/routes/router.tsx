import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import { AuthPage, SignOut } from 'auth';

import ErrorBoundary from "./error-boundary";

// import Error403 from 'pages/error/error403';

// import { useAuth } from '../auth/core/auth-context';
import WithSuspense from "./with-suspense";
import { PrivateRoutes } from "./private-routes";

function AppRoutes() {
  // const currentUser = true;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorBoundary />}>
        {/* <Route path="logout" element={<SignOut />} /> */}

        {/* {currentUser ? ( */}
        <>
          <Route path="/*" element={<PrivateRoutes />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
        {/* ) : (
          <>
            <Route path="auth/*" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </>
        )} */}

        {/* Unknown path redirect */}
        {/* <Route path="/error/403" element={<Error403 />} /> */}

        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    )
  );

  return (
    <WithSuspense>
      <RouterProvider router={router} />
    </WithSuspense>
  );
}

export default AppRoutes;
