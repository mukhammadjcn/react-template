import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Siz mavjud bo'lmagan sahifaga kirdingiz, asosiy sahifaga qayting !"
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Asosiy sahifaga qaytish
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
