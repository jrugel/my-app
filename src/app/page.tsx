import LoginForm from "@/app/api/auth/LoginForm";
import { DEFAULT_MAIN_BG } from "@/lib/constants";

export default function Home() {
  return (
    <div className={`flex min-h-screen ${DEFAULT_MAIN_BG}`}>
      <div className="m-auto">
        <LoginForm />
      </div>
    </div>
  );
}
