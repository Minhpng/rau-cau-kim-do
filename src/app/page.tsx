import { redirect } from "next/navigation"

export default function Home() {
	redirect("/main")
	return <div>redirecting</div>
}
