import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Hello
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>

  )
}
