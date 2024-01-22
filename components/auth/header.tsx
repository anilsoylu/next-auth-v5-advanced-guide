import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

type Props = {
  label: string
}

const Header = ({ label }: Props) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", fonts.className)}>🔒 Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}

export default Header