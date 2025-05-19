import Link from "next/link"
import { PhoneCall, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/logo"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/sydney-cityscape.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  About East Coast Facilities
                </h1>
                <p className="max-w-[900px] text-gray-200 md:text-xl">
                  Your trusted partner in comprehensive facility management solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <img
                src="/images/open-book.jpeg"
                alt="Our story"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                width={600}
                height={400}
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Story</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Founded in 2005, East Coast Facilities has grown from a small maintenance company to a comprehensive
                    facility management provider serving clients across multiple industries. Our journey has been
                    defined by a commitment to excellence, innovation, and customer satisfaction.
                  </p>
                  <p className="text-muted-foreground md:text-lg mt-4">
                    With over 15 years of experience in the industry, we have developed a deep understanding of the
                    unique challenges faced by facility managers and property owners. This expertise allows us to
                    deliver tailored solutions that meet the specific needs of each client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission & Values</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Guided by our core principles to deliver exceptional service.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 mb-2">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To provide innovative and sustainable facility management solutions that enhance the value,
                      efficiency, and longevity of our clients' properties while ensuring a safe and comfortable
                      environment for occupants.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 mb-2">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading facility management company known for excellence, innovation, and
                      sustainability, setting the industry standard for service quality and customer satisfaction.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 mb-2">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Our Values</h3>
                    <p className="text-muted-foreground">
                      Integrity, Excellence, Innovation, Sustainability, and Customer Focus guide every aspect of our
                      operations and relationships with clients, employees, and partners.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/sydney-cityscape.jpeg')" }}
          ></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Work With Us?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact our team today to discuss how East Coast Facilities can help with your facility management
                  needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/contact">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Contact Us Today
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-50 py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <Logo />
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} East Coast Facilities. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
