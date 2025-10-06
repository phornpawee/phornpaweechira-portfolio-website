"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, X } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "certificate"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "หน้าแรก", labelEn: "Home" },
    { id: "about", label: "About Me", labelEn: "About Me" },
    { id: "experience", label: "Experience", labelEn: "Experience" },
    { id: "certificate", label: "Certificate", labelEn: "Certificate" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              <div className="text-left font-serif">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold">Portfolio</span>
                  <span className="text-sm font-normal text-primary">by</span>
                </div>
                <div className="text-lg font-normal text-primary -mt-1">Phornpawee</div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.labelEn}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.labelEn}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <div className="font-sans mb-4">
                  <h1 className="text-6xl md:text-8xl font-bold text-foreground text-balance mb-2">PORTFOLIO</h1>
                  <p className="text-4xl md:text-6xl font-normal text-primary text-balance mb-4">PHORNPAWEE</p>
                  <p className="text-2xl md:text-3xl text-foreground text-balance">
                    Hi, I'm <span className="text-primary">Phornpawee</span>
                  </p>
                </div>
              </div>
              <div className="mb-8">
                <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                  A senior-year student is passionate about developing a career in Systems Analysis and Software
                  Testing, with a solid understanding of business process flows and a foundation in UX/UI Design. I'm
                  eager to learn new technologies and contribute to building effective and user-oriented systems.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/images/profile.jpg"
                  alt="Phornpawee Profile"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground text-pretty">ความหลงใหลในการออกแบบและการสร้างประสบการณ์ที่ดีให้ผู้ใช้</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Contact Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-5 bg-[#7dd3c0] rounded-full"></div>
                  <h3 className="text-lg font-semibold text-card-foreground">Contact</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img src="/images/phone.png" alt="Phone" className="w-5 h-5 rounded-lg" />
                    <span className="text-sm text-card-foreground">+66 97 924 1450</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/email.png" alt="Email" className="w-5 h-5 rounded-lg" />
                    <span className="text-sm text-card-foreground">phornpawee.chira@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/address.png" alt="Address" className="w-5 h-5 rounded-lg" />
                    <span className="text-sm text-card-foreground">คลองหลวง, ปทุมธานี, ประเทศไทย</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5 rounded-lg" />
                    <span className="text-sm text-card-foreground">linkedin.com/in/phornpawee-chira</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-5 bg-[#f5e6a3] rounded-full"></div>
                  <h3 className="text-lg font-semibold text-card-foreground">Skills</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img src="/images/figma.png" alt="Figma" className="w-8 h-8 rounded-lg" />
                    <span className="text-sm text-card-foreground">Figma</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/canva.jpg" alt="Canva" className="w-8 h-8 rounded-lg" />
                    <span className="text-sm text-card-foreground">Canva & Canva Pro</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/capcut.png" alt="CapCut" className="w-8 h-8 rounded-lg" />
                    <span className="text-sm text-card-foreground">CapCut Video Editor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/microsoft-office.png" alt="Microsoft Office" className="w-8 h-8 rounded-lg" />
                    <span className="text-sm text-card-foreground">Microsoft Office</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/credit.jpg" alt="Credit Analysis" className="w-8 h-8 rounded-lg object-cover" />
                    <span className="text-sm text-card-foreground">Credit Analysis & Contract Review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/data.png" alt="Data Management" className="w-8 h-8 rounded-lg object-cover" />
                    <span className="text-sm text-card-foreground">Data Management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Language Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-5 bg-[#f4a688] rounded-full"></div>
                  <h3 className="text-lg font-semibold text-card-foreground">Language</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-card-foreground">ภาษาไทย</p>
                    <p className="text-sm text-muted-foreground">เจ้าของภาษา - คล่องแคล่ว</p>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">ภาษาอังกฤษ</p>
                    <p className="text-sm text-muted-foreground">ระดับกลาง - สื่อสารได้</p>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">ภาษาจีน</p>
                    <p className="text-sm text-muted-foreground">ระดับเริ่มต้น - พื้นฐานและมีความสนใจ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interpersonal Skills Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-5 bg-[#e8d5e8] rounded-full"></div>
                  <h3 className="text-lg font-semibold text-card-foreground">Interpersonal Skills</h3>
                </div>
                <div className="space-y-3 text-sm text-card-foreground">
                  <p>Teamwork & Collaboration</p>
                  <p>Decision-Making</p>
                  <p>Creativity & UX Thinking</p>
                  <p>Time Management</p>
                  <p>Multitasking</p>
                  <p>Attention to Detail</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-8">EXPERIENCE</h2>
            <div className="flex justify-center space-x-16 text-6xl md:text-8xl font-bold text-muted/20 mb-12">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Experience 1 */}
            <Card className="p-6 bg-[#87CEEB] text-white hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="text-6xl font-bold mb-4 opacity-50">1</div>
                <div className="w-full h-32 bg-white/20 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/images/figma-2.png"
                    alt="HoloBizCard Website Interface"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Project - HoloBizCard</h3>
                <p className="text-blue-100 mb-4">UX/UI Designer, Template Design</p>
                <p className="text-sm text-blue-100 mb-4">2024 - Present</p>
                <p className="text-sm leading-relaxed mb-4">
                  ออกแบบ User Interface และ User Experience สำหรับพัฒนานามบัตรเสมือนจริง (AR Business Card)
                  โดยประยุกต์ใช้กับเทคโนโลยี Augmented Reality
                </p>
                <div className="space-y-2">
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.figma.com/proto/ZxqUQZcqyp43S1BaEf4Piq/Website-Page?node-id=629-159&t=xOEkfRHVowY9hRSw-1&scaling=contain&content-scaling=fixed&page-id=629%3A156",
                        "_blank",
                      )
                    }
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    View Project 1 →
                  </button>
                  <button
                    onClick={() => window.open("https://v0.app/chat/recreate-figma-ui-bNGjL1lSkFW", "_blank")}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    View Project 2 →
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.figma.com/proto/ZxqUQZcqyp43S1BaEf4Piq/Website-Page?node-id=974-4351&t=5hFaQTdjmzMepgb8-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
                        "_blank",
                      )
                    }
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    View Project 3 →
                  </button>
                  <button
                    onClick={() => window.open("https://v0.app/chat/modern-newsletter-form-dSB2lFI60Ao", "_blank")}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    View Project 4 →
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Experience 2 */}
            <Card className="p-6 bg-[#FFD700] text-gray-800 hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="text-6xl font-bold mb-4 opacity-30">2</div>
                <div className="w-full h-32 bg-yellow-200/50 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/images/project-2.png"
                    alt="Automatic Piggy Bank Hardware Project"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Project - Automatic Piggy Bank</h3>
                <p className="text-yellow-800 mb-4">Key Operator, Design & Programming</p>
                <p className="text-sm text-yellow-800 mb-4">2025</p>
                <p className="text-sm leading-relaxed mb-4">
                  ออกแบบการทำงานและพัฒนาโค้ดเพื่อกระปุกออมสินอัจฉริยะ (Smart Saving Box) โดยใช้เทคโนโลยี IoT
                  และเซ็นเซอร์ในการตรวจจับเหรียญ
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.canva.com/design/DAGzrHnj1CI/m55awZBSFyxkSmXajwq51g/edit?utm_content=DAGzrHnj1CI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
                      "_blank",
                    )
                  }
                  className="inline-flex items-center px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  View Project →
                </button>
              </CardContent>
            </Card>

            {/* Experience 3 */}
            <Card className="p-6 bg-[#FF7F50] text-white hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="text-6xl font-bold mb-4 opacity-50">3</div>
                <div className="w-full h-32 bg-orange-300/30 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/images/poster.png"
                    alt="AI Training Activity Poster"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Work - AI Training Activity Poster</h3>
                <p className="text-orange-100 mb-4">Infographic Design</p>
                <p className="text-sm text-orange-100 mb-4">2025</p>
                <p className="text-sm leading-relaxed mb-4">
                  ออกแบบโปสเตอร์ประชาสัมพันธ์กิจกรรมอบรมเชิงปฏิบัติการให้กับหน่วยงานSME จังหวัดแพร่
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.canva.com/design/DAGdcpyglm4/B3k1n79IKMqLt9sZrEWqCQ/edit?utm_content=DAGdcpyglm4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
                      "_blank",
                    )
                  }
                  className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  View Poster →
                </button>
              </CardContent>
            </Card>

            {/* Experience 4 */}
            <Card className="p-6 bg-[#FF69B4] text-white hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="text-6xl font-bold mb-4 opacity-50">4</div>
                <div className="w-full h-32 bg-pink-300/30 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/images/application.png"
                    alt="AgriTech Logo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Project - AgriTech</h3>
                <p className="text-pink-100 mb-4">UX/UI Designer, Template Design</p>
                <p className="text-sm text-pink-100 mb-4">2023</p>
                <p className="text-sm leading-relaxed mb-4">
                  ออกแบบเทมเพลตการใช้งานแอปพลิเคชัน ให้เหมาะสมกับความต้องการและพฤติกรรมของผู้ใช้งาน
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.canva.com/design/DAFqTSnnFtw/NE2Qcje67dz9zqZW8AUCwQ/edit?utm_content=DAFqTSnnFtw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
                      "_blank",
                    )
                  }
                  className="inline-flex items-center px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  View Project →
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificate" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-4">Certificate</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              ใบรับรองและประกาศนียบัตรที่แสดงถึงความเชี่ยวชาญและการพัฒนาทักษะอย่างต่อเนื่อง
            </p>
          </div>

          <div className="space-y-8">
            {/* Certificate 1 - CHULA MOOC */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <img
                      src="/images/chula-certificate.png"
                      alt="CHULA MOOC Data Certificate"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-card-foreground">How to make your data more valuable</h3>
                      <Badge variant="outline" className="text-muted-foreground">
                        2025
                      </Badge>
                    </div>
                    <p className="text-accent font-medium mb-4">Chulalongkorn University - CHULA MOOC</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      หลักสูตรการแจ้งคุณค่าการสร้างคุณค่าของข้อมูล การวิเคราะห์และการประยุกต์ใช้ข้อมูลให้เกิดประโยชน์สูงสุด
                      ในยุคดิจิทัลที่ข้อมูลเป็นทรัพยากรที่มีค่า
                    </p>
                    <p className="font-medium text-card-foreground mb-3">ทักษะที่ได้รับ:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Data Analysis</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Data Visualization</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Business Intelligence</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Data Strategy</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Analytics</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certificate 2 - NCSA Cybersecurity */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <img
                      src="/images/cyber-certificate.jpg"
                      alt="NCSA Cybersecurity Certificate"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-card-foreground">Basic Cybersecurity</h3>
                      <Badge variant="outline" className="text-muted-foreground">
                        2024
                      </Badge>
                    </div>
                    <p className="text-accent font-medium mb-4">NCSA Thailand - MOOC Platform</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      ใบรับรองหลักสูตรความปลอดภัยไซเบอร์พื้นฐาน ครอบคลุมหลักการรักษาความปลอดภัยระบบสารสนเทศ การป้องกันภัยคุกคาม
                      และแนวทางปฏิบัติที่ดีในด้านความปลอดภัยดิจิทัล
                    </p>
                    <p className="font-medium text-card-foreground mb-3">ทักษะที่ได้รับ:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Cybersecurity</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Information Security</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Risk Management</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Security Protocols</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Digital Safety</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-serif mb-4">
            <div className="flex justify-center items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold">Portfolio</span>
              <span className="text-base font-normal text-background/80">by</span>
            </div>
            <div className="text-lg font-normal text-background/80">Phornpawee</div>
          </div>
          <p className="text-background/80 mb-4">
            Passionate about System Analysis, Software Testing, and crafting meaningful digital experiences.
          </p>
          <p className="text-background/60 text-sm">Made with ❤️ © 2025 Phornpawee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
