import { UserProfile } from "@clerk/nextjs";
import Header from "../components/Header";

const UserProfilePage = () => (
    <div>
        <Header />
        <div className="flex justify-center">
            <UserProfile path="/user-profile" />
        </div>
    </div>
);

export default UserProfilePage;