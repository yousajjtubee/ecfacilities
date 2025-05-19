import Image from "next/image"
import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/ecf-logo.png"
        alt="East Coast Facilities Logo"
        width={120}
        height={60}
        className="h-10 w-auto"
      />
    </Link>
  )
}
