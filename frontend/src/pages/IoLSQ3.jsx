import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const IoLSQ = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  //catch the back button and if pressed, clear the stack
  useEffect(() => {
    window.onpopstate = () => {
      navigate(`/${id}/iolsq`, { replace: true });
    };
  }, [navigate]);

  return (
    <div>
      <div id="progress bar" className="mb-1 flex justify-between">
        <span className="text-base font-medium text-lime-700 dark:text-white">
          Index of Learning Styles Questionnaire
        </span>
        <span className="text-sm font-medium text-lime-700 dark:text-white">
          45%
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-lime-600"
          style={{ width: "45%" }}
        />
      </div>
    </div>
  );
};

export default IoLSQ;
