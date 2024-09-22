import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";

export default async function () {
    const session = await getServerSession(NEXT_AUTH);
    return <div>
        <Appbar/>
        User Component
        {JSON.stringify(session)}
        <img src={session.user.image} alt={session.user.name || "User Image"} />
    </div>
}