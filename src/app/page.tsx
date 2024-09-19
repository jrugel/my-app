import LoginForm from "@/app/api/auth/LoginForm";
import { MAIN_BG } from "@/lib/constants";

export default function Home() {
  return (
    <div className={`flex min-h-screen ${MAIN_BG}`}>
      <div className="m-auto">
        <LoginForm />
      </div>
    </div>
  );
}
