import Link from "next/link"
import { CheckCircle, ClipboardCheck, PhoneCall, Shield, Trash2, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
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
            style={{ backgroundImage: "url('/images/sydney-night-skyline.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Our Comprehensive Services
                </h1>
                <p className="max-w-[900px] text-gray-200 md:text-xl">
                  East Coast Facilities offers a wide range of facility management services to meet all your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Facility Management Solutions</h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground">
                We provide comprehensive facility management services tailored to your specific needs. Our expert team
                ensures your facilities operate efficiently, safely, and cost-effectively.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-1">
              {/* Maintenance Services */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="bg-teal-50 p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Wrench className="h-8 w-8 text-teal-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Maintenance Services</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700">Preventive Maintenance Programs</h4>
                      <p className="text-gray-600">
                        We offer tailored preventive maintenance programs designed to proactively service equipment,
                        systems, and infrastructure before issues arise. These scheduled services help minimize
                        downtime, extend asset life, and improve overall operational efficiency.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700">Corrective Maintenance</h4>
                      <p className="text-gray-600">
                        When unexpected issues occur, our team is ready to provide swift corrective maintenance. This
                        involves diagnosing and addressing equipment or system failures to restore operations as quickly
                        as possible.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700">Equipment Repair and Replacement</h4>
                      <p className="text-gray-600">
                        We provide expert repair and replacement services for a wide range of building equipment and
                        mechanical systems, including HVAC units, lighting, plumbing, and more.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700">Building Systems Maintenance</h4>
                      <p className="text-gray-600">
                        From electrical and plumbing systems to heating, ventilation, and air conditioning (HVAC), we
                        offer comprehensive maintenance solutions for all critical building systems.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700">Facility Inspections and Assessments</h4>
                      <p className="text-gray-600">
                        We conduct thorough facility inspections to evaluate the condition of your building, systems,
                        and equipment. Our assessments identify existing and potential issues, prioritize maintenance
                        tasks, and provide actionable recommendations.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700">Emergency Repair Services</h4>
                      <p className="text-gray-600">
                        Unexpected failures can happen at any time—which is why we offer rapid-response emergency repair
                        services. Our team is available 24/7 to handle urgent repairs, ensuring safety and minimizing
                        downtime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Janitorial Services */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="bg-teal-50 p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Trash2 className="h-8 w-8 text-teal-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Janitorial Services</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-semibold text-xl mb-4 text-teal-700 border-b pb-2">
                        1. Residential Cleaning Services
                      </h4>
                      <p className="mb-4 text-gray-600">
                        We offer tailored residential cleaning solutions to keep your home spotless, healthy, and
                        comfortable.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium">Regular Home Cleaning:</span> Weekly, bi-weekly, or monthly
                            cleaning of all areas in the home, including bathrooms, kitchens, bedrooms, and living
                            areas.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium">Deep Cleaning:</span> In-depth cleaning of your home,
                            including hard-to-reach areas, baseboards, carpets, windows, and more.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium">End of Lease Cleaning:</span> A thorough cleaning service
                            designed to meet real estate agent and landlord requirements for bond returns.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium">Moving In / Out Cleaning:</span> Cleaning services to help
                            prepare your home for a smooth move-in or move-out process.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium">Carpet and Upholstery Cleaning:</span> Steam cleaning to
                            remove stains, dirt, and allergens from carpets and upholstery.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium">Airbnb and Vacation Rental Cleaning:</span> Fast, efficient
                            cleaning to prepare your rental property for guests.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-semibold text-xl mb-4 text-teal-700 border-b pb-2">
                        2. Commercial Cleaning Services
                      </h4>
                      <p className="mb-4 text-gray-600">
                        We specialize in keeping businesses, offices, and other commercial spaces pristine and inviting.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium">Office Cleaning:</span> Daily, weekly, or monthly office
                            cleaning, including desk cleaning, floor care, kitchen and restroom cleaning, and more.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium">Retail and Showroom Cleaning:</span> Maintaining the
                            cleanliness of retail stores, showrooms, and customer-facing areas to create a welcoming
                            atmosphere.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium">Medical and Healthcare Facility Cleaning:</span> Specialized
                            cleaning to meet hygiene standards in medical offices, clinics, and other healthcare
                            facilities.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium">Post-Construction Cleaning:</span> Comprehensive cleaning of
                            newly built or renovated spaces, ensuring they are ready for occupancy.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span>
                            <span className="font-medium">Event Cleaning:</span> Pre-event setup, ongoing cleaning
                            during events, and post-event cleanup to leave venues spotless.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                        <h4 className="font-semibold text-xl mb-4 text-teal-700 border-b pb-2">
                          3. Industrial Cleaning Services
                        </h4>
                        <p className="mb-4 text-gray-600">
                          East Coast Facilities offers specialized services for industrial and manufacturing
                          environments where cleaning standards are critical.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                            <span>
                              <span className="font-medium">Factory & Warehouse Cleaning</span>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                            <span>
                              <span className="font-medium">Machinery Cleaning</span>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                            <span>
                              <span className="font-medium">Site Cleanup</span>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                            <span>
                              <span className="font-medium">Industrial Deep Cleaning</span>
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                        <h4 className="font-semibold text-xl mb-4 text-teal-700 border-b pb-2">
                          4. Specialized Services
                        </h4>
                        <p className="mb-4 text-gray-600">
                          We provide a range of services designed to address unique or one-off cleaning needs.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                            <span>
                              <span className="font-medium">Pressure Washing</span>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                            <span>
                              <span className="font-medium">Window Cleaning</span>
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                            <span>
                              <span className="font-medium">Strata and Building Cleaning</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Services */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="bg-teal-50 p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Shield className="h-8 w-8 text-teal-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Security Services</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700 border-b pb-2">Static Guarding</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            On-site security guards for buildings, offices, retail stores, and residential premises
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Entry/exit control and visitor management</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Routine patrols and incident reporting</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700 border-b pb-2">Mobile Patrols</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            Scheduled or random mobile patrols in marked security vehicles
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            Perimeter checks, lock-up/unlock services, and alarm response
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Ideal for large properties or after-hours coverage</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700 border-b pb-2">CCTV Monitoring</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">24/7 remote video surveillance services</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">CCTV system installation and maintenance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Real-time incident detection and reporting</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700 border-b pb-2">Concierge Security</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Uniformed guards managing front-of-house duties</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Customer service with security oversight</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Visitor screening and lobby management</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700 border-b pb-2">
                        Construction Site Security
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Protection of tools, materials, and heavy machinery</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">After-hours security for high-risk construction zones</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Access control for contractors and deliveries</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                      <h4 className="font-semibold text-lg mb-3 text-teal-700 border-b pb-2">Corporate Security</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Employee and visitor screening</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Internal patrolling and security audits</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-gray-600">Emergency response and evacuation assistance</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700">
                      <Link href="/contact">View All Security Services</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Service Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We follow a structured approach to ensure high-quality service delivery.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-4 mt-8">
              <div className="flex flex-col items-center space-y-3 text-center bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <ClipboardCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  We conduct a thorough assessment of your facility needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <ClipboardCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Planning</h3>
                <p className="text-sm text-muted-foreground">
                  We develop a customized service plan tailored to your requirements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <ClipboardCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Our skilled team executes the plan with precision and care.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <ClipboardCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Monitoring</h3>
                <p className="text-sm text-muted-foreground">We continuously monitor and improve our services.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/sydney-night-skyline.jpeg')" }}
          ></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss your facility management needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
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
