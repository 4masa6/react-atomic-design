import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "テスト",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "test@test.com",
  phone: "090-1234-5678",
  company: {
    name: "テスト株式会社"
  },
  website: "https://test.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>あああ</PrimaryButton>
      <SecondaryButton>あああ</SecondaryButton>
      <br />
      <SearchInput />
      <br />
      <UserCard user={user}></UserCard>
    </div>
  );
}
