import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const FirstSettingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-5">
      <h4 className="text-4xl font-bold">First Setup</h4>
      <div className="w-2/4 inputs">
        <div className="flex items-end gap-2">
          <Textarea isRequired label="Projects folder" maxRows={1} variant="bordered" width={240} defaultValue="./project" />
        </div>
      </div>
      <Button onClick={() => navigate("/")} color="primary" variant="bordered" className="text-medium">Back</Button>
    </div>
  );
};
