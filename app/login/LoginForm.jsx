import { Button, Label, TextInput } from "flowbite-react";

const LoginForm = ({ id, setId, pw, setPw }) => {
  return (
    <>
      <div>로그인</div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="아이디" />
        </div>
        <TextInput
          id="email1"
          required
          type="text"
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="비밀번호" />
        </div>
        <TextInput
          id="password1"
          required
          type="password"
          onChange={(e) => setPw(e.target.value)}
        />
      </div>
      <Button type="submit" className="mt-5">
        로그인
      </Button>
    </>
  );
};

export default LoginForm;
