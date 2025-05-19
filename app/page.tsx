import Link from "next/link"
import { CheckCircle, PhoneCall, Shield, Trash2, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Logo } from "@/components/logo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Professional Facility Management Solutions
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Comprehensive facility management services to keep your buildings running efficiently and safely.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                    <Link href="/contact">Request a Consultation</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white hover:bg-white/20 border-white/20"
                  >
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
              <div className="lg:order-last flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 max-w-md">
                  <div className="flex justify-center mb-6">
                    <img src="/images/ecf-logo.png" alt="East Coast Facilities Logo" className="h-24 w-auto" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4 text-center">East Coast Facilities</h2>
                  <p className="text-gray-200 text-center mb-6">
                    Your trusted partner for maintenance, janitorial, and security services.
                  </p>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link href="/contact">Contact Us Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Comprehensive Facility Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide a wide range of services to meet all your facility management needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Wrench className="h-8 w-8 text-teal-600" />
                  <CardTitle className="text-xl">Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    Preventive and corrective maintenance services to keep your facilities in optimal condition.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Trash2 className="h-8 w-8 text-teal-600" />
                  <CardTitle className="text-xl">Janitorial</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    Comprehensive cleaning solutions to maintain a clean, healthy, and professional environment.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Shield className="h-8 w-8 text-teal-600" />
                  <CardTitle className="text-xl">Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    Comprehensive security solutions to protect your property, assets, and people.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose East Coast Facilities</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're committed to excellence in every aspect of facility management.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white">
                <CheckCircle className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">Experienced Team</h3>
                <p className="text-center text-muted-foreground">
                  Our team of professionals brings years of industry experience to every project.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white">
                <CheckCircle className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">Customized Solutions</h3>
                <p className="text-center text-muted-foreground">
                  We tailor our services to meet the specific needs of your facility.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white">
                <CheckCircle className="h-12 w-12 text-teal-600" />
                <h3 className="text-xl font-bold">Cost-Effective</h3>
                <p className="text-center text-muted-foreground">
                  Our solutions help reduce operational costs while maintaining quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/sydney-cityscape.jpeg')" }}
          ></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <img
                src="/images/warehouse-facility.jpeg"
                alt="Modern warehouse facility"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                width={600}
                height={400}
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Ready to Improve Your Facility Management?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contact us today to discuss how East Coast Facilities can help optimize your operations, reduce
                    costs, and improve efficiency.
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
